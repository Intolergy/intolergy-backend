
const Router = require('../../base/router')
const Response = require('../../base/response')
const DBSchema = require('./schema')
const createModel = require('./model')
const createController = require('./controller')

module.exports = class PlaceRouter extends Router {
  static get mountPoint () {
    return '/api/place'
  }

  configure () {
    const Schema = DBSchema.get(this.config.db)
    const Model = createModel(Schema)
    this.Controller = createController(Model, Response)
  }

  routes () {
    this.get('/', 'auth', Router.wrap(this.Controller.list))
    this.post('/', 'auth', Router.wrap(this.Controller.create))
  }
}

