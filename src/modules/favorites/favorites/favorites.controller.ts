import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './favorites.service';
import { CreateFavoriteDTO } from '../dtoFavorites/createfavorito.dto';

@Controller('favorites')
export class FavoritesController {

    constructor(private readonly usersService: UsersService) { }

   

    @Post()
    async create(@Body() createUserDto: CreateFavoriteDTO) {
        try {
            const CreateFavorite = await this.usersService.create(CreateFavoriteDTO);  // modificar cuando se cree los servicios 
            return { user: CreateFavorite };
        } catch (error) {
            throw new HttpException('Error al crear el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            await this.usersService.remove(id);   // modificar 
            return { message: 'Usuario eliminado exitosamente' };
        } catch (error) {
            if (error instanceof HttpException) {
                throw error; // ya es una HttpException, solo relánzala
            } else {
                throw new HttpException('Error al eliminar el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    }

}


