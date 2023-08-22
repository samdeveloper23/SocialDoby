require('dotenv').config();
const express = require('express');

const server = express();

server.listen(process.env.PORT, () => {
    console.log(`escuchado en el puerto: ${process.env.PORT}`);
});