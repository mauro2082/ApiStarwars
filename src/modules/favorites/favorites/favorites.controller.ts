import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDTO } from '../dtoFavorites/createfavorito.dto';

@Controller('favorites')
export class FavoritesController {

    constructor(private readonly favoriteService: FavoritesService) { }

   

    @Post()
    async create(@Body() createFavoriteDTO: CreateFavoriteDTO) {
        try {
            const createFavorite = await this.favoriteService.create(createFavoriteDTO);  
            return { favorite: createFavorite };
        } catch (error) {
            throw new HttpException('Error al crear favorito', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            await this.favoriteService.remove(id);   // modificar 
            return { message: 'Favorito eliminado exitosamente' };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error; // ya es una HttpException, solo relánzala
            } else {
                throw new HttpException('Error al eliminar el favorito', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

}


