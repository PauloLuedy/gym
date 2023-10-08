/*
  Warnings:

  - The primary key for the `TrainingToExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `TrainingToExercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TrainingToExercise" DROP CONSTRAINT "TrainingToExercise_pkey",
DROP COLUMN "id";
