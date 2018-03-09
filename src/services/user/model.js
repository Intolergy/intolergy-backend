
const Model = require('../../base/model')
const DBSchema = require('./schema')

module.exports = (Schema, {Bcrypt}) => class UserModel extends Model {
  static async getByName (name) {
    return Schema.findOne({where: {name}})
  }

  static async list () {
    return Schema.findAll()
  }

  static async create (body) {
    try {
      return await Schema.create({
        name: body.name,
        password: body.password,
        admin: body.admin,
        intolerances: body.intolerances
      })
    } catch (error) {
      DBSchema.validationFailed(error)
      throw error
    }
  }

  static comparePassword (guess, pass) {
    return Bcrypt.compare(guess, pass)
  }
}
