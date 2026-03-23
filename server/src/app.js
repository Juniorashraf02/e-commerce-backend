const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const createError = require('http-errors');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "everything is working fine"
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
app.use((req, res, next)=>{
  next(createError(404, 'route not found'));
});

// server side error handling
app.use((err, req, res, next)=>{
   return res.status(err.status || 500).json({
    success: false,
    message: err.message
   })
});


module.exports = app;