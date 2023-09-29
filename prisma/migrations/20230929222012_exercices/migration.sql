/*
  Warnings:

  - The primary key for the `Back` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Biceps` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Chester` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Leg` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `Back` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Biceps` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Chester` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Leg` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Back" DROP CONSTRAINT "Back_pkey",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Back_id_seq";

-- AlterTable
ALTER TABLE "Biceps" DROP CONSTRAINT "Biceps_pkey",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Biceps_id_seq";

-- AlterTable
ALTER TABLE "Chester" DROP CONSTRAINT "Chester_pkey",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Chester_id_seq";

-- AlterTable
ALTER TABLE "Leg" DROP CONSTRAINT "Leg_pkey",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Leg_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "Back_id_key" ON "Back"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Biceps_id_key" ON "Biceps"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chester_id_key" ON "Chester"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Leg_id_key" ON "Leg"("id");
