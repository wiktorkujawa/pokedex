import { Router, Response, Request } from 'express';
import { PrismaClient } from '@prisma/client'

const { user, pokemon } = new PrismaClient();
const router = Router();

router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await user.findMany({
      include: {
        pokemonsCatched: true,
        pokemonsWishlist: true
      }
    })
    res.send(users)
  }
  catch(e) {
    res.status(500).send(e)
  }
})

router.post('/users/save-to-wishlist', async (_req: Request, res: Response) => {
  try {
    const { body } =_req;

    const pokemonExist = await pokemon.findUnique({
      where: {
        name: body.name
      }
    });


    if(pokemonExist) {
      const owner = await user.update({
        data: {
          pokemonsWishlist: {
            connectOrCreate: {
              create: {
                pokemonName: body.name
              },
              where: {
                pokemonName_userId: {
                  pokemonName: body.name,
                  userId: body.id
                }
              }
            }
          }
        },
        where: {
          id: body.id
        },
        include: {
          pokemonsWishlist: true,
          pokemonsCatched: true
        }
      })
      res.send(owner)
    }
    else {
      const owner = await user.update({
        data: {
          pokemonsWishlist: {
            create: {
              pokemon: {
                create: {
                  name: body.name
                }
              }
            }
          }
        },
        where: {
          id: body.id
        },
        include: {
          pokemonsWishlist: true,
          pokemonsCatched: true
        }
      })
      res.send(owner)
    }
  }
  catch(e) {
    res.status(500).send(e)
  }
})

router.post('/users/catch-pokemon', async (_req: Request, res: Response) => {
  try {
    const { body } =_req;

    const pokemonExist = await pokemon.findUnique({
      where: {
        name: body.name
      }
    });


    if(pokemonExist) {
      const owner = await user.update({
        data: {
          pokemonsCatched: {
            connectOrCreate: {
              create: {
                pokemonName: body.name
              },
              where: {
                pokemonName_userId: {
                  pokemonName: body.name,
                  userId: body.id
                }
              }
            }
          }
        },
        where: {
          id: body.id
        },
        include: {
          pokemonsWishlist: true,
          pokemonsCatched: true
        }
      })
      res.send(owner)
    }
    else {
      const owner = await user.update({
        data: {
          pokemonsCatched: {
            create: {
              pokemon: {
                create: {
                  name: body.name
                }
              }
            }
          }
        },
        where: {
          id: body.id
        },
        include: {
          pokemonsWishlist: true,
          pokemonsCatched: true
        }
      })
      res.send(owner)
    }
  }
  catch(e) {
    res.status(500).send(e)
  }
})


export default router