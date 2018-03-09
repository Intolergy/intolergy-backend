
const Controller = require('../../base/controller')

module.exports = (Model, Response) => class PostController extends Controller {
  static async create (req, res) {
    try {
      await Model.create(req.user.name, req.body)
      Response.sendOK(res)
    } catch (error) {
      Response.sendError(res, Response.BAD_REQUEST)
    }
  }

  static async list (req, res) {
    try {
      const posts = await Model.list(req.query)
      Response.sendData(res, posts)
    } catch (error) {
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }
}
