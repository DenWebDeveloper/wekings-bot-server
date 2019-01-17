const WeBot = require('../../services/bot')
const dbQueries = require('./dbQueries')

module.exports = {
    async getCaptcha(ctx) {
        const {wkSession, img} = await WeBot.login.getCaptcha()
        ctx.session.wkSession = wkSession
        ctx.body = {img}
    },

    async addBot(ctx) {
        const {body} = ctx.request
        const wkSession = ctx.session.wkSession

        let _cookie
        let saveTobase = false

        await WeBot.login.loginSubmit(body, wkSession).then(({cookie}) => {
            _cookie = cookie
            ctx.session.cookie = cookie
            ctx.body = {message: 'Auth success'}
            saveTobase = true
        }).catch(({status, notify}) => {
            ctx.status = status
            ctx.body = {notify}
        })

        if(!saveTobase) return
        await dbQueries.addBot({
            botName: body.username,
            cookie:_cookie,
            user:ctx.state.user
        })
    }
}
