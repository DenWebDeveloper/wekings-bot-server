const Router = require('koa-router')
const router = new Router({
    prefix: '/api'
})

const admin = require('./admin')
router.use(admin.routes())

module.exports = router
