import { Resolver, Query, Args } from '@nestjs/graphql';

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
}
