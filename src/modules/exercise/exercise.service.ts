import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ExerciseService {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  public async getExerciseTable(categoryID) {
    const idsToExercises = await this.prismaService.categoryToExercise.findMany(
      {
        where: {
          categoryIdReference: categoryID,
        },
      },
    );
    const exerciseIds = idsToExercises.map(
      (exercise) => exercise.exerciseIdReference,
    );

    const exercises = await Promise.all(
      exerciseIds.map((exerciseID) =>
        this.prismaService.exercise.findUnique({
          where: {
            exerciseID: exerciseID,
          },
        }),
      ),
    );

    return exercises;
  }
}
