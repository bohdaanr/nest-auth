import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGraphQlService } from './auth-graph-ql.service';
import { GqlContext } from '../common/interfaces/gql-context.interface';
import { AuthModel } from './models/auth.model';
import { RegisterInput } from './inputs/register.input';
import { LoginInput } from './inputs/login.input';

@Resolver()
export class AuthGraphQlResolver {
  constructor(private readonly authGraphQlService: AuthGraphQlService) {}

  @Mutation(() => AuthModel)
  async register(
    @Context() { res }: GqlContext,
    @Args('data') input: RegisterInput,
  ) {
    return this.authGraphQlService.register(res, input);
  }

  @Mutation(() => AuthModel)
  async login(@Context() { res }: GqlContext, @Args('data') input: LoginInput) {
    return this.authGraphQlService.login(res, input);
  }

  @Mutation(() => AuthModel)
  async refresh(@Context() { req, res }: GqlContext) {
    return this.authGraphQlService.refresh(req, res);
  }

  @Mutation(() => Boolean)
  async logout(@Context() { res }: GqlContext) {
    return this.authGraphQlService.logout(res);
  }
}
