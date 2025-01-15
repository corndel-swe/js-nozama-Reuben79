// https://tech-docs.corndel.com/express/sending-errors.html
import express, { Router } from 'express'
import { Account, AppError } from './d3e2.js' // <-- uses Account from Exercise 2

const app = express()
app.use(express.json())

const router = Router()

const account = new Account('legolas', 'legolas@thefellowship.com', 'elf4life')

router.put('/username', (req, res) => {
  const { newUsername, password } = req.body 
  
  try { 
    account.updateUsername(newUsername, password) 
    res.json({ username: newUsername }) 
  } catch (error) { 
    if (error instanceof AppError) { 
      res.status(error.code).send({ message: error.message }) 
    } else { res.status(500).send({ message: 'Internal server error' }) 
  } 
}
  /**
   * Use try/catch to attempt account.updateUsername with the newUsername and
   * password found in the req.body.
   *
   * On success, respond with the newUsername in the response,
   * e.g. { username: 'NewUsername'}
   *
   * In case this fails, set the status of the response to the error code
   * and send a useful message.
   */
})

app.use('/account', router)

export default app
