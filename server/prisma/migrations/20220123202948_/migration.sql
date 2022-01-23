/*
  Warnings:

  - You are about to drop the column `authorId` on the `Pokemon` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pokemon" DROP CONSTRAINT "Pokemon_authorId_fkey";

-- AlterTable
ALTER TABLE "Pokemon" DROP COLUMN "authorId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PokemonsOnUsers" (
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PokemonsOnUsers_pkey" PRIMARY KEY ("pokemonId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "PokemonsOnUsers" ADD CONSTRAINT "PokemonsOnUsers_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokemonsOnUsers" ADD CONSTRAINT "PokemonsOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
