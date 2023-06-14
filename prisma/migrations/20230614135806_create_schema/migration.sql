/*
  Warnings:

  - Added the required column `name` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Music` ADD COLUMN `name` VARCHAR(191) NOT NULL;
