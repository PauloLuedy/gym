import { Module } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingResolver } from './training.resolver';
import { PrismaService } from '../../prisma.service';

@Module({
  providers: [TrainingResolver, TrainingService, PrismaService],
  exports: [PrismaService],
})
export class TrainingModule {}
