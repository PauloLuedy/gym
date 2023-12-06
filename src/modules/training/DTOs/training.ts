import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateTrainingDTO {
  userID?: number;
  exercises?: CreateCategorynputTraining[];
  categories: CreateExerciseInputTraining[];
}

class CreateExerciseInputTraining {
  exerciseID: number;
}

class CreateCategorynputTraining {
  categoryID: number;
}
