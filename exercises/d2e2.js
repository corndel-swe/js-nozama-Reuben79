import express from 'express'
const app = express()


app.get('/sumup', (req, res) => {
  
  const n = parseInt(req.query.n, 10)
  const sum = n ? (n * (n + 1)) / 2 : 0

  res.send(sum.toString())

})

app.get('/multiply/:x/:y', (req, res) => {
  
  const x = parseInt(req.params.x, 10)
  const y = parseInt(req.params.y, 10)
  const product = x * y

  res.send(product.toString())
})

export default app

