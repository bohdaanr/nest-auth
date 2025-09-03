import { Query, Resolver } from '@nestjs/graphql';
import { UserGraphQlService } from './user-graph-ql.service';
import { UserModel } from './models/user.model';
// import { Authorized } from '../auth/decorators/authorized.decorator';
import { User, UserRole } from '@prisma/client';
import { Authorization } from '../auth-graph-ql/decorators/auth.decorator';
import { Authorized } from '../auth-graph-ql/decorators/authorized.guard';
// import { Authorized } from '../auth/decorators/authorized.decorator';

@Resolver()
export class UserGraphQlResolver {
  constructor(private readonly userGraphQlService: UserGraphQlService) {}

  @Authorization()
  @Query(() => UserModel)
  getMe(@Authorized() user: User) {
    return user;
  }

  @Authorization(UserRole.ADMIN)
  @Query(() => [UserModel])
  async getUsers() {
    return await this.userGraphQlService.findAll();
  }
}
