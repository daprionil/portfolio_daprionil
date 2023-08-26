require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const indexRouter = require('../routes/indexRouter');
const cookieParser = require('cookie-parser');

//? Apply Middlewares to server App

//! CORS OPTIONS TO CONFIGURATE - In production
const { HOST_CORS_CLIENT1, HOST_CORS_CLIENT2, HOST_CORS_CLIENT3 } = process.env;
const whiteListCors = [HOST_CORS_CLIENT1, HOST_CORS_CLIENT2, HOST_CORS_CLIENT3, 'http://localhost:5173'];
const corsOptions = {
    origin: function(origin, callback){
        if(whiteListCors.includes(origin)){
            callback(null, true);
            return;
        }
        
        callback(new Error('Not allowed by CORS'));
    },
    optionsSuccessStatus: 200
};

const server = express();
server.use(morgan('dev'));
server.use(express.json());
server.use(cors(corsOptions)); //! Apply CORS options in production
server.use(cookieParser());

//? main Router 
server.use(indexRouter);

//? Export server object
module.exports = server;