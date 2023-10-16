import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'; // Importe o 'Int' para representar um número inteiro

import { ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { UserDTO } from './DTOs/user';
import { UserService } from './users.service';

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) { }

  @Query()
  async user(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return await this.userService.user(userId);
  }

  @Mutation()
  //@ts-ignore
  async createUser(@Args('data', new ValidationPipe()) input: UserDTO) {
    return await this.userService.createUser(input);
  }
}
