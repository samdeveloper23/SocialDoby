require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const colors = require('colors');
const fileUpload = require('express-fileupload');
const cors = require('cors');


const { errorStandard, notFound } = require('./src/services/errors');
const userRoutes = require('./src/routes/userRoutes');
const publicationRoutes = require('./src/routes/publicationRoutes');


const server = express();

server.use(morgan('dev'));

server.use(express.json());

server.use(fileUpload());

server.use(cors());

server.use(express.static(process.env.UPLOADS_DIR));

server.use(userRoutes);

server.use(publicationRoutes);

server.use(errorStandard);

server.use(notFound);

server.listen(process.env.PORT, () => {
    console.log(`escuchado en el puerto: ${process.env.PORT}`.bgGreen);
});

//SocialDoby