-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chester" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "Back" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "Leg" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "Biceps" (
    "id" INTEGER NOT NULL,
    "name" TEXT,
    "img" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Chester_id_key" ON "Chester"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Back_id_key" ON "Back"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Leg_id_key" ON "Leg"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Biceps_id_key" ON "Biceps"("id");
