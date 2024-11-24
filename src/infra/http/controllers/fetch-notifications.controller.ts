import { Controller, Get, HttpCode } from '@nestjs/common';
import { FetchNotificationsUseCase } from 'src/notification/use-cases/fetch-notifications';

@Controller('/notifications')
export class FetchNotificationsController {
  constructor (
    private fetchNotifications: FetchNotificationsUseCase
  ) {}

  @Get()
  @HttpCode(200)
  async handle() {
    return await this.fetchNotifications.execute()
  }
}
