const app = require("./app");
require('dotenv').config();
// console.log(process.env.SERVER_PORT);

const {serverPort} = require("./secret");
// const serverPort = 3000;
// const serverPort = process.env.SERVER_PORT || 9500;

app.listen(serverPort, () => {
    console.log(`server is running at http://localhost:${serverPort}`);
});

