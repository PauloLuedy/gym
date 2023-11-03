import {
  HttpCode,
  HttpStatus,
  Inject,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

export class AuthResolver {
  constructor(private readonly useAuthService: AuthService) {}

  @Mutation()
  @UseGuards(LocalAuthGuard)
  async login(email: string, password: string) {
    const user = await this.useAuthService.validateUser(email, password);

    return user;
  }
}
