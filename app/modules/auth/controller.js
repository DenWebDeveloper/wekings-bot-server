const passport = require('koa-passport')

module.exports = {
    async login(ctx) {
        return await passport.authenticate('local',
            async (err, user) => {
                if (user) {
                    await ctx.login(user)
                    ctx.body = {
                        ...getStatus(ctx),
                        user: ctx.state.user
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
        ctx.body = {message: 'User logout'}
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
        const form = ctx.request.body

        const schema = schemaRegistration(form.password)

        const result = Joi.validate(form, schema)

        if (result.error !== null) {
            ctx.status = 422
            return ctx.body = result.error
        }

        const pharmacy = await Pharmacy.query()
            .where('id', form.pharmacy_id)
            .where('region_id', form.region_id)
            .where('city_id', form.city_id)
            .where('network_id', form.network_id)
            .select('id', 'name')
        if (pharmacy.length === 0) {
            ctx.status = 422
            return ctx.body = 'Pharmacy not found'
        }

        await User.createPharmacist(form)

        //await confirmEmail(form.email) //TODO done send email

        return ctx.body = {message: 'User registration success'}

    },

    getStatus(ctx) {
        if (!ctx.isAuthenticated()) {
            return ctx.body = {
                isAuth: false,
            }
        }
    }
}
