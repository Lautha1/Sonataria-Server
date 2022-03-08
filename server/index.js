import config from './config.js'
import Express from 'express'
import router from './router.js'

const app = new Express()

app.use((req, res, next) => {
  console.log(`${req.method}: ${req.path}`)
  next()
})

app.use('/data', router)

app.use(Express.static('public'))

app.listen(config.port)
console.log(`Console listening on port: ${config.port}`)
