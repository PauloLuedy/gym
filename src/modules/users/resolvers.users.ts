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
                exercise: true,
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

  async createTraine(_, args) {}
}
