
const Schema = require('../../base/schema')
const Validation = require('../../lib/validation')

module.exports = class ProductSchema extends Schema {
  static get NAME () { return 'product' }

  static properties (Sequelize) {
    return {
      name: {
        type: Sequelize.STRING(280),
        allowNull: false,
        validate: {
          len: Validation.len(1, 280)
        }
      },
      gtin: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          len: Validation.len(1, 20)
        }
      },
      description: {
        type: Sequelize.STRING(10000),
        allowNull: false,
        defaultValue: '',
        validate: {
          len: Validation.len(0, 10000)
        }
      },
      image: {
        type: Sequelize.STRING(1000),
        allowNull: true,
        validate: {
          isUrl: true
        }
      },
      intolerances: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        get () {
          return this.getDataValue('intolerances').split(',').map(str => str.trim())
        }
      }
    }
  }
}

