
const Controller = require('../../base/controller')
const Messages = require('./messages')

module.exports = (Model, Response, {Passport}) => class UserController extends Controller {
  static async signup (req, res) {
    try {
      await Model.create(req.body)
      Response.sendOK(res)
    } catch (error) {
      Response.handleValidationErrors(res, error)
    }
  }

  static async login (req, res, next) {
    try {
      const user = await Passport.authenticate(req, res, next, 'local')
      await Passport.login(req, user)
      Response.sendOK(res)
    } catch (error) {
      if (error === 'Missing credentials' || error === 'WrongAccount') {
        Response.sendError(res, Response.CUSTOM_BAD_REQUEST({
          message: Messages.LOGIN_FAILURE
        }))
      } else {
        Response.sendError(res, Response.SERVER_ERROR)
      }
    }
  }

  static logout (req, res) {
    if (req.isAuthenticated()) {
      req.logout()
    }
    Response.sendOK(res)
  }

  static async list (req, res) {
    try {
      const users = await Model.list()
      Response.sendData(res, users)
    } catch (error) {
      Response.sendError(res, Response.SERVER_ERROR)
    }
  }
}
