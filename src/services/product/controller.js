
const Controller = require('../../base/controller')

module.exports = (Model, Response) => class ProductController extends Controller {
  static async list (req, res) {
    try {
      const products = await Model.getProducts(req.query)
      Response.sendData(res, products)
    } catch (error) {
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }

  static async create (req, res) {
    try {
      await Model.create(req.user.name, req.body)
      Response.sendOK(res)
    } catch (error) {
      Response.sendError(res, Response.BAD_REQUEST)
    }
  }
}

