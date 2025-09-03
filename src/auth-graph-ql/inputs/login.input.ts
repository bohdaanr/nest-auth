import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginInput {
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
