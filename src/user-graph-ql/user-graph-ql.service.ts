import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserModel } from './models/user.model';

@Injectable()
export class UserGraphQlService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const users = await this.prismaService.user.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return users.map((u) => new UserModel(u));
  }
}
