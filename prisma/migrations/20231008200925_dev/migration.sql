-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "exerciseID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "img" TEXT
);

-- CreateTable
CREATE TABLE "Training" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryToExercise" (
    "categoryIdReference" INTEGER NOT NULL,
    "exerciseIdReference" INTEGER NOT NULL,

    CONSTRAINT "CategoryToExercise_pkey" PRIMARY KEY ("categoryIdReference","exerciseIdReference")
);

-- CreateTable
CREATE TABLE "TrainingToExercise" (
    "id" SERIAL NOT NULL,
    "trainingId" INTEGER NOT NULL,
    "exerciseId" INTEGER NOT NULL,

    CONSTRAINT "TrainingToExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_exerciseID_key" ON "Exercise"("exerciseID");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingToExercise_trainingId_exerciseId_key" ON "TrainingToExercise"("trainingId", "exerciseId");

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToExercise" ADD CONSTRAINT "CategoryToExercise_categoryIdReference_fkey" FOREIGN KEY ("categoryIdReference") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToExercise" ADD CONSTRAINT "CategoryToExercise_exerciseIdReference_fkey" FOREIGN KEY ("exerciseIdReference") REFERENCES "Exercise"("exerciseID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToExercise" ADD CONSTRAINT "TrainingToExercise_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToExercise" ADD CONSTRAINT "TrainingToExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("exerciseID") ON DELETE RESTRICT ON UPDATE CASCADE;
