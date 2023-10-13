import { InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsString
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
  password: string;
}
