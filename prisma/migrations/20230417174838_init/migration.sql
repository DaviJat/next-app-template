-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(20) NOT NULL,
    "email" VARCHAR(30) NOT NULL,
    "senha" VARCHAR(16) NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
