import { Module } from '@nestjs/common';
import { UserGraphQlService } from './user-graph-ql.service';
import { UserGraphQlResolver } from './user-graph-ql.resolver';

@Module({
  providers: [UserGraphQlResolver, UserGraphQlService],
})
export class UserGraphQlModule {}
