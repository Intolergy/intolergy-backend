
const Schema = require('../../base/schema')

module.exports = class VoteSchema extends Schema {
  static get NAME () { return 'vote' }

  static properties (Sequelize) {
    return {
      type: {
        type: Sequelize.ENUM,
        values: ['product', 'place', 'post']
      },
      value: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      targetId: {
        type: Sequelize.INTEGER
      }
    }
  }
}

