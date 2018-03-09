
const mix = require('mixin-es6')

const Router = require('./base/router')
const Middleware = require('./middleware')
const UserSchema = require('./services/user/schema')
const createUserModel = require('./services/user/model')
const UserRouter = require('./services/user')
const VoteRouter = require('./services/vote')
const PostRouter = require('./services/post')
const PlaceRouter = require('./services/place')
const ProductRouter = require('./services/product')
const Passport = require('./lib/passport/')
const Bcrypt = require('./lib/bcrypt')

module.exports = class App extends mix(Router, Middleware) {
  configure () {
    const UserModel = createUserModel(UserSchema.get(this.config.db), {Bcrypt})
    Passport.configure(UserModel)
  }

  routes () {
    console.log('\n/************************ Routes ***************************/')
    this.mount(UserRouter)
    this.mount(VoteRouter)
    this.mount(PostRouter)
    this.mount(PlaceRouter)
    this.mount(ProductRouter)
    console.log('/*************************************************************/\n')
  }
}
