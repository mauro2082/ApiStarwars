
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from '../../users/users/users.entity';

@Entity()
export class Favorites {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Users, user => user.favorites)
  @JoinColumn({ name: 'user_id' })
  user: number;
}