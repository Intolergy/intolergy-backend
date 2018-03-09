
module.exports = (Response) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user && req.user.admin) {
      next(null)
    } else {
      Response.sendError(res, Response.FORBIDDEN)
    }
  }
}
