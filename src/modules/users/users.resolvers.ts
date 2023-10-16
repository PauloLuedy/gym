import { Args, Mutation, Query, Resolver, Int } from '@nestjs/graphql'; // Importe o 'Int' para representar um número inteiro

import { ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { UserService } from './users.service';
import { UserDTO } from './DTOs/user';

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query()
  async user(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return await this.userService.user(userId);
  }

  @Mutation()
  //@ts-ignore
  async createUser(@Args({ name: 'data', type: () => data }) data: any) {
    console.log('aquiiii', data);
    return await this.userService.createUser(data);
  }
}
