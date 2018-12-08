let path = require('path')
let Koa = require('koa')
let helmet = require('koa-helmet')
let logger = require('koa-logger')
let bodyparser = require('koa-bodyparser')
let session = require('koa-session')
let debug = require('debug')('app')
let router = require('./router')
let db = require('./db')
let schemas = require('./schemas')
let errorMiddleware = require('./middleware/errorMiddleware')

let config
try {
  config = require('../config')
} catch (e) {
  console.error('you need to configure the app:\n\n$ cp config.example.js config.js\n')
  process.exit(1)
}

let app = new Koa()
app.keys = config.keys

app.use(helmet())
app.use(logger())
app.use(bodyparser())
app.use(session({ rolling: true }, app))

app.use((ctx, next) => {
  debug('session user ID:', ctx.session.userId)
  return next()
})
app.use(errorMiddleware)
app.use(router.routes())

let PORT = process.env.PORT || 4000
let ENV = process.env.NODE_ENV || 'development'

app.context.schemas = schemas
app.context.db = db(ENV)

app.context.db.migrate.latest()
  .then(() => {
    app.listen(PORT)
    debug(`${ENV} server listening at http://localhost:${PORT}`)
  })
  .catch(console.error)