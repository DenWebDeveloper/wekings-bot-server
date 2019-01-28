const login = require('./login')
const rp = require('request-promise')
const cheerio = require('cheerio')
const Cookie = require('cookie')

module.exports = {
    login
}

class Bot {
    constructor({rememberToken, wkSession}) {
        this.wkSession = wkSession
        this.rememberToken = rememberToken
        this._ = null
    }

    async loadData(url, method = 'GET') {
        const options = {
            uri: url,
            method,
            resolveWithFullResponse: true,
            transform: this._requestTransform(),
            headers: {
                'cookie': Cookie.serialize('_wk_session', this.wkSession)
            }
        }
        return this._ = await rp(options)

    }

    _requestTransform() {
        return (body, response) => {
            return ({
                statusCode: response.statusCode,
                $: cheerio.load(body, {decodeEntities: false}),
                headers: response.headers,
                cookie: Cookie.parse(...response.headers['set-cookie'])
            })
        }
    }
}

class Info extends Bot {
    constructor({rememberToken, wkSession}) {
        super({rememberToken, wkSession})
    }

    get level() {
        return this._.$('#current_user_level').text()
    }

    get healthy() {
        return this._.$('#current_user_health').text()
    }

    get silver() {
        return this._.$('#user_silver_amount').text()
    }

    get crystal() {
        return this._.$('#user_crystal_amount').text()
    }

    get gold() {
        return this._.$('#user_crystal_amount').text()
    }

    get fightsCount() {
        return this._.$('#remaining_fights_count').text()
    }
}

class WeGift extends Info {
    constructor({rememberToken, wkSession}) {
        super({rememberToken, wkSession})
        this.type = 'gift'
    }

    async buy(nameItem) {
        const url = WeGift.getUrlBeforeBuy(nameItem)
        await this.loadData(url)
        const buyUrl = this._.$('.page_game_confirm > .navigation > li:first-child > a').attr('href')
        await this.loadData({url: buyUrl, method: 'GET'})
    }

    async send(nameItem, idUser) {
        await this.buy(nameItem)
        const url = `http://wekings.ru/game/presents/targets?item_key=${nameItem}&type=${this.type}`
        await this.loadData(url)
        //maybe bug with drid params там пагінація між сторінками і можливо там окремий drid
        // або він загальний на всі сторінки
        const targetUrl = this._.$('.page_game_presents_targets > ul > li:first-child .links a').attr('href')
        const drid = new URL(targetUrl).searchParams.get('drid')

        const sendUrl = `http://wekings.ru/game/presents/give?item_key=${nameItem}&amp;
        target_id=${idUser}&amp;type=${this.type}&amp;drid=${drid}`
        await this.loadData(sendUrl)
    }

    static getUrlBeforeBuy(nameItem) {
        return `http://wekings.ru/game/
        confirm?back_url=/game/shop/dealers/gifts?
        page=1&icon=a_silver&key_part=9fee&
        text=купить Коробочка в количестве 1 за 100 серебра&url=
        /game/shop/dealers/gifts/buy?item=${nameItem}&page=1&quantity=1`
    }
}

class WeCurse extends WeGift {
    constructor({rememberToken, wkSession}) {
        super({rememberToken, wkSession})
        this.type = 'curse'
    }

    static getUrlBeforeBuy(nameItem) {
        return `http://wekings.ru/game/
        confirm?back_url=/game/shop/dealers/curses?page=2
        &icon=a_silver&key_part=9739&text=купить Отравленный пирог в количестве 1 за 3000
         серебра&url=/game/shop/dealers/curses/buy?item=${nameItem}&page=2&quantity=1`
    }
}
