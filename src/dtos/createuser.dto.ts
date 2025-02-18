import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto{

    id : string

    @IsNotEmpty()
    @IsString()
    username : string;

    @IsNotEmpty()
    @IsStrongPassword()
    password : string;
}