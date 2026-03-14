/*
  Warnings:

  - The primary key for the `devices` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deviceName` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `deviceType` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `devices` table. All the data in the column will be lost.
  - You are about to drop the column `lastActiveAt` on the `devices` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `devices` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `deviceId` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `devices_fcmToken_key` ON `devices`;

-- AlterTable
ALTER TABLE `devices` DROP PRIMARY KEY,
    DROP COLUMN `deviceName`,
    DROP COLUMN `deviceType`,
    DROP COLUMN `isActive`,
    DROP COLUMN `lastActiveAt`,
    ADD COLUMN `deviceId` VARCHAR(191) NOT NULL,
    ADD COLUMN `locale` VARCHAR(191) NULL,
    ADD COLUMN `platform` VARCHAR(191) NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
