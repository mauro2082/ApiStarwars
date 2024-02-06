import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Favorites } from '../../favorites/favorites/favorites.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Favorites, favorites => favorites.user, { nullable: true })
  favorites?: Favorites[];
}

