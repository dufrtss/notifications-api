import { Injectable } from '@nestjs/common';
import { NotificationType } from '../notification-type';
import { NotificationsRepositoryFactory } from '../notifications-factory';

@Injectable()
export class CreateNotificationUseCase {
  constructor(
    private notificationsRepositoryFactory: NotificationsRepositoryFactory
  ) {}

  async execute(message: string, author: string, recipient: string, type: NotificationType) {
    const notificationsRepository = await this.notificationsRepositoryFactory.create(type)

    const notification = await notificationsRepository.send(message, author, recipient)

    return {
      notification
    }
  }
}
