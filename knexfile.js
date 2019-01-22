module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: '',
            database: 'bot'
        },
        migrations: {
            directory: './server/database/migrations'
        },
        seeds: {
            directory: './server/database/seeds'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URI_SSL,
        migrations: {
            directory: './server/database/migrations'
        },
        seeds: {
            directory: './server/database/seeds'
        }
    }
}
