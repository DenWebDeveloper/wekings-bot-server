const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
})

//const admin = require('./admin')
const auth = require('./auth')
const bot = require('./bot')

//router.use(admin.routes())
router.use(auth.routes())
router.use(bot.routes())

module.exports = router
