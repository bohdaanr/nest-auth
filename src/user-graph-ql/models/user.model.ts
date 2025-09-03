import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';

registerEnumType(UserRole, {
  name: 'UserRole',
});

@ObjectType({ description: 'user model' })
@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => UserRole)
  role: UserRole;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id!;
    this.name = user.name!;
    this.email = user.email!;
    this.password = user.password!;
    this.role = user.role!;
    this.createdAt = user.createdAt!;
    this.updatedAt = user.updatedAt!;
  }
}
