import { Injectable, Inject } from '@nestjs/common';
import { UserService } from '../users/users.service';
import * as bcrypit from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(@Inject(UserService) private useService: UserService) {}

  async validateUser(email: string, password: string) {
    console.log('aqui', email);
    const user = await this.useService.findByEmail(email);

    if (user) {
      const isValidPassword = await bcrypit.compare(password, user.password);

      if (isValidPassword) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email ou senha invalido');
  }
}
