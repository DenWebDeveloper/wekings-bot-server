const GlobalOptions = require('./GlobalOptions')

class Bot extends GlobalOptions {
    static get tableName() {
        return 'bots'
    }
}

module.exports = Bot
