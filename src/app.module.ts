import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { getGraphQlConfig } from './config/graphql.config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AuthGraphQlModule } from './auth-graph-ql/auth-graph-ql.module';
import { UserGraphQlModule } from './user-graph-ql/user-graph-ql.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    GraphQLModule.forRootAsync({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      // useClass: undefined,
      // useExisting: undefined,
      useFactory: getGraphQlConfig,
    }),
    AuthGraphQlModule,
    UserGraphQlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
