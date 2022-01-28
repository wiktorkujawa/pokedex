-- CreateTable
CREATE TABLE "CatchedPokemons" (
    "userId" INTEGER NOT NULL,
    "pokemonName" TEXT NOT NULL,

    CONSTRAINT "CatchedPokemons_pkey" PRIMARY KEY ("pokemonName","userId")
);

-- CreateTable
CREATE TABLE "Pokemon" (
    "name" TEXT NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Pokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userName" TEXT,
    "email" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "userId" INTEGER NOT NULL,
    "pokemonName" TEXT NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("pokemonName","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemon_name_key" ON "Pokemon"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "CatchedPokemons" ADD CONSTRAINT "CatchedPokemons_pokemonName_fkey" FOREIGN KEY ("pokemonName") REFERENCES "Pokemon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CatchedPokemons" ADD CONSTRAINT "CatchedPokemons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_pokemonName_fkey" FOREIGN KEY ("pokemonName") REFERENCES "Pokemon"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
