const express = require('express');
const router = express.Router();

// login Page
router.get('/login', (req, res) => res.render('login'));

// register Page
router.get('/register', (req, res) => res.render('register'));

// Dashboard
module.exports = router;