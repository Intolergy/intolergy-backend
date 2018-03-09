
const Model = require('../../base/model')

module.exports = (Schema) => class PlaceModel extends Model {
  static getPlaces (query = {}) {
    return Schema.findAll({where: query})
  }

  static async create (name = '', body = {}) {
    body.fk_user = name
    return Schema.create(body)
  }
}

