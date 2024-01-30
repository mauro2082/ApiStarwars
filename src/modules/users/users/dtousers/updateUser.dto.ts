// updateUser.dto.ts

import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly id: number;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly username?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsEmail()
    readonly email?: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    readonly password?: string;
}
