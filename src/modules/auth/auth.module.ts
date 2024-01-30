import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_secret_key', // Reemplaza con una clave secreta segura
      signOptions: { expiresIn: '1h' }, // Opciones de firma del token
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}