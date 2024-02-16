import { Resolver } from '@nestjs/graphql';
import { Inject, Injectable } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';

@Injectable()
@Resolver()
export class UserService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async user(userID) {
    const user = await this.prismaService.user.findUnique({
      where: { userID },
      include: {
        trainings: {
          include: {
            exercises: {
              include: {
                exercise: {
                  include: {
                    category: {
                      include: {
                        category: true,
                      },
                    },
                  },
                },
              },
            },
            categories: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });

    if (!user) {
      throw new Error(`Usuário com ID ${userID} não encontrado`);
    }

    return { ...user, password: '***' };
  }

  async createUser(input) {
    const verifySameEmail = await this.prismaService.user.findFirst({
      where: { email: input.email },
    });

    if (verifySameEmail) {
      throw new Error('Esse Usuário já esta cadastrado');
    }

    const createdUser = await this.prismaService.user.create({
      data: { ...input },
    });

    return { ...createdUser, password: '***' };
  }

  async findByEmail(email: string): Promise<any | undefined> {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('VSF');
    }

    const trainings = await this.prismaService.training.findMany({
      where: {
        userID: user.userID,
      },
    });

    if (trainings.length === 0) {
      return { ...user, trainings: [] };
    }

    const trainingIds = trainings.map((training) => training.id);

    const traingToCategory =
      await this.prismaService.trainingToCategory.findMany({
        where: {
          trainingID: {
            in: trainingIds,
          },
        },
      });

    const traingToCategoryIds = traingToCategory.map(
      (categories) => categories.categoryID,
    );

    const selectedCategories = await this.prismaService.category.findMany({
      where: {
        categoryID: {
          in: traingToCategoryIds,
        },
      },
    });

    const traingToExercise =
      await this.prismaService.trainingToExercise.findMany({
        where: {
          trainingID: {
            in: trainingIds,
          },
        },
      });

    const traingToExerciseIds = traingToExercise.map(
      (traingToExerciseId) => traingToExerciseId.exerciseID,
    );

    const selectdExercices = await this.prismaService.exercise.findMany({
      where: {
        exerciseID: {
          in: traingToExerciseIds,
        },
      },
    });

    const userMaker = {
      ...user,
      trainings: trainings.map((itemTraining) => ({
        id: itemTraining.id,
        categories: selectedCategories.map((item) => ({
          category: {
            categoryID: item.categoryID,
            name: item.name,
          },
        })),
        exercises: selectdExercices.map((exerciseItem) => ({
          exercise: {
            exerciseID: exerciseItem.exerciseID,
            name: exerciseItem.name,
            img: exerciseItem.img,
          },
        })),
      })),
    };

    return userMaker;
  }
}
