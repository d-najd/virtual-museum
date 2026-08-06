/*
  Warnings:

  - You are about to drop the `artwork_author` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `author_id` to the `artwork` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `artwork_author` DROP FOREIGN KEY `artwork_author_artwork_id_fkey`;

-- DropForeignKey
ALTER TABLE `artwork_author` DROP FOREIGN KEY `artwork_author_author_id_fkey`;

-- AlterTable
ALTER TABLE `artwork` ADD COLUMN `author_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `artwork_author`;

-- AddForeignKey
ALTER TABLE `artwork` ADD CONSTRAINT `artwork_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
