import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'starwars',
      password: 'root',
      database: 'starwars',
      autoLoadEntities: true,
      synchronize: true,  // solo para produccion
  })],
})
export class AppModule {}