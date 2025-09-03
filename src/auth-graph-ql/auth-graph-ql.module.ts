import { Module } from '@nestjs/common';
import { AuthGraphQlService } from './auth-graph-ql.service';
import { AuthGraphQlResolver } from './auth-graph-ql.resolver';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJwtConfig } from '../config/jwt.config';
import { JwtStrategy } from './strategies/jwt.strategy';
// import { JwtStrategy } from '../auth/strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: getJwtConfig,
      inject: [ConfigService],
    }),
  ],
  providers: [AuthGraphQlResolver, AuthGraphQlService, JwtStrategy],
})
export class AuthGraphQlModule {}
