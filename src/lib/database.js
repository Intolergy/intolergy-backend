
const Sequelize = require('sequelize')

const UserSchema = require('../services/user/schema')
const PostSchema = require('../services/post/schema')

module.exports = class {
  static async connect ({url = '', options = {}, sync = {}} = {}) {
    console.log(`Database: trying to connect to ${url}`)
    Sequelize.Promise = global.Promise
    const db = new Sequelize(url, options)

    const User = UserSchema.define(Sequelize, db)
    const Post = PostSchema.define(Sequelize, db)
    
    await db.sync(sync)
    return db
  }
}
