import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterRequest {
  @ApiProperty({ description: 'Name', example: 'John Doe' })
  @IsString({ message: 'name should be a string' })
  @IsNotEmpty({ message: 'name shouldnt be empty' })
  @MaxLength(30, { message: 'name should be maximum 50 characters long' })
  name: string;

  @ApiProperty({ description: 'Email', example: 'example@gmail.com' })
  @IsString({ message: 'email should be a string' })
  @IsNotEmpty({ message: 'email shouldn`t be empty' })
  @IsEmail({}, { message: 'email should be a valid email' })
  email: string;

  @IsString({ message: 'password should be a string' })
  @IsNotEmpty({ message: 'password shouldn`t be empty' })
  @MinLength(8, { message: 'password should be minimum 8 characters long' })
  password: string;
}
