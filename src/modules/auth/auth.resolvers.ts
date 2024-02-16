import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { UserDTO } from '../users/DTOs/user';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { IsPublic } from './decorators/is-public.decorator';

@Controller()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req: Request): Promise<{ acess_tokem: string }> {
    return this.authService.login(req.user as UserDTO);
  }
}
