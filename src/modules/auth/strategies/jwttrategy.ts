import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../../users/users.service';
import { UserDTO } from 'src/modules/users/DTOs/user';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_PASSWORD,
    });
  }

  async validate(validationPayload: {
    email: string;
    sub: string;
  }): Promise<UserDTO | null> {
    return await this.userService.findByEmail(validationPayload.email);
  }
}
