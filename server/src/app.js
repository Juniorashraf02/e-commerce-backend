const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const createError = require('http-errors');
// const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');


const app = express();

const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, //1 minute
    max: 3,
    message: 'Please try again later',
});

app.use(rateLimiter);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(xssClean());

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "get api is working fine"
    })
});

app.post('/test', (req, res) => {
    res.status(200).send({
        message: "post api is working fine"
    })
});

app.put('/test', (req, res) => {
    res.status(200).send({
        message: "put api is working fine"
    })
});

app.delete('/test', (req, res) => {
    res.status(200).send({
        message: "delete api is working fine"
    })
});


// client side error handling
app.use((req, res, next) => {
    //   next(createError(404, 'route not found'));
    return res.status(404).json({
        message: 'Route not found'
    });
});

// server side error handling
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        success: false,
        message: err.message || 'internal server error'
    })
});


module.exports = app;