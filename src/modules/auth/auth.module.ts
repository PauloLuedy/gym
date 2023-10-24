import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolvers';
import { UserService } from '../users/users.service';
import { PrismaService } from 'src/prisma.service';
import { LocalStrategy } from './guards/strategies/local.strategy';
import { UserModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_PASSWORD,
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthResolver, AuthService, PrismaService, LocalStrategy],
})
export class AuthModule {}
