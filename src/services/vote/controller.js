
const Controller = require('../../base/controller')

module.exports = (Model, Response) => class VoteController extends Controller {
  static getVotesOf (type) {
    return async (req, res) => {
      try {
        const votes = await Model.getVotesOf(type, req.params.id)
        Response.sendData(res, votes)
      } catch (error) {
        console.log(error)
        Response.sendError(res, Response.NOT_FOUND)
      }
    }
  }

  static async createVote (req, res) {
    try {
      await Model.createVote(req.user, req.body)
      Response.sendOK(res)
    } catch (error) {
      Response.sendError(res, Response.BAD_REQUEST)
    }
  }
}

