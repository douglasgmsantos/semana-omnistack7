const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors')


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect('mongodb+srv://douglassantos:teste123@cluster0-kesak.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


app.use((req, res, next) => {
    req.io = io;

    next();
});

app.use(cors());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized' )))

app.use(require('./routes'))

//OUVINDO PONTA DO SERVIDOR
server.listen(3333);