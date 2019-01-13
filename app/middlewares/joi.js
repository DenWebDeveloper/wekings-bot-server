const Joi = require('joi')

module.exports = (schema, type = 'body') => (ctx, next) => {
    let data
    switch (type) {
        case 'params': {
            data = ctx.params
            break
        }
        case 'query': {
            data = ctx.query
            break
        }
        case 'body': {
            data = ctx.request.body
        }
    }
    const result = Joi.validate(data, schema, {convert: true})
    console.log(result.error)

    if (result.error !== null) {
        ctx.status = 400
        return ctx.body = 'Не вірнні дані. Не проходить валідацію'
    }
    return result.then(result => {
        ctx.validData = result
        return next()
    })
}
