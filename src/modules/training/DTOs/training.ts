import { InputType } from '@nestjs/graphql';

@InputType()
export class TrainingDTO {
  userId?: number;
  exercises?: CreateExerciseInput[];
  categories?: CreateCategoryToExerciseInput[];
}

@InputType()
export class CreateExerciseInput {
  exerciseID?: number;
  name?: string;
  img?: string;
  category?: CreateCategoryToExerciseInput;
}

@InputType()
export class CreateCategoryToExerciseInput {
  categoryIdReference?: number;
  exerciseIdReference?: number;
}
