import { HttpException, Injectable } from '@nestjs/common';
import { PrismaNotificationsRepository } from 'src/infra/database/prisma/repositories/prisma-notifications-repository';

@Injectable()
export class GetNotificationUseCase {
  constructor(
    private notificationsRepository: PrismaNotificationsRepository
  ) {}

  async execute(id: string) {
    const notification = await this.notificationsRepository.findById(id);

    if (!notification) {
      throw new HttpException('No notification found.', 204)
    }

    return {
      notification
    }
  }
}
