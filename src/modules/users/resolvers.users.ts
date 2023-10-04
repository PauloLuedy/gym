import { Inject } from '@nestjs/common';
import {
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
    return this.prismaService.usuario.findMany()
  }
}


