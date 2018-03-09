
const Model = require('../../base/model')
const DBSchema = require('./schema')

module.exports = (Schema) => class PostModel extends Model {
  static async create(body) {
    try {
      return await Schema.create(body)
    } catch (error) {
      DBSchema.validationFailed(error)
      throw error
    }
  }

  static async list(body) {
    try {
      return await Schema.findAll({ where: body })
    } catch (error) {
      DBSchema.validationFailed(error)
      throw error
    }
  }
}
