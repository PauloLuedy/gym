import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
