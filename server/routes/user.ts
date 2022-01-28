import { Router, Response, Request, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import passport from 'passport';
require('../modules/passport/local')(passport);

const { user, pokemon } = new PrismaClient();
const router = Router();


router.post('/register', async (request: Request, response: Response, _next: NextFunction) => {
  const { name, email, password, password2} = request.body;
  let errors: any = [];
  if (!name || !email || !password || !password2) {
    errors.push({ message: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ message: 'Passwords do not match' });
  }

  if (undefined !== password && password.length < 8) {
    errors.push({ message: 'Password must be at least 8 characters' });
  }

  if (errors.length > 0) {
    response.status(400).json(errors);
    return;
  }
  crypto.randomBytes(20, async (err, _buf) => {

    if(err){
      console.log(err);
    }
    // const activeToken = Date.now()+buf.toString('hex');
    try {
       await user.create({
        data:{
          userName: name as string,
          email: email as string,
          password: bcrypt.hashSync(password,10)
          // ,active: false,
          // activeToken: activeToken,
          // activeExpires: Date.now() + 24 * 3600 * 1000
        }});
        return response.send({ message:'Registration Success'})
      }

      catch(e) {
        response.status(409).send({ message:'Email already exists' })
        return;
      }

      
        


        // let gmailService = new GMailService();;
        // gmailService.sendMail(
        //   email,
        //   `Account Activation - ${process.env.PAGE_NAME}`,
        //   `<p>Hello ${name},</p>
        //   <p>Click the activation link, if you registered on ${process.env.PAGE_NAME} </p>
        //   <a href='${process.env.PAGE_NAME}/account/active/${activeToken}'>${process.env.PAGE_NAME}/account/active/${activeToken}</a>
        //   <p>Otherwise ignore it, link will expire after 24 hours.</p>`
        // );

        // return response.status(201).json({message: 'Registration success. Check your email to activate account.'});

    })
  });

router.get('/user', (request: Request, response: Response, _next: NextFunction) => {
  return Promise.all([request.user]).then(user => response.send(user[0]))
})

router.get('/logout', (request: Request, response: Response, _next: NextFunction) => {
  request.logout();
  // return Promise.all([{message:'Logout success'}]);
  return response.send({message:'Logout success'});
})

router.post('/login', (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('local', (err, user, info) => {
  
    if (err) { 
      return response.status(501).json(err); 
    }
    if (!user) { 
      return response.status(501).json([info]); 
    }
    // if(!user.active){
    //   return response.status(501).json([{message:'Account not activated. Check your email'}]);
    // }
    request.logIn(user, function(err) {
      if (err) { 
        return response.status(501).json(err); 
      }
      return Promise.all([user])
      .then( data => response.status(200).json(data))
      .catch( error => response.status(403).json([error]));
    });
  })(request, response, next)
})


router.get('/users', async (_req: Request, res: Response) => {
  try {
    const users = await user.findMany({
      select: {
        id: true,
        userName: true,
        email: true,
        CatchedPokemons: true,
        Wishlist: true,
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
          Wishlist: {
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
          Wishlist: true,
          CatchedPokemons: true
        }
      })
      res.send(owner)
    }
    else {
      const owner = await user.update({
        data: {
          Wishlist: {
            create: {
              Pokemon: {
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
          Wishlist: true,
          CatchedPokemons: true
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
          CatchedPokemons: {
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
          Wishlist: true,
          CatchedPokemons: true
        }
      })
      res.send(owner)
    }
    else {
      const owner = await user.update({
        data: {
          CatchedPokemons: {
            create: {
              Pokemon: {
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
          Wishlist: true,
          CatchedPokemons: true
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