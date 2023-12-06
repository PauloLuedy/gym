import { InputType } from '@nestjs/graphql';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

@InputType()
class TrainingDTO {
  userId?: number;
  exercises?: CreateExerciseInput[];
  categories?: CreateCategoryToExerciseInput[];
}

@InputType()
class CreateExerciseInput {
  exerciseID?: number;
  name?: string;
  img?: string;
  category?: CreateCategoryToExerciseInput;
}

@InputType()
class CreateCategoryToExerciseInput {
  categoryIdReference?: number;
  exerciseIdReference?: number;
}
@InputType()
export class UserDTO {
  userID: number;

  @IsString({ message: 'Deve ser um texto' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio' })
  email: string;

  @IsString({ message: 'Deve ser um texto' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(8, { message: 'Deve ter no mínimo 8 caracteres' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Deve ter ao menos uma letra maiúscula e um caractere especial',
  })
  password: string;

  training?: TrainingDTO;
}
