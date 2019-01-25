exports.up = async knex => {
    await knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('email').unique().notNullable()
        table.text('password_hash').notNullable()
        table.boolean('is_admin').defaultTo(false)
        table.integer('amount_bots').defaultTo(1)
        table.boolean('access_bots').defaultTo(false)
        table.boolean('confirm_email').defaultTo(false)
    })

    await knex.schema.createTable('bots', table => {
        table.increments('id').primary()
        table.text('name').notNullable()
        table.integer('user_id').references('users.id').unique().notNullable()
        table.text('wk_session').notNullable()
        table.string('remember_token').notNullable()
        table.jsonb('gifts').defaultTo(null)
        //TODO ask about the field
        table.boolean('is_gifts_on').defaultTo(true)
        table.boolean('is_curses_on').defaultTo(true)
        table.jsonb('curses').defaultTo(null)
        table.integer('chance_to_mine').defaultTo(15)
        // table.boolean('is_bot_on').defaultTo(true)
        //TODO others fields parameters bots
    })
}

exports.down = async knex => {
    await knex.schema.dropTable('bots')
    await knex.schema.dropTable('users')
}
