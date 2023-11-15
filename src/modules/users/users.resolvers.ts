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

  @UseGuards(GqlAuthGuard)
  @Query()
  async findByEmail(@Args('email') email: string) {
    return await this.userService.findByEmail(email);
  }

  @Query()
  async user(@Args({ name: 'userId', type: () => Int }) userId: number) {
    return await this.userService.user(userId);
  }

  @Mutation()
  @IsPublic()
  //@ts-ignore
  async createUser(@Args('data', new ValidationPipe()) input: UserDTO) {
    const userInfo = {
      ...input,
      password: await bcrypt.hash(input.password, 10),
    };

    return await this.userService.createUser(userInfo);
  }
}
