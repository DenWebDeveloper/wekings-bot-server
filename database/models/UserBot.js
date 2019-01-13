const {Model} = require('objection')

class UserBot extends Model {
    static get tableName() {
        return 'users_bots'
    }

    static get relationMappings() {
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/User`,
                join: {
                    from: 'users_bots.user_id',
                    to: 'users.id'
                },
            },
            bot: {
                relation: Model.BelongsToOneRelation,
                modelClass: `${__dirname}/Bot`,
                join: {
                    from: 'users_bots.bot_id',
                    to: 'bots.id'
                },
            }
        }
    }
}

module.exports = UserBot
