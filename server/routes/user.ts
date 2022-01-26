import { Router, Response, Request, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import passport from 'passport';
require('../modules/passport/local')(passport);
require('../modules/passport/google')(passport);

const { user, pokemon } = new PrismaClient();
const router = Router();


router.post('/user/register', (request: Request, response: Response, _next: NextFunction) => {
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
  } else {
    user.findUnique({ where: {email: email} }).then( (foundUser: any) => {
      if (foundUser) {
        errors.push({ message: 'Email already exists' });

        return response.status(409).json(errors);
      } else {
        
            crypto.randomBytes(20,  (err, _buf) => {
        
              if(err){
                console.log(err);
              }
              // const activeToken = Date.now()+buf.toString('hex');
              user.create({
                data:{
                  email: email,
                  name: name,
                  password: bcrypt.hashSync(password,10)
                }
                // active: false,
                // activeToken: activeToken,
                // activeExpires: Date.now() + 24 * 3600 * 1000
              });

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
          return response.status(201).json({message: 'Registration success.'});

        })
      }
    })
}});

router.get('/user', (request: Request, _response: Response, _next: NextFunction) => {
  return Promise.all([request.user])
})

router.get('/user/logout', (request: Request, _response: Response, _next: NextFunction) => {
  request.logout();
  return Promise.all([{message:'Logout success'}]);
})

router.post('/user/login', (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('local', (err, user, info) => {
  
    if (err) { 
      return response.status(501).json(err); 
    }
    if (!user) { 
      return response.status(501).json([info]); 
    }
    if(!user.active){
      return response.status(501).json([{message:'Account not activated. Check your email'}]);
    }
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