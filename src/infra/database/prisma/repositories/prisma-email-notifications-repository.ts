import { NotificationType } from 'src/notification/notification-type';
import { Injectable } from '@nestjs/common';
import { PrismaNotificationsRepository } from './prisma-notifications-repository';

@Injectable()
export class PrismaEmailNotificationsRepository extends PrismaNotificationsRepository {
  async send(message: string, author: string, recipient: string) {
    await this.prisma.notification.create({
      data: {
        message,
        author,
        recipient,
        type: NotificationType.EMAIL
      }
    })
  }
}
