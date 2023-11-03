import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserResolvers } from './users.resolvers';
import { PrismaService } from '../../prisma.service';

@Module({
  providers: [UserResolvers, PrismaService, UserService],
  exports: [PrismaService, UserService],
})
export class UserModule {}
