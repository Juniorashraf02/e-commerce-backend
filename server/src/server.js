const express = require('express');
const morgan = require('morgan');
const router = express.Router();
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


// client side
app.use((req, res, next)=>{
  res.status(404).json({
    message: 'route not exist'
  });
  next();
});

// server side
app.use((err, req, res, next)=>{
   console.log(err,stack);
   res.status(404).return('something broke')
});




app.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`);
});