
const DBSchema = require('./schema')
const createModel = require('./model')
const createController = require('./controller')
const Router = require('../../base/router')
const Response = require('../../base/response')
const Carrefour = require('../../lib/carrefour')

module.exports = class ProductRouter extends Router {
  static get mountPoint () {
    return '/api/product'
  }

  configure () {
    const Schema = DBSchema.get(this.config.db)
    const Model = createModel(Schema)
    this.Controller = createController(Model, Response, {Carrefour})
  }

  routes () {
    this.get('/', 'auth', Router.wrap(this.Controller.list))
    this.post('/', 'auth', Router.wrap(this.Controller.create))
    this.get('/carrefour', 'auth', Router.wrap(this.Controller.carrefourSearch))
    this.get('/carrefour/:gtin', 'auth', Router.wrap(this.Controller.carrefourGTIN))
  }
}

