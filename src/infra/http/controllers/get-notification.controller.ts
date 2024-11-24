import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { GetNotificationUseCase } from 'src/notification/use-cases/get-notification';

@Controller('/notifications/:id')
export class GetNotificationController {
  constructor (
    private getNotification: GetNotificationUseCase
  ) {}

  @Get()
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    return await this.getNotification.execute(id)
  }
}
