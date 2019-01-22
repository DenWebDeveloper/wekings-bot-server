const {Bot} = require('../../database/models')

class Queries {
    static async getBots(idUser) {
        return Bot.query().where({user_id: idUser})
    }

    static async addBot({cookie, user, botName}) {
        await Bot.query()
            .insert({
                name: botName,
                userId: user.id,
                wkSession: cookie['_wk_session'],
                rememberToken: cookie['remember_token']
            }).returning('*')
    }
}

module.exports = Queries
