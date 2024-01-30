import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Client } from 'pg';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const client = new Client({
      user: 'starwars',
      host: 'localhost',
      database: 'starwars',
      password: 'root',
      port: 5432,
    });

    await client.connect();

    try {
      const result = await client.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);

      if (result.rows.length > 0) {
        return result.rows[0];
      } else {
        throw new UnauthorizedException('Invalid credentials');
      }
    } finally {
      await client.end();
    }
  }

  async login(user: any): Promise<{ access_token: string }> {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }




}
