import { applyDecorators, UseGuards } from '@nestjs/common';
import { JwtGuard_Gql } from '../guards/jwt.guard';
import { UserRole } from '@prisma/client';
import { Roles } from './role.decorator';
import { RolesGuard } from '../guards/role.guard';
// import { JwtGuard } from '../../auth/guards/auth.guard';

export function Authorization(...roles: UserRole[]) {
  if (roles.length > 0) {
    return applyDecorators(
      Roles(...roles),
      UseGuards(JwtGuard_Gql, RolesGuard),
    );
  }
  return applyDecorators(UseGuards(JwtGuard_Gql));
}
