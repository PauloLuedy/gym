import 'reflect-metadata'
import {
  Resolver,
  Query,
} from '@nestjs/graphql'
import { Inject } from '@nestjs/common'
import { PrismaService } from '../../../prisma.service';
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { IsEmail } from 'class-validator'

class User {
  @Field((type) => Int)
  id: number

  @Field()
  @IsEmail()
  email: string

  @Field((type) => String, { nullable: true })
  name?: string | null
}

@Resolver('User')
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query((returns) => [User])
  async allUsers() {
    return this.prismaService.user.findMany()
  }

 
}
 

