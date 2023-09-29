import 'reflect-metadata'
import {
  Resolver,
  Query,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma.service';
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'



@Resolver()
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query()
  async allUsers() {
    return this.prismaService.user.findMany()
  }

 
}
 

