exports.seed = async knex => {
    await knex('bots').del()
    await knex('users').del()

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
}
