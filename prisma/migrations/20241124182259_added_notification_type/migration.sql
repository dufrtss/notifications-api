-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('SMS', 'EMAIL', 'PUSH');

-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "type" "NotificationType";
