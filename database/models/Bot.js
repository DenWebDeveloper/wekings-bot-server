const {Model} = require('objection')

class Bot extends Model {
    static get tableName() {
        return 'users_bots'
    }

    static get relationMappings() {
        return {
            file: {
                relation: Model.BelongsToOneRelation,
                modelClass: File,
                join: {
                    from: 'files_courses.file_id',
                    to: 'files.id'
                },
            }
        }
    }
}

module.exports = Bot
