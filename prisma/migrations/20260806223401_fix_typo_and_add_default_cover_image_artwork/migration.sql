/*
  Warnings:

  - You are about to drop the column `conver_image_url` on the `museum` table. All the data in the column will be lost.
  - Added the required column `cover_image_url` to the `artwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cover_image_url` to the `museum` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artwork` ADD COLUMN `cover_image_url` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `museum` DROP COLUMN `conver_image_url`,
    ADD COLUMN `cover_image_url` VARCHAR(191) NOT NULL;
