/*
  Warnings:

  - Added the required column `isAnime` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `collection` ADD COLUMN `isAnime` BOOLEAN NOT NULL;
