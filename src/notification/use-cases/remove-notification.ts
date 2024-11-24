import { Injectable } from '@nestjs/common';
import { PrismaNotificationsRepository } from 'src/infra/database/prisma/repositories/prisma-notifications-repository';

@Injectable()
export class RemoveNotificationUseCase {
  constructor(
    private notificationsRepository: PrismaNotificationsRepository
  ) {}

  async execute(id: string) {
    await this.notificationsRepository.remove(id);
  }
}
