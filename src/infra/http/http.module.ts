import { Module } from '@nestjs/common';
import { CreateNotificationController } from './controllers/create-notification.controller';
import { FetchNotificationsController } from './controllers/fetch-notifications.controller';
import { CreateNotificationUseCase } from 'src/notification/use-cases/create-notification';
import { DatabaseModule } from '../database/database.module';
import { FetchNotificationsUseCase } from 'src/notification/use-cases/fetch-notifications';
import { GetNotificationUseCase } from 'src/notification/use-cases/get-notification';
import { GetNotificationController } from './controllers/get-notification.controller';
import { RemoveNotificationController } from './controllers/remove-notification.controller';
import { RemoveNotificationUseCase } from 'src/notification/use-cases/remove-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [
    FetchNotificationsController,
    GetNotificationController,
    CreateNotificationController,
    RemoveNotificationController
  ],
  providers: [
    FetchNotificationsUseCase,
    GetNotificationUseCase,
    CreateNotificationUseCase,
    RemoveNotificationUseCase
  ]
})
export class HttpModule {}
