-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercicio" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "tipo" TEXT,
    "usuarioId" INTEGER NOT NULL,
    "pernaId" INTEGER,
    "bracoId" INTEGER,

    CONSTRAINT "Exercicio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Perna" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "sub" JSONB NOT NULL,

    CONSTRAINT "Perna_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Braco" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "sub" JSONB NOT NULL,

    CONSTRAINT "Braco_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_pernaId_fkey" FOREIGN KEY ("pernaId") REFERENCES "Perna"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercicio" ADD CONSTRAINT "Exercicio_bracoId_fkey" FOREIGN KEY ("bracoId") REFERENCES "Braco"("id") ON DELETE SET NULL ON UPDATE CASCADE;
