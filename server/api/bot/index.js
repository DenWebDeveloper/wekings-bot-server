const Router = require('koa-router')
const router = new Router({
    prefix: '/bots'
})
const controller = require('./controller')

router.get('/', controller.getBots)
router.get('/captcha',  controller.getCaptcha)
router.post('/add',  controller.addBot)

router.get('/options/gifts/:idBot', controller.getGifts)
router.put('/options/gifts/:idBot', controller.editGifts)

router.get('/options/curses/:idBot', controller.getCurses)
router.put('/options/curses/:idBot', controller.editCurses)

router.get('/options/mine/:idBot', controller.getChanceToMine)
router.put('/options/mine/:idBot', controller.editChanceToMine)

module.exports = router
