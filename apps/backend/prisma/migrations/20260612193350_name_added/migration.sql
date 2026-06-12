/*
  Warnings:

  - Added the required column `name` to the `SanctuaryUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SanctuaryUser" ADD COLUMN     "name" TEXT NOT NULL;
