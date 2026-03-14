/*
  Warnings:

  - You are about to drop the column `defaultCurrency` on the `trips` table. All the data in the column will be lost.
  - You are about to drop the column `destination` on the `trips` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `trips` DROP COLUMN `defaultCurrency`,
    DROP COLUMN `destination`,
    ADD COLUMN `images` VARCHAR(191) NULL;
