/*
  Warnings:

  - You are about to drop the column `anime_image` on the `collection` table. All the data in the column will be lost.
  - You are about to drop the column `anime_title` on the `collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `collection` DROP COLUMN `anime_image`,
    DROP COLUMN `anime_title`,
    ADD COLUMN `item_image` VARCHAR(191) NULL,
    ADD COLUMN `item_title` VARCHAR(191) NULL;
