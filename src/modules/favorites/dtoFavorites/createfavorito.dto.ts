import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFavoriteDTO {
    @IsNotEmpty()
    @IsString()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

}