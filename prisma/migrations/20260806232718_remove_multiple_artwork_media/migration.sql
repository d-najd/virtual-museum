/*
  Warnings:

  - You are about to drop the `artwork_media` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `artwork_media` DROP FOREIGN KEY `artwork_media_artwork_id_fkey`;

-- DropTable
DROP TABLE `artwork_media`;
