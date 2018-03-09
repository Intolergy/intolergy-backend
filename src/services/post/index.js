
const DBSchema = require('./schema')
const createModel = require('./model')
const createController = require('./controller')
const Router = require('../../base/router')
const Response = require('../../base/response')

module.exports = class extends Router {
  static get mountPoint() {
    return '/api/post'
  }

  configure() {
    const Schema = DBSchema.get(this.config.db)
    const Model = createModel(Schema)
    this.Controller = createController(Model, Response)
  }

  routes() {
    this.post('/create', 'admin', Router.wrap(this.Controller.create))
    this.get('/list', 'auth', Router.wrap(this.Controller.list))
  }
}
