import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { UserDTO } from '../users/DTOs/user';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request): Promise<{ acess_tokem: string }> {
    console.log('aqui', req);
    return this.authService.login(req.user as UserDTO);
  }
}
