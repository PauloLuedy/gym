import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { PrismaService } from '../../prisma.service';
import { ExerciseResolver } from './exercise.resolver';

@Module({
  providers: [ExerciseService, PrismaService, ExerciseResolver],
  exports: [PrismaService],
})
export class ExerciseModule {}
