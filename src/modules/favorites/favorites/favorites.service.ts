import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorites } from '../../favorites/favorites/favorites.entity';
import {CreateFavoriteDTO} from '../dtoFavorites/createfavorito.dto';


@Injectable()
export class FavoritesService {

  constructor(
    @InjectRepository(Favorites)
    private readonly favoritesRepository: Repository<Favorites>,
  ) {}

  

  async create(createFavoriteDTO: CreateFavoriteDTO): Promise<Favorites> {
    const favorite = this.favoritesRepository.create(createFavoriteDTO);
    return await this.favoritesRepository.save(favorite);
  }

  

  async remove(id: string): Promise<void> {
    await this.favoritesRepository.delete(id);
  }
}

