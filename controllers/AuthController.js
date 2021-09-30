const express = require('express');
const dotenv = require('dotenv');
const router = express.Router();
const jwt = require('jsonwebtoken');
dotenv.config();

router.post('/login', (req, res) => {
    const { userName, password } = req.body;
    const credentials = {
        userName : 'root',
        password: 'root@123'
    }

    if (userName === credentials.userName && password === credentials.password) {
        const tokenData = {
            userName
        };
        const token = jwt.sign(tokenData, process.env.SUPER_SECRET_KEY, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.header('x-auth', token).send({
            message: "Logged in successfully"
        })
    } else {
        return res.json({ error: "Invalid credentials" });
    }

})

module.exports = {
    authRouter: router
}