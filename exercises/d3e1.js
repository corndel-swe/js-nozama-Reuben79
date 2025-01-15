import express, { Router } from 'express'

const app = express()
app.use(express.json())
const router = Router()

/**
 * Hint: Look at app.use() at the bottom of the file -
 * it already supplies the /endpoint prefix to paths in the router
 */

let state = {
  count: 0
}

router.get('/', (_req, res) => { 
  res.json(state) 
}
)
router.put('/increment', (_req, res) => { 
  state.count += 1; res.json(state) 
}
)

/**
 * Add a GET /counter endpoint
 * It should simply res.json(state)
 */

/**
 * Add a PUT /counter/increment endpoint
 * It should increase the counter by 1 and then res.json(state)
 */

app.use('/counter', router)

export default app
