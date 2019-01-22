const Router = require('koa-router')
const router = new Router({
    prefix: '/bots'
})
const controller = require('./controller')

router.get('/', controller.getBots)
router.get('/captcha',  controller.getCaptcha)
router.post('/add',  controller.addBot)

module.exports = router
