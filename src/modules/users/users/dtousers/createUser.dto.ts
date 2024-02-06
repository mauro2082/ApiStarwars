import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    //@IsNotEmpty()
    //@IsString()
    //readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly cedula: number;

    @IsNotEmpty()
    @IsString()
    readonly username: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsString()
    readonly password: string;
}