import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { NotificationType } from 'src/notification/notification-type';
import { CreateNotificationUseCase } from 'src/notification/use-cases/create-notification';

interface CreateNotificationRequestBody {
  message: string,
  author: string,
  recipient: string,
  type: NotificationType
}

@Controller('/notifications')
export class CreateNotificationController {
  constructor (
    private createNotification: CreateNotificationUseCase,
  ) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateNotificationRequestBody) {
    const { message, author, recipient, type } = body
  
    return await this.createNotification.execute(
      message,
      author,
      recipient,
      type
    )
  }
}
