
const DBSchema = require('./schema')
const createModel = require('./model')
const createController = require('./controller')
const Router = require('../../base/router')
const Response = require('../../base/response')

module.exports = class VoteRouter extends Router {
  static get mountPoint () {
    return '/api/vote'
  }

  configure () {
    const Schema = DBSchema.get(this.config.db)
    const Model = createModel(Schema)
    this.Controller = createController(Model, Response)
  }

  routes () {
    this.get('/product/:id', 'auth', Router.wrap(this.Controller.getVotesOf('product')))
    this.get('/place/:id', 'auth', Router.wrap(this.Controller.getVotesOf('place')))
    this.get('/post/:id', 'auth', Router.wrap(this.Controller.getVotesOf('post')))
    this.post('/', 'auth', Router.wrap(this.Controller.createVote))
  }
}

