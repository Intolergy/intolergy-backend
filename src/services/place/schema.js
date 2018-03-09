
const Schema = require('../../base/schema')
const Validation = require('../../lib/validation')

module.exports = class PlaceSchema extends Schema {
  static get NAME () { return 'place' }

  static properties (Sequelize) {
    return {
      name: {
        type: Sequelize.STRING(280),
        validate: {
          len: Validation.len(0, 280)
        }
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: false,
        
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING(10000),
        allowNull: false,
        validate: {
          len: Validation.len(0, 280)
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

