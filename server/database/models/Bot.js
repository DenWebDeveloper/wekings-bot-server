const {snakeCaseMappers} = require('objection')
const GlobalOptions = require('./GlobalOptions')

class Bot extends GlobalOptions {
    static get tableName() {
        return 'bots'
    }

    static get columnNameMappers() {
        return snakeCaseMappers()
    }
}

module.exports = Bot
