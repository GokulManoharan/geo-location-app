const express = require('express');
const router = express.Router();
const { authRouter } = require('../controllers/AuthController');

const app = express();

app.use(express.json());

router.use('/auth', authRouter);

module.exports = {
    routes: router
}