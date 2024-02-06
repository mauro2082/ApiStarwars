import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFavoriteDTO {
    //@IsNotEmpty()
    //@IsNumber()
    //readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly user_id: number;

}