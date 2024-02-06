// users.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtousers/createUser.dto';
import { UpdateUserDto } from './dtousers/updateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll() {
        try {
            const users = await this.usersService.findAll();
            return { users };
        } catch (error) {
            throw new HttpException('Error al obtener todos los usuarios', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        try {
            const user = await this.usersService.findOne(id);
            if (!user) {
                throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
            }
            return { user };
        } catch (error) {
            throw new HttpException('Error al obtener el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        try {
            const createdUser = await this.usersService.create(createUserDto);
            return { user: createdUser };
        } catch (error) {
            throw new HttpException('Error al crear el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
        try {
            const updatedUser = await this.usersService.update(id, updateUserDto);
            if (!updatedUser) {
                throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
            }
            return { user: updatedUser };
        } catch (error) {
            throw new HttpException('Error al actualizar el usuario', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        try {
            await this.usersService.remove(id);
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


