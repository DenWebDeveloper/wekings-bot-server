exports.up = async knex => {
    await knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('email').unique().notNullable()
        table.text('password_hash').notNullable()
        table.boolean('is_admin').defaultTo(false)
        table.integer('allow_amount_bots').defaultTo(1)
        table.boolean('access_enable_bots').defaultTo(false)
    })

    await knex.schema.createTable('bots', table => {
        table.increments('id').primary()
        table.text('name').notNullable()
        table.text('wk_session').notNullable()
        table.string('remember_token').notNullable()
        //TODO others fields parameters bots
    })

    await knex.schema.createTable('users_bots', table => {
        table.increments('id').primary()
        table.integer('bot_id').references('users.id').notNullable()
        table.integer('user_id').references('bots.id').notNullable()
        table.unique(['user_id', 'bot_id'])
    })
}

exports.down = async knex => {
    await knex.schema.dropTable('users_bots')
    await knex.schema.dropTable('users')
    await knex.schema.dropTable('bots')
}
