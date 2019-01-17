const {UserEnterprise, Role, User, UserGables, NetworkEnterprise, Test} = require('../../../services/db/models')
const knex = Role.knex()
const {transaction} = require('objection')

const {cryptoPassword} = require('../../../untils').password

class EnterpriseQueries {
    static async getEnterprises({page, rowsPerPage, sortBy, descending, search}) {
        console.log(search)
        //page start with 0
        const direction = String(descending) === 'true' ? 'desc' : 'asc'
        const sort = sortBy ? sortBy : 'id'
        return await UserEnterprise.query()
            .eager('[emailAndRole,networks]')
            .orderBy(sort, direction)
            .orWhere('name', 'like', `%${search}%`)
            .page(page, rowsPerPage)
    }

    static async getEnterprise(id) {
        return await UserEnterprise.query().findById(id).eager('[emailAndRole,networks]')
    }

    static async createEnterprise(data, password) {
        await transaction(knex, async trx => {
            const role = await Role.query(trx).where('name', 'enterprise').first()

            const enterprise = await UserEnterprise.query(trx).insert({
                name: data.name,
                short_description: data.short_description
            })

            const networks = data.networks.map(item => ({
                enterprise_id: enterprise.id,
                network_id: item.id === undefined ? item : item.id
            }))
            await NetworkEnterprise.query(trx).insert(networks)

            const user = await User.query(trx).insert({
                email: data.email,
                password_hash: cryptoPassword(password),
                role_id: role.id
            })

            await UserGables.query(trx).insert({
                user_id: user.id,
                enterprise_id: enterprise.id
            })
        })
    }

    static async editEnterprise(id, data) {
        await transaction(knex, async trx => {
            await UserEnterprise.query(trx).findById(id).update({
                name: data.name,
                short_description: data.short_description
            })

            const networks = data.networks.map(item => ({
                enterprise_id: id,
                network_id: item.id === undefined ? item : item.id
            }))

            await NetworkEnterprise.query(trx).where({enterprise_id: id}).delete()
            await NetworkEnterprise.query(trx).insert(networks)

            const user = await UserGables.query(trx).where({enterprise_id: id}).first()

            await User.query(trx).findById(user.id).update({
                email: data.email,
            })
        })
    }

    static async deleteEnterprise(id) {
        await transaction(knex, async trx => {
            await NetworkEnterprise.query(trx).where({enterprise_id: id}).delete()
            const user = await UserGables.query(trx).where({enterprise_id: id}).delete().returning('*').first()
            await User.query(trx).where({id: user.user_id}).delete()
            await Test.query(trx).where({enterprise_id: id}).delete()
            await UserEnterprise.query(trx).deleteById(id)
        })
    }
}

module.exports = EnterpriseQueries
