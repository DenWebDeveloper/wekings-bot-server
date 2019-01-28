exports.seed = async knex => {
    await knex('bots').del()
    await knex('users').del()
    await knex('gifts').del()
    await knex('curses').del()

    await knex('users').insert({
        email:'admin@admin.com',
        password_hash: '4ac962621632ea6391ae29a45ce52129b5e1e552a0f2873a1c80dde124f9696f330562cad046a5111b0b7521b4c477982c258fd1b8b59e1b50dbae26bc98c95dd874d9845b4cf1375a5164b3d3fc47bdec55ad55d06e5c7d157fca7b23650a3d5fccf8a0b89c1f1e9ce8d36e255b5cc6e2cf9a49134fc3e0b652512d960a135c'
    })

    const user = await knex('users').insert({
        email:'test@test.com',
        password_hash: '4ac962621632ea6391ae29a45ce52129b5e1e552a0f2873a1c80dde124f9696f330562cad046a5111b0b7521b4c477982c258fd1b8b59e1b50dbae26bc98c95dd874d9845b4cf1375a5164b3d3fc47bdec55ad55d06e5c7d157fca7b23650a3d5fccf8a0b89c1f1e9ce8d36e255b5cc6e2cf9a49134fc3e0b652512d960a135c'
    }).returning('id')

    await knex('bots').insert({
        name:'midflash',
        user_id: user[0],
        wk_session: 'BAh7CzoPc2Vzc2lvbl9pZEkiJTUxN2JkMjBlOTBjODU4YzQxZjE3OGI1NWI5N2IxMjlhBjoGRUY6E3NpbXBsZV9jYXB0Y2hhSSItNjA0MzE2MDZkYWU2ZDdiNmMyNWYxODM5YTFkYzRiODg2MjI1MzdkOAY7BkY6DnJldHVybl90b0kiLGh0dHA6Ly93ZWtpbmdzLnJ1L3Zpc2l0b3IvcHJvY2Vzc19sb2dpbgY7BlRJIgpmbGFzaAY7BlRJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNoSGFzaHsGOgtub3RpY2VJIgAGOwZGBjoKQHVzZWR7BjsKRjoJdXNlcmkDLI4tOhlwYXJ0bmVyX3JlZmVyZW5jZV9pZGkC6Uw',
        remember_token: '27ca0f7d99f3f622efb55515eea1c08d'
    })

    await knex('gifts').insert([{
        url_name: 'box_gift',
        level: 1,
        silver_price: 100,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'flower_gift',
        level: 2,
        silver_price: 200,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'health_bowl_gift',
        level: 5,
        silver_price: 0,
        crystal_price: 15,
        page: 1
    },
    {
        url_name: 'dexterity_gift',
        level: 5,
        silver_price: 1000,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'chest_gift',
        level: 6,
        silver_price: 1500,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'power_gift',
        level: 7,
        silver_price: 2000,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'money_lasso_gift',
        level: 8,
        silver_price: 0,
        crystal_price: 20,
        page: 2
    },
    {
        url_name: 'g8',
        level: 8,
        silver_price: 3000,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'donation_coffer_gift',
        level: 8,
        silver_price: 0,
        crystal_price: 5,
        page: 2
    },
    {
        url_name: 'patrol_gift',
        level: 10,
        silver_price: 0,
        crystal_price: 10,
        page: 2
    },
    {
        url_name: 'g15',
        level: 10,
        silver_price: 3000,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'g18',
        level: 10,
        silver_price: 3000,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'magick_dexterity_gift',
        level: 11,
        silver_price: 0,
        crystal_price: 10,
        page: 3
    },
    {
        url_name: 'prosperity_horn_gift',
        level: 11,
        silver_price: 0,
        crystal_price: 15,
        page: 3
    },
    {
        url_name: 'raven_eye_gift',
        level: 12,
        silver_price: 0,
        crystal_price: 10,
        page: 3
    },
    {
        url_name: 'power_chest_gift',
        level: 13,
        silver_price: 0,
        crystal_price: 10,
        page: 3
    },
    {
        url_name: 'miner_crystal_gift',
        level: 14,
        silver_price: 3000,
        crystal_price: 0,
        page: 3
    },
    {
        url_name: 'attack_protection_bonus_gift',
        level: 14,
        silver_price: 0,
        crystal_price: 10,
        page: 3
    },
    {
        url_name: 'loot_silver_gift',
        level: 15,
        silver_price: 0,
        crystal_price: 10,
        page: 4
    },
    {
        url_name: 'g16',
        level: 15,
        silver_price: 0,
        crystal_price: 30,
        page: 4
    },
    {
        url_name: 'warfare_hidden_gift',
        level: 16,
        silver_price: 3000,
        crystal_price: 0,
        page: 4
    },
    {
        url_name: 'sea_dragon_reward',
        level: 17,
        silver_price: 0,
        crystal_price: 15,
        page: 4
    },
    {
        url_name: 'miner_energy_gift',
        level: 18,
        silver_price: 0,
        crystal_price: 10,
        page: 4
    },
    {
        url_name: 'g14',
        level: 20,
        silver_price: 0,
        crystal_price: 10,
        page: 4
    },
    {
        url_name: 'cave_dragon_reward',
        level: 27,
        silver_price: 0,
        crystal_price: 15,
        page: 5
    }])

    await knex('curses').insert([{
        url_name: 'mouse_curse',
        level: 1,
        silver_price: 100,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'frog_curse',
        level: 2,
        silver_price: 100,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'dexterity_curse',
        level: 5,
        silver_price: 1000,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'intricate_trails_curse',
        level: 5,
        silver_price: 3500,
        crystal_price: 0,
        page: 1
    },
    {
        url_name: 'skill_curse',
        level: 6,
        silver_price: 1500,
        crystal_price: 0,
        page: 1
    },
    {
        // нету в items
        url_name: 'c23',
        level: 6,
        silver_price: 0,
        crystal_price: 5,
        page: 1
    },
    {
        url_name: 'c22',
        level: 6,
        silver_price: 2500,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'c24',
        level: 6,
        silver_price: 0,
        crystal_price: 5,
        page: 2
    },
    {
        url_name: 'power_curse',
        level: 7,
        silver_price: 2000,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'c21',
        level: 7,
        silver_price: 2500,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'c9',
        level: 8,
        silver_price: 3000,
        crystal_price: 0,
        page: 2
    },
    {
        url_name: 'pet_cage_curse',
        level: 9,
        silver_price: 0,
        crystal_price: 5,
        page: 2
    },
    {
        url_name: 'patrol_curse',
        level: 10,
        silver_price: 0,
        crystal_price: 5,
        page: 3
    },
    {
        url_name: 'message_curse',
        level: 11,
        silver_price: 0,
        crystal_price: 15,
        page: 3
    },
    {
        url_name: 'dexterity_percent_curse',
        level: 11,
        silver_price: 0,
        crystal_price: 5,
        page: 3
    },
    {
        url_name: 'c8',
        level: 11,
        silver_price: 0,
        crystal_price: 10,
        page: 3
    },
    {
        url_name: 'skill_percent_curse',
        level: 12,
        silver_price: 0,
        crystal_price: 5,
        page: 3
    },
    {
        url_name: 'power_percent_curse',
        level: 13,
        silver_price: 0,
        crystal_price: 5,
        page: 3
    },
    {
        url_name: 'c11',
        level: 13,
        silver_price: 0,
        crystal_price: 5,
        page: 4
    },
    {
        url_name: 'c18',
        level: 13,
        silver_price: 0,
        crystal_price: 5,
        page: 4
    },
    {
        url_name: 'c14',
        level: 14,
        silver_price: 0,
        crystal_price: 5,
        page: 4
    },
    {
        url_name: 'c17',
        level: 15,
        silver_price: 0,
        crystal_price: 10,
        page: 4
    },
    {
        url_name: 'c15',
        level: 16,
        silver_price: 2000,
        crystal_price: 0,
        page: 4
    },
    {
        url_name: 'c16',
        level: 17,
        silver_price: 0,
        crystal_price: 10,
        page: 4
    },
    {
        url_name: 'c12',
        level: 18,
        silver_price: 0,
        crystal_price: 10,
        page: 5
    },
    {
        url_name: 'arena_blocker_curse',
        level: 19,
        silver_price: 0,
        crystal_price: 20,
        page: 5
    },
    {
        url_name: 'c19',
        level: 20,
        silver_price: 0,
        crystal_price: 10,
        page: 5
    },
    {
        url_name: 'c20',
        level: 21,
        silver_price: 0,
        crystal_price: 30,
        page: 5
    }])
}
