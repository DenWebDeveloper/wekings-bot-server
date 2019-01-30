const WeBot = require('../../services/bot')
const WeInfo = require('../../services/bot').WeInfo
const dbQueries = require('./dbQueries')

module.exports = {
    async getBots(ctx) {
        const {id} = ctx.state.user
        ctx.body = await dbQueries.getBots(id)
    },

    async deleteBot(ctx) {
        const {id} = ctx.valid.params
        await dbQueries.deleteBot(id)
        return ctx.status = 204
    },

    async syncAcc(ctx) {
        const {id} = ctx.valid.params
        const {wkSession, rememberToken} = await dbQueries.getBot(id)
        console.log(wkSession, rememberToken)
        const botInfo = new WeInfo({wkSession, rememberToken})

        await botInfo.loadData('http://wekings.ru/game/user')
        const bot = await dbQueries.editBot(id, {
            level: botInfo.level,
            healthy: botInfo.healthy,
            silver: botInfo.silver,
            crystal: botInfo.crystal,
            gold: botInfo.gold,
            fights: botInfo.fights,
        })

        return ctx.body = bot
    },

    async getGiftsInfo(ctx) {
        //відправляється масив
        ctx.body = await dbQueries.getGiftsInfo()
    },

    async getGifts(ctx) {
        const {idBot} = ctx.params
        ctx.body = await dbQueries.getGifts(idBot)
    },

    async editGifts(ctx) {
        console.log(ctx.request.body)
        // const {id} = ctx.state.user
        const {idBot} = ctx.params
        // const id = 2;
        // const idBot = 1;
        const gifts = ctx.request.body
        ctx.body = await dbQueries.editGifts(idBot, gifts)
    },

    async getCursesInfo(ctx) {
        ctx.body = await dbQueries.getCursesInfo()
    },

    async getCurses(ctx) {
        const {idBot} = ctx.params
        ctx.body = await dbQueries.getCurses(idBot)
    },

    async editCurses(ctx) {
        const {idBot} = ctx.params
        const curses = ctx.request.body
        ctx.body = await dbQueries.editCurses(idBot, curses)
    },

    async getChanceToMine(ctx) {
        const {idBot} = ctx.params
        ctx.body = await dbQueries.getChanceToMine(idBot)
    },

    async editChanceToMine(ctx) {
        const {idBot} = ctx.params
        const chanceToMine = ctx.request.body
        ctx.body = await dbQueries.editChanceToMine(idBot, chanceToMine)
    },

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

        await WeBot.login.loginSubmit(body, wkSession).then(({cookie, $}) => {
            _cookie = cookie
            ctx.session.cookie = cookie
            ctx.body = {message: 'Auth success'}
            saveTobase = true
        }).catch(({status, notify}) => {
            ctx.status = status
            ctx.body = {notify}
        })

        if (!saveTobase) return
        const botInfo = new WeInfo({
            wkSession: _cookie['_wk_session'],
            rememberToken: _cookie['remember_token']
        })
        await botInfo.loadData('http://wekings.ru/game/user')
        await dbQueries.addBot({
            botName: body.username,
            cookie: _cookie,
            user: ctx.state.user,
            info: {
                level: botInfo.level,
                healthy: botInfo.healthy,
                silver: botInfo.silver,
                crystal: botInfo.crystal,
                gold: botInfo.gold,
                fights: botInfo.fights,
            }
        })
    }
}
