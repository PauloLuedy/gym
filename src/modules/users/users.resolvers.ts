import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UseGuards, ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
import { UserDTO } from './DTOs/user';
import { UserService } from './users.service';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import * as bcrypt from 'bcrypt';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Resolver()
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query()
  @IsPublic()
  async findByEmail(@Args('email') email: string) {
    try {
      const user = await this.userService.findByEmail(email);
      return user;
    } catch (error) {
      console.error('Erro no findByEmail:', error);
      throw new Error('Credenciais inválidas');
    }
  }

  @Query()
  async user(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return await this.userService.user(userId);
  }

  @Mutation()
  @IsPublic()
  async createUser(@Args('data', new ValidationPipe()) input: UserDTO) {
    const userInfo = {
      ...input,
      password: await bcrypt.hash(input.password, 10),
    };

    return await this.userService.createUser(userInfo);
  }
}
