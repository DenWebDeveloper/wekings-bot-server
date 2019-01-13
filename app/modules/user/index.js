const Router = require('koa-router')
const router = new Router({
    prefix: '/admin'
})
const controller = require('./controller')


router.get('/',  controller.getEnterprises)
router.get('/:id', controller.getEnterprise)
router.post('/', controller.createEnterprise)
router.put('/:id',  controller.editEnterprise)
router.delete('/:id',controller.deleteEnterprise)

module.exports = router
