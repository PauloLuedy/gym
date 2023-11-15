import { Resolver } from '@nestjs/graphql';
import { UserDTO } from './DTOs/user';
import { Inject, Injectable } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';

@Injectable()
@Resolver()
export class UserService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  async user(userId) {
    const user = await this.prismaService.user.findUnique({
      where: { userId },
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
      throw new Error(`Usuário com ID ${userId} não encontrado`);
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
      throw new Error('Email ou senha invalido');
    }

    const trainings = await this.prismaService.training.findMany({
      where: {
        userId: user.userId,
      },
    });

    if (trainings.length === 0) {
      return { ...user, trainings: [] };
    }

    const trainingIds = trainings.map((training) => training.id);

    const traingToCategory =
      await this.prismaService.trainingToCategory.findMany({
        where: {
          trainingId: {
            in: trainingIds,
          },
        },
      });

    const traingToCategoryIds = traingToCategory.map(
      (categories) => categories.categoryId,
    );

    const selectedCategories = await this.prismaService.category.findMany({
      where: {
        categoryId: {
          in: traingToCategoryIds,
        },
      },
    });

    const traingToExercise =
      await this.prismaService.trainingToExercise.findMany({
        where: {
          trainingId: {
            in: trainingIds,
          },
        },
      });

    const traingToExerciseIds = traingToExercise.map(
      (traingToExerciseId) => traingToExerciseId.exerciseTrainigId,
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
            categoryID: item.categoryId,
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
