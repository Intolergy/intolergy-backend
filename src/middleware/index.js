
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const passport = require('passport')
const morgan = require('morgan')

const Middleware = require('../base/middleware')
const Response = require('../base/response')
const errors = require('./errors')
const config = require('../config/')
const auth = require('./auth')
const admin = require('./admin')

Middleware.register('auth', auth(Response))
Middleware.register('admin', admin(Response))

module.exports = class extends Middleware {
  firstmiddleware () {}

  premiddleware () {
    this.router.use(bodyParser.urlencoded({extended: false}))
    this.router.use(bodyParser.json())
    this.router.use(cookieParser())
    this.router.use(expressSession(config.expressSession))
    this.router.use(passport.initialize())
    this.router.use(passport.session())
    super.use('morgan', morgan('dev'))
  }

  postmiddleware () {
  }

  lastmiddleware () {
    this.router.use(errors(Response))
  }
}
