
const Controller = require('../../base/controller')

module.exports = (Model, Response) => class PostController extends Controller {

  static async create(req, res) {
    try {
      await Model.create({ ...req.body, user: req.user.name })
      Response.sendOK(res)
    } catch (error) {
      Response.handleValidationErrors(res, error)
    }
  }

  static async list(req, res) {
    try {
      const data = await Model.list(req.query)
      Response.sendData(res, data)
    } catch (error) {
      Response.handleValidationErrors(res, error)
    }
  }
}
