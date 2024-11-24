import { Injectable } from '@nestjs/common';
import { PrismaNotificationsRepository } from 'src/infra/database/prisma/repositories/prisma-notifications-repository';

@Injectable()
export class FetchNotificationsUseCase {
  constructor(
    private notificationsRepository: PrismaNotificationsRepository
  ) {}

  async execute() {
    const notifications = await this.notificationsRepository.findAll();

    return {
      notifications
    }
  }
}
