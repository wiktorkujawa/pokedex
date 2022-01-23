/*
  Warnings:

  - The primary key for the `CatchedPokemons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pokemonId` on the `CatchedPokemons` table. All the data in the column will be lost.
  - The primary key for the `Wishlist` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pokemonId` on the `Wishlist` table. All the data in the column will be lost.
  - Added the required column `pokemonName` to the `CatchedPokemons` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokemonName` to the `Wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CatchedPokemons" DROP CONSTRAINT "CatchedPokemons_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_pokemonId_fkey";

-- AlterTable
ALTER TABLE "CatchedPokemons" DROP CONSTRAINT "CatchedPokemons_pkey",
DROP COLUMN "pokemonId",
ADD COLUMN     "pokemonName" TEXT NOT NULL,
ADD CONSTRAINT "CatchedPokemons_pkey" PRIMARY KEY ("pokemonName", "userId");

-- AlterTable
ALTER TABLE "Wishlist" DROP CONSTRAINT "Wishlist_pkey",
DROP COLUMN "pokemonId",
ADD COLUMN     "pokemonName" TEXT NOT NULL,
ADD CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("pokemonName", "userId");

-- AddForeignKey
ALTER TABLE "CatchedPokemons" ADD CONSTRAINT "CatchedPokemons_pokemonName_fkey" FOREIGN KEY ("pokemonName") REFERENCES "Pokemon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_pokemonName_fkey" FOREIGN KEY ("pokemonName") REFERENCES "Pokemon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
