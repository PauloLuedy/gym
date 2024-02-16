-- CreateTable
CREATE TABLE "User" (
    "userID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userID")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryID" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryID")
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
    "userID" INTEGER NOT NULL,

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
    "trainingID" INTEGER NOT NULL,
    "exerciseID" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "TrainingToCategory" (
    "trainingID" INTEGER NOT NULL,
    "categoryID" INTEGER NOT NULL,

    CONSTRAINT "TrainingToCategory_pkey" PRIMARY KEY ("trainingID","categoryID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_exerciseID_key" ON "Exercise"("exerciseID");

-- CreateIndex
CREATE UNIQUE INDEX "TrainingToExercise_trainingID_exerciseID_key" ON "TrainingToExercise"("trainingID", "exerciseID");

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("userID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToExercise" ADD CONSTRAINT "CategoryToExercise_categoryIdReference_fkey" FOREIGN KEY ("categoryIdReference") REFERENCES "Category"("categoryID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToExercise" ADD CONSTRAINT "CategoryToExercise_exerciseIdReference_fkey" FOREIGN KEY ("exerciseIdReference") REFERENCES "Exercise"("exerciseID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToExercise" ADD CONSTRAINT "TrainingToExercise_trainingID_fkey" FOREIGN KEY ("trainingID") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToExercise" ADD CONSTRAINT "TrainingToExercise_exerciseID_fkey" FOREIGN KEY ("exerciseID") REFERENCES "Exercise"("exerciseID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToCategory" ADD CONSTRAINT "TrainingToCategory_trainingID_fkey" FOREIGN KEY ("trainingID") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingToCategory" ADD CONSTRAINT "TrainingToCategory_categoryID_fkey" FOREIGN KEY ("categoryID") REFERENCES "Category"("categoryID") ON DELETE RESTRICT ON UPDATE CASCADE;
