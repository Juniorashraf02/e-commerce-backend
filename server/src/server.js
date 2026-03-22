const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "everything is working fine"
    })
});

app.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`);
});