
const Model = require('../../base/model')

module.exports = (Schema) => class ProductModel extends Model {
  static getProducts (query = {}) {
    return Schema.findAll({where: query})
  }

  static async create (name = '', body = {}) {
    body.fk_user = name
    return Schema.upsert(body)
  }
}

