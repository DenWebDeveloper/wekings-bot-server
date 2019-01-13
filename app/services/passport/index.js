const passport = require('koa-passport')
const LocalStrategy = require('passport-local')

const {User} = require('../../../database/models')

const {checkPassword} = require('../authPassword')


passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.query()
        .findById(id)
        .select(`users_${roleName}.*`, `users_${roleName}.id as users_${roleName}_id`, 'users.email', 'roles.name as role_name', 'users.id as user_id')
        .join('roles', 'users.role_id', 'roles.id')
        .join('users_gables', 'users.id', 'users_gables.user_id')
        .join(`users_${roleName}`, `users_gables.${roleName}_id`, `users_${roleName}.id`)
        .first()
        .then(user => {
            if (!user) return done(null, false)
            done(null, user)
        })
        .catch(err => {
            done(err, null)
        })
})

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
},
(req, email, password, done) => {
    User.query()
        .eager('bots')
        .where({
            email,
        })
        .first()
        .then(user => {
            console.log(user)
            if (!user) return done(null, false)

            if (checkPassword(password, user.password_hash)) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
}
))

