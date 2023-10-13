import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Inject, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';
import { UserDTO } from './DTOs/user';

@Resolver()
export class UserResolvers {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  @Query()
  async user(@Args('userId') userId: number) {
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

    return user;
  }

  @Mutation()
  async createUser(@Args('data', new ValidationPipe()) input: UserDTO) {

    const verifySameEmail = await this.prismaService.user.findFirst({
      where: { email: input.email }
    });

    if (verifySameEmail) {
      throw new Error('Esse Usuário já esta cadastrado');
    }

    const addUser = await this.prismaService.user.create({ data: { ...input } });
    return addUser;
  }

  @Mutation()
  async createTraining(_, { data }) {
    const verifyUser = await this.prismaService.user.findUnique({
      where: {
        userId: data.userId,
      },
    });

    if (!verifyUser) {
      throw new Error(`Usuário com ID ${data.userId} não encontrado`);
    }

    const newTraining = await this.prismaService.training.create({
      data: {
        userId: data.userId,
      },
    });

    for (const exercise of data.exercises) {
      await this.prismaService.trainingToExercise.create({
        data: {
          //@ts-ignore
          training: newTraining.id,
          trainingId: newTraining.id,
          exerciseTrainigId: exercise.exerciseId,
        },
      });
    }

    for (const category of data.categories) {
      await this.prismaService.trainingToCategory.create({
        data: {
          trainingId: newTraining.id,
          categoryId: category.categoryId,
        },
      });
    }

    const training = await this.prismaService.training.findUnique({
      where: {
        id: newTraining.id,
      },
    });

    return training;
  }
}
