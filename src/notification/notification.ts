export interface INotification {
  id: string,
  message: string,
  author: string,
  recipient: string,
  type: string | null,
  createdAt: Date
}

export class NotificationEntity {
  constructor(
    private id: string,
    private message: string,
    private author: string,
    private recipient: string,
    private type: string | null,
    private createdAt: Date
  ) {}

  getId(id: string) {
    this.id = id
  }

  getMessage(message: string) {
    this.message = message
  }
  
  getAuthor(author: string) {
    this.author = author
  }

  getRecipient(recipient: string) {
    this.recipient = recipient
  }

  getType(type: string) {
    this.type = type
  }

  getCreatedAt(createdAt: Date) {
    this.createdAt = createdAt
  }
}
