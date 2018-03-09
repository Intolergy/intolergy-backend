
const Sequelize = require('sequelize')

const UserSchema = require('../services/user/schema')
const VoteSchema = require('../services/vote/schema')
const PostSchema = require('../services/post/schema')
const PlaceSchema = require('../services/place/schema')
const ProductSchema = require('../services/product/schema')

module.exports = class {
  static async connect ({url = '', options = {}, sync = {}} = {}) {
    console.log(`Database: trying to connect to ${url}`)
    Sequelize.Promise = global.Promise
    const db = new Sequelize(url, options)

    const User = UserSchema.define(Sequelize, db)
    const Post = PostSchema.define(Sequelize, db)
    const Vote = VoteSchema.define(Sequelize, db)
    const Place = PlaceSchema.define(Sequelize, db)
    const Product = ProductSchema.define(Sequelize, db)

    Post.belongsTo(User, {
      foreignKey: 'fk_user',
      targetKey: 'name'
    })

    Place.belongsTo(User, {
      foreignKey: 'fk_user',
      targetKey: 'name'
    })

    Vote.belongsTo(User, {
      foreignKey: 'fk_user',
      targetKey: 'name'
    })

    Product.belongsTo(User, {
      foreignKey: 'fk_user',
      targetKey: 'name'
    })
    
    await db.sync(sync)
    return db
  }
}
