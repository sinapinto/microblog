let auth = require('../middleware/authMiddleware')
let user = require('../controllers/userController')
let Router = require('koa-router')
let router = new Router()

router.post('/users/login', user.login)
router.post('/users/logout', user.logout)
router.post('/users', user.post) // create user

router.get('/user', auth, user.get)
router.put('/user', auth, user.put)

module.exports = router.routes()