
const Controller = require('../../base/controller')

module.exports = (Model, Response, {Carrefour}) => class ProductController extends Controller {
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

  static async carrefourSearch (req, res) {
    try {
      const products = await Carrefour.search(req.query.q)
      Response.sendData(res, products.data.list)
    } catch (error) {
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }

  static async carrefourGTIN (req, res) {
    try {
      const product = await Carrefour.findProductByGTIN(req.params.gtin)
      Response.sendData(res, product)
    } catch (error) {
      console.log(error)
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }
}

