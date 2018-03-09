
const Model = require('../../base/model')
const DBSchema = require('./schema')

module.exports = (Schema) => class PostModel extends Model {
  static create (name = '', body = {}) {
    body.fk_user = name
    return Schema.create(body)
  }

  static list (body = {}) {
    return Schema.findAll({ where: body })
  }
}
