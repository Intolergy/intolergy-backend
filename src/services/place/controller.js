
const Controller = require('../../base/controller')

module.exports = (Model, Response) => class PlaceController extends Controller {
  static async list (req, res) {
    try {
      const places = await Model.getPlaces(req.query)
      Response.sendData(res, places)
    } catch (error) {
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }

  static async create (req, res) {
    try {
      await Model.create(req.user.name, req.body)
      Response.sendOK(res)
    } catch (error) {
      console.log(error)
      Response.sendError(res, Response.BAD_REQUEST)
    }
  }
}

