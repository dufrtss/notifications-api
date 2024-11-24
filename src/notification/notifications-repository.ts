import { INotification } from './notification';

export interface NotificationsRepository {
  findAll(): Promise<INotification[] | []>
  findById(id: string): Promise<INotification | void>
  send(message: string, author: string, recipient: string): Promise<void>
  remove(id: string): Promise<void>
}
