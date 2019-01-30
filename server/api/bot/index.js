const Router = require('koa-router')
const router = new Router({
    prefix: '/bots'
})
const controller = require('./controller')
const isAuthenticated = require('../../middlewares/isAuthenticated')
const validator = require('../../middlewares/validator')
const {idParam} = require('../../untils/validationSchemes')

router.use(isAuthenticated)

router.get('/', controller.getBots)
router.get('/captcha', controller.getCaptcha)
router.get('/sync/:id', validator(idParam, 'params'), controller.syncAcc)
router.post('/add', controller.addBot)

router.delete('/:id', validator(idParam, 'params'), controller.deleteBot)

router.get('/options/gifts/:idBot', controller.getGifts)
router.put('/options/gifts/:idBot', controller.editGifts)

router.get('/options/curses/:idBot', controller.getCurses)
router.put('/options/curses/:idBot', controller.editCurses)

router.get('/options/mine/:idBot', controller.getChanceToMine)
router.put('/options/mine/:idBot', controller.editChanceToMine)

router.get('/options/gifts', controller.getGiftsInfo)
router.get('/options/curses', controller.getCursesInfo)

module.exports = router
