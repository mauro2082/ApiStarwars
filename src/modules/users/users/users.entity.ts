// users.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
