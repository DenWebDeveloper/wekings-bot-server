exports.up = async knex => {
    await knex.schema.createTable('bots_options', table => {
        table.increments().primary()
        table.boolean('is_gifts_on').defaultTo(true)
        table.jsonb('gifts').defaultTo(null)

        table.boolean('is_curses_on').defaultTo(true)
        table.jsonb('curses').defaultTo(null)

        table.integer('chance_to_mine').defaultTo(15)
    })
}

exports.down = async knex => {
    await knex.schema.dropTable('bots_options')
}
