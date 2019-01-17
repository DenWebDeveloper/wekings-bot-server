const dbQueries = require('./dbQueries')
const {randomPassword} = require('../../../untils').password

module.exports = {
    async getEnterprises(ctx) {
        ctx.body = await dbQueries.getEnterprises(ctx.validData)
    },
    async getEnterprise(ctx) {
        const {id} = ctx.params
        ctx.body = await dbQueries.getEnterprise(id)
    },
    async createEnterprise(ctx) {
        const body = ctx.request.body
        const generatedPass = randomPassword()
        ctx.body = await dbQueries.createEnterprise(body,generatedPass)
    },
    async editEnterprise(ctx) {
        const {body} = ctx.request
        const {id} = ctx.params

        ctx.body = await dbQueries.editEnterprise(id, body)
    },
    async deleteEnterprise(ctx) {
        const {id} = ctx.params
        await dbQueries.deleteEnterprise(id)
        ctx.body = 'Успішно видалений'
    }
}
