import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

@InputType()
export class UserDTO {
  @IsString({ message: 'Show be a text' })
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email should not be empty' })
  email: string;

  @IsString({ message: 'Show be a text' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(8, { message: 'deve ter no minimo 8 characters' })
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Deve ter ao menos uma letra maiuscular e uma caracter especial',
  })
  password: string;
}
