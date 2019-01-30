const {Bot} = require('../../database/models')
const {Gifts} = require('../../database/models')
const {Curses} = require('../../database/models')

class Queries {
    static async getBots(idUser) {
        return Bot.query().where({user_id: idUser})
    }

    static async getGiftsInfo() {
        return await Gifts.query()
    }

    static async getGifts(botId) {
        return await Bot.query()
            .select('gifts').where({id: botId})
    }

    static async editGifts(botId, gift) {
        // console.log(await Bot.query());
        return await Bot.query()
            .update({gifts: JSON.stringify(gift)}).where({id: botId})
    }

    static async getCursesInfo() {
        return await Curses.query()
    }

    static async getCurses(botId) {
        return await Bot.query()
            .select('curses').where({id: botId})
    }

    static async editCurses(botId, curse) {
        return await Bot.query()
            .update({curses: JSON.stringify(curse)}).where({id: botId})
    }

    static async getChanceToMine(botId) {
        return await Bot.query()
            .select('chance_to_mine').where({id: botId})
    }

    static async editChanceToMine(botId, chanceToMine) {
        console.log(Bot.query())
        return await Bot.query()
            .update({chance_to_mine: chanceToMine}).where({id: botId})
    }

    static async addBot({cookie, user, botName, info}) {
        console.log(info)
        await Bot.query()
            .insert({
                name: botName,
                userId: user.id,
                wkSession: cookie['_wk_session'],
                rememberToken: cookie['remember_token'],
                ...info
            }).returning('*')
    }
}

module.exports = Queries
