import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RegisterInput {
  @Field(() => String)
  @IsString({ message: 'name should be a string' })
  @IsNotEmpty({ message: 'name should`t be empty' })
  @MaxLength(30, { message: 'name should be maximum 50 characters long' })
  name: string;

  @Field(() => String)
  @IsString({ message: 'email should be a string' })
  @IsNotEmpty({ message: 'email shouldn`t be empty' })
  @IsEmail({}, { message: 'email should be a valid email' })
  email: string;

  @Field(() => String)
  @IsString({ message: 'password should be a string' })
  @IsNotEmpty({ message: 'password shouldn`t be empty' })
  @MinLength(8, { message: 'password should be minimum 8 characters long' })
  password: string;
}
