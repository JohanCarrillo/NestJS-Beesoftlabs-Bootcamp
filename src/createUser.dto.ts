import { Expose } from "class-transformer";
import {
	IsEmail,
	IsInt,
	IsNotEmpty,
	IsString,
	MaxLength,
	Min,
	MinLength,
} from "class-validator";

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	@Expose()
	name: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(3)
	@MaxLength(250)
	@Expose()
	address: string;

	@IsNotEmpty()
	@IsEmail()
	@Expose()
	email: string;

	@IsNotEmpty()
	@IsInt()
	@Min(18)
	@Expose()
	age: number;
}
