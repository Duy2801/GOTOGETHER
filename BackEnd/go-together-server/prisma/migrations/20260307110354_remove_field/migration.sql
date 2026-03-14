/*
  Warnings:

  - You are about to drop the column `images` on the `celebrates` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `celebrates` DROP COLUMN `images`;

-- CreateTable
CREATE TABLE `celebrate_images` (
    `id` VARCHAR(191) NOT NULL,
    `celebrateId` VARCHAR(191) NOT NULL,
    `imageUrl` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `celebrate_images_celebrateId_idx`(`celebrateId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `celebrate_images` ADD CONSTRAINT `celebrate_images_celebrateId_fkey` FOREIGN KEY (`celebrateId`) REFERENCES `celebrates`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
