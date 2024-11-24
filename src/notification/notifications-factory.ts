import { HttpException, Injectable } from '@nestjs/common';
import { PrismaEmailNotificationsRepository } from '../infra/database/prisma/repositories/prisma-email-notifications-repository';
import { PrismaSMSNotificationsRepository } from '../infra/database/prisma/repositories/prisma-sms-notifications-repository';
import { PrismaPushNotificationsRepository } from '../infra/database/prisma/repositories/prisma-push-notifications-repository';
import { NotificationType } from 'src/notification/notification-type';

@Injectable()
export class NotificationsRepositoryFactory {
  constructor (
    private prismaEmailNotificationsRepository: PrismaEmailNotificationsRepository,
    private prismaSMSNotificationsRepository: PrismaSMSNotificationsRepository,
    private prismaPushNotificationsRepository: PrismaPushNotificationsRepository
  ) {}

  async create(type: NotificationType) {
    switch (type) {
      case NotificationType.EMAIL:
        return this.prismaEmailNotificationsRepository;
      case NotificationType.SMS:
        return this.prismaSMSNotificationsRepository;
      case NotificationType.PUSH:
        return this.prismaPushNotificationsRepository;
      default:
        throw new HttpException(`Notification type "${type}" is not supported.`, 422);
    }
  }
}
