import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { ExerciseService } from './exercise.service';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Resolver()
export class ExerciseResolver {
  constructor(private readonly useExercise: ExerciseService) {}

  @Query()
  async getExercises(@Args('categoryID') categoryID: number) {
    return await this.useExercise.getExerciseTable(categoryID);
  }
}
