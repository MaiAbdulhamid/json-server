const jsonServer = require('json-server')

const server = jsonServer.create()

// Comment out to allow write operations
const router = jsonServer.router('db.json')

// const middlewares = jsonServer.defaults()

// server.use(middlewares)

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

// Export the Server API
module.exports = server