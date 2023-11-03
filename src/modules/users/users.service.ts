import { Resolver } from '@nestjs/graphql';

import { Inject } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';

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

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
