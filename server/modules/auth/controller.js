const passport = require('koa-passport')
const dbQueries = require('./dbQueries')

module.exports = {
    async login(ctx) {
        //TODO add captcha
        return await passport.authenticate('local',
            async (err, user) => {
                if (user) {
                    await ctx.login(user)
                    ctx.body = {
                        user
                    }
                } else {
                    ctx.status = 401
                    return ctx.body = {
                        message: 'Немає такого користувача або пароль не вірний'

                    }
                }
            })(ctx)
    },

    async logout(ctx) {
        ctx.logout()
        return ctx.body = {message: 'User logout'}
    },

    async isAuthenticated(ctx, next) {
        if (!ctx.isAuthenticated()) {
            ctx.status = 401
            return ctx.body = {message: 'Authenticate fail'}
        }
        return next()
    },

    async checkStatus(ctx, next) {
        //console.log('email', ctx.state.user.pharmacist.confirm_email)
        //console.log('admin', ctx.state.user.pharmacist.confirm_admin)
        return next()
    },

    async registration(ctx) {
        const {body} = ctx.valid
        await dbQueries.createUser(body)

        //await confirmEmail(form.email) //TODO done send email

        return ctx.body = {message: 'User registration success'}

    },

    getStatus(ctx) {
        if (ctx.isAuthenticated()) {
            return ctx.body = {
                isAuth: true,
                isAdmin: ctx.state.user.isAdmin
            }
        } else {
            return ctx.body = {
                isAuth: false
            }
        }
    }
}
