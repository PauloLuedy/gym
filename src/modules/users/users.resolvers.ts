import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Inject, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { PrismaService } from '../../prisma.service';
import { UserService } from './users.service';
import { UserDTO } from './DTOs/user';

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query()
  async user(@Args('userId') userId: number) {
    return await this.userService.user(userId);
  }

  @Mutation()
  async createUser(@Args('data', new ValidationPipe()) input: UserDTO) {
    return await this.createUser(input);
  }
}
