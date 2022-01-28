import { Router, Response, Request } from 'express';
import { PrismaClient } from '@prisma/client'

const { pokemon } = new PrismaClient();
const router = Router();

router.get('/pokemons', async (_req: Request, res: Response) => {
  try {
    const pokemons = await pokemon.findMany({
      include: {
        CatchedPokemons: true
      }
    })
    res.send(pokemons)
  }
  catch(e) {
    res.status(500).send(e)
  }
})

export default router