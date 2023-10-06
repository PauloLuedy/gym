import { Inject } from '@nestjs/common';
import {
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';

@Resolver()
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) { }

  @Query()
  async allUsers() {
    const training = await this.prismaService.training.findMany({
      include: {
        user: true,
        exercise: {
          include: {
            categories: {
              include: {
                category: {
                  include: {
                    exercises: true
                  }
                }
              }
            }
          }
        }
      }
    })
    console.log(training[0].exercise.categories);

    return training
  }

  @Mutation()
  async createUser(_, data) {
    return this.prismaService.user.create({ ...data });
  }
}


