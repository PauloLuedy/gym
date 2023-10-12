import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';
import { Inject } from '@nestjs/common';

@Resolver()
export class UserResolvers {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

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
  async createUser(_, args) {
    console.log('aquiii', args.data);
    const verifySameEmail = await this.prismaService.user.findFirst({
      where: {
        email: args.data.email,
      },
    });

    if (verifySameEmail) {
      console.log('simmm');
      throw new Error('Usuario ja cadastrado');
    }

    if (!args.data.email || !args.data.password || !args.data.name) {
      throw new Error('e necessario preencher email-senha e nome');
    }

    if (!verifySameEmail) {
      const addUser = await this.prismaService.user.create({
        data: {
          name: args.data.name,
          email: args.data.email,
          password: args.data.password,
        },
      });
      return addUser;
    }
  }

  @Mutation()
  async createTraining(_, args) {
    console.log('aquiii', args.data);
    const verifyUser = await this.prismaService.user.findUnique({
      where: {
        userId: args.data.userId,
      },
    });
    if (!verifyUser) {
      throw new Error(`Usuário com ID ${args.data.userId} não encontrado`);
    }

    const newTraining = await this.prismaService.training.create({
      data: {
        userId: args.data.userId,
      },
    });

    for (const exercise of args.data.exercises) {
      await this.prismaService.trainingToExercise.create({
        data: {
          //@ts-ignore
          training: newTraining.id,
          trainingId: newTraining.id,
          exerciseTrainigId: exercise.exerciseId,
        },
      });
    }

    for (const category of args.data.categories) {
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
