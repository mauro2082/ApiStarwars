import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users/users.module';
import { AuthController } from './modules/auth/auth.controller';
import {FavoritesModule} from './modules/favorites/favorites/favorites.module'



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'starwars',
      password: 'root',
      database: 'starwars',
      autoLoadEntities: true,
      synchronize: true, // Solo para desarrollo. Desactivar en producción.
    }),
    UsersModule,
    AuthModule,
    FavoritesModule,
  ],
  controllers: [AuthController],
})
export class AppModule {}
