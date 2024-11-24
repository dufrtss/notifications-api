import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { RemoveNotificationUseCase } from 'src/notification/use-cases/remove-notification';

@Controller('/notifications/:id')
export class RemoveNotificationController {
  constructor (
    private removeNotification: RemoveNotificationUseCase
  ) {}

  @Delete()
  @HttpCode(200)
  async handle(@Param('id') id: string) {
    await this.removeNotification.execute(id)
  }
}
