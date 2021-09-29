const express = require('express');
const cors = require('cors');
const { routes } = require('./config/routes');
const PORT = 5000;

const app = express();

const corsOptions = {
    exposedHeaders: ['Authorization', 'x-auth'],
};

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors(corsOptions));

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log('---------------Server is up and running------------------');
    console.log(`---------------LISTENING ON: http://localhost:5000-----------`);
});
