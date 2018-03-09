
const Schema = require('../../base/schema')
const Validation = require('../../lib/validation')
const Bcrypt = require('../../lib/bcrypt')

module.exports = class PostSchema extends Schema {
  static get NAME() { return 'post' }

  static properties(Sequelize) {
    return {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(140),
        allowNull: false,
        validate: {
          len: Validation.len(1, 140)
        }
      },
      body: {
        type: Sequelize.STRING(10000),
        allowNull: true,
        validate: {
          len: Validation.len(0, 10000)
        }
      }
    }
  }
}
