import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UserModule } from './modules/users/users.module';
import { PrismaService } from './prisma.service';
import { TrainingModule } from './modules/training/training.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { GqlAuthGuard } from './modules/auth/guards/gql-auth.guard';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/modules/**/*.graphql'],
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    UserModule,
    TrainingModule,
    AuthModule,
  ],
  providers: [
    PrismaService,
    UserModule,
    TrainingModule,
    AuthModule,
    {
      provide: APP_GUARD,
      useClass: GqlAuthGuard,
    },
  ],
})
export class AppModule {}
