import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {FavoritesController} from './favorites.controller';
import { Favorites } from '../../favorites/favorites/favorites.entity';


@Module({
    imports: [TypeOrmModule.forFeature([Favorites])],
    controllers: [FavoritesController],  
    providers:  [FavoritesService], 
})
export class FavoritesModule {}