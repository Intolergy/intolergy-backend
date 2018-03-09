
module.exports = {
  morgan: {
    use: true
  },
  db: {
    url: 'mysql://test:test@localhost/Intolergy',
    options: {
      logging: false
    },
    sync: {
      force: true
    }
  }
}
