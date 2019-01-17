const transaction = require('objection').transaction
const {Bot, UserBot} = require('../../../database/models')
const knex = Bot.knex()

class Queries {
    static async addBot({cookie, user, botName}) {
        await transaction(knex, async trx => {
            const bot = await Bot
                .query(trx)
                .insert({
                    name: botName,
                    wkSession: cookie['_wk_session'],
                    rememberToken: cookie['remember_token']
                }).returning('*')

            await UserBot
                .query(trx)
                .insert({
                    userId: user.id,
                    botId: bot.id
                })
        })
    }
}

module.exports = Queries
