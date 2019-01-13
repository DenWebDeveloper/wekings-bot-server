const Router = require('koa-router')
const router = new Router({
    prefix:'/auth'
})

const controller = require('./controller')

router.get('/status', controller.getStatus)
router.get('/logout', controller.logout)

router.post('/singin', controller.login)
router.post('/singup', controller.registration)

module.exports = router
