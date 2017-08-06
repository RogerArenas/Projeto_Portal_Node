const server = require('./config/Server')
require('./config/database')
require('./config/routes')(server)
