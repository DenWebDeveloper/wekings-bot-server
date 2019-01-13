const {Model} = require('objection')

class User extends Model {
    static get tableName() {
        return 'users'
    }

    static get relationMappings() {
        return {
            bots: {
                relation: Model.HasManyRelation,
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
