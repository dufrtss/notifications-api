import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaEmailNotificationsRepository } from './prisma/repositories/prisma-email-notifications-repository';
import { PrismaSMSNotificationsRepository } from './prisma/repositories/prisma-sms-notifications-repository';
import { PrismaPushNotificationsRepository } from './prisma/repositories/prisma-push-notifications-repository';
import { NotificationsRepositoryFactory } from 'src/notification/notifications-factory';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    PrismaNotificationsRepository,
    NotificationsRepositoryFactory,
    PrismaEmailNotificationsRepository,
    PrismaSMSNotificationsRepository,
    PrismaPushNotificationsRepository
  ],
  exports: [
    PrismaService,
    PrismaNotificationsRepository,
    NotificationsRepositoryFactory,
  ]
})
export class DatabaseModule {}
