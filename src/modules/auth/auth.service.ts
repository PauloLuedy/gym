import { Injectable, Inject } from '@nestjs/common';
import { UserService } from '../users/users.service';
import * as bcrypit from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../users/DTOs/user';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private useService: UserService,
    @Inject(JwtService) private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<UserDTO | null> {
    const user = await this.useService.findByEmail(email);

    /* if (user) {
      const isValidPassword = await bcrypit.compare(password, user.password);

      if (isValidPassword) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email ou senha invalido'); */
    if (!user) {
      return null;
    }

    return user;
  }

  async login(user: UserDTO): Promise<{ acess_tokem: string }> {
    const payload = {
      email: user.email,
      sub: user.userId,
    };

    return {
      acess_tokem: this.jwtService.sign(payload),
    };

    throw new Error('Email ou senha invalido');
  }

  async verify(token: string): Promise<UserDTO | null> {
    const decode = this.jwtService.verify(token, {
      secret: process.env.JWT_PASSWORD,
    });

    const user = this.useService.findByEmail(decode.email);

    if (!user) {
      throw new Error('Deu erro na autenticação');
    }

    return user;
  }
}
