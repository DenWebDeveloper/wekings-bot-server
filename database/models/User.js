const { Model} = require('objection')
const GlobalOptions = require('./GlobalOptions')

class User extends GlobalOptions {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            bots: {
                relation: Model.ManyToManyRelation,
                modelClass: `${__dirname}/Bot`,
                join: {
                    from: 'users.id',
                    through: {
                        from: 'users_bots.user_id',
                        to: 'users_bots.bot_id'
                    },
                    to: 'bots.id'
                },
            }
        }
    }
}

module.exports = User
