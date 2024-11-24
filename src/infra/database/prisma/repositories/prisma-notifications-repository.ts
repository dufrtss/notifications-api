import { NotificationsRepository } from '../../../../notification/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(
    protected prisma: PrismaService
  ) {}

  async findAll() {
    const notifications = await this.prisma.notification.findMany()

    return notifications
  }

  async findById(id: string) {
    const notification = await this.prisma.notification.findFirst({
      where: {
        id
      }
    })
    
    if (!notification) {
      return
    }

    return notification
  }

  async send(message: string, author: string, recipient: string) {
    await this.prisma.notification.create({
      data: {
        message,
        author,
        recipient
      }
    })
  }

  async remove(id: string) {
    await this.prisma.notification.delete({
      where: {
        id
      }
    })
  }
}
