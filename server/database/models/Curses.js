const {snakeCaseMappers} = require('objection')
const GlobalOptions = require('./GlobalOptions')

class Curses extends GlobalOptions {
    static get tableName() {
        return 'curses'
    }

    static get columnNameMappers() {
        return snakeCaseMappers()
    }
}

module.exports = Curses
