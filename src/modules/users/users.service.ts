import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Inject, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';
import { UserDTO } from './DTOs/user';

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

    return user;
  }

  @Mutation()
  async createUser(input) {
    console.log('Dragao', input);
    const verifySameEmail = await this.prismaService.user.findFirst({
      where: { email: input.email },
    });

    if (verifySameEmail) {
      throw new Error('Esse Usuário já esta cadastrado');
    }

    const addUser = await this.prismaService.user.create({
      data: { ...input },
    });
    return addUser;
  }
}
