
const Model = require('../../base/model')

module.exports = (Schema) => class VoteModel extends Model {
  static async getVotesOf (type, id) {
    const votes = Schema.findOne({where: {
      type,
      targetId: id
    }})
    return votes.reduce((acc, vote) => {
      if (vote.value > 0) {
        acc.positive += vote.value
      } else {
        acc.negative += vote.value
      }
      return acc
    }, {positive: 0, negative: 0})
  }

  static async createVote (user, body) {
    let {type, value, id} = body

    type = type.toLowerCase()
    value *= user.reputation
    
    const query = {
      fk_user: user.name,
      type,
      value,
      targetId: id
    }
    
    const exists = await VoteModel.findOne(name, type, id)
    if (exists.id) {
      query.id = exists.id
    }
    return Schema.upsert(query)
  }

  static findOne (fk_user, type, targetId) {
    return Schema.findOne({where: {
      fk_user, type, targetId
    }})
  }
}

