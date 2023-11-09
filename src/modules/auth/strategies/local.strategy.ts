import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserDTO } from 'src/modules/users/DTOs/user';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<UserDTO> {
    const user = await this.authService.validateUser(email, password);
    console.log('aqui');
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}