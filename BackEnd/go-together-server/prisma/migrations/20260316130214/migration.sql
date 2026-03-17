/*
  Warnings:

  - You are about to drop the column `tripId` on the `budgets` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,categoryId,month,year]` on the table `budgets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `month` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `budgets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `budgets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `budgets` DROP FOREIGN KEY `budgets_tripId_fkey`;

-- DropIndex
DROP INDEX `budgets_tripId_categoryId_key` ON `budgets`;

-- AlterTable
ALTER TABLE `budgets` DROP COLUMN `tripId`,
    ADD COLUMN `month` INTEGER NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `expense_splits` ADD COLUMN `confirmed` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `confirmedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `trip_members` ADD COLUMN `leftAt` DATETIME(3) NULL;

-- CreateIndex
CREATE INDEX `budgets_userId_idx` ON `budgets`(`userId`);

-- CreateIndex
CREATE UNIQUE INDEX `budgets_userId_categoryId_month_year_key` ON `budgets`(`userId`, `categoryId`, `month`, `year`);

-- AddForeignKey
ALTER TABLE `budgets` ADD CONSTRAINT `budgets_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
