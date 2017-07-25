const port = 3003

const bosyParser = require ('body-parser')
const express = require('express')
const server = express()


server.user(bodyParser.urlencoded({extended: true}))
server.user(bodyParser.json())

server.listen(port, function() {
   console.log('BACKEND is running on port ${port}.')
})


 server.use(function(req, res, next){

   res.send('Funcionou')
 })
