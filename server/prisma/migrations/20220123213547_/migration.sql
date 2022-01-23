/*
  Warnings:

  - You are about to drop the `PokemonsOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PokemonsOnUsers" DROP CONSTRAINT "PokemonsOnUsers_pokemonId_fkey";

-- DropForeignKey
ALTER TABLE "PokemonsOnUsers" DROP CONSTRAINT "PokemonsOnUsers_userId_fkey";

-- DropTable
DROP TABLE "PokemonsOnUsers";

-- CreateTable
CREATE TABLE "CatchedPokemons" (
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "CatchedPokemons_pkey" PRIMARY KEY ("pokemonId","userId")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "pokemonId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("pokemonId","userId")
);

-- AddForeignKey
ALTER TABLE "CatchedPokemons" ADD CONSTRAINT "CatchedPokemons_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatchedPokemons" ADD CONSTRAINT "CatchedPokemons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
