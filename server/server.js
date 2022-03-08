require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express')
const http = require('http')
const cors = require('cors')
const port = process.env.PORT   
const app = express()
const server = http.createServer(app)
// const Routes = require('./app/route')
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        headers: ['POST', 'GET']
    }
})
const socket = require('./app/socket')

app.use(cors())

io.on('connection', socket => {
    socket.emit('me', socket.id)

        socket.on('call-user', data => {
            console.log("Calling "+data.userToCall);
            io.to(data.userToCall).emit('call-user', {
                signal: data.signalData,
                from: data.from,
                name: data.name
            })
        })
    
        socket.on('answer', data => {
            console.log("Incoming Call from "+data.to);
            io.to(data.to).emit('call-accepted', data.signal)
        })
    socket.on('disconnected', () => {
        socket.broadcast.emit('Call Ended')
    })
})

server.listen(port, () => console.log('Server running on '+port))