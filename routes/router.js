const express = require('express');
const router = express.Router();
const con = require('../controller/ConTroller')

router.get('/', con.roll);
router.get('/a', con.about);
router.get('/b', con.cycle);
router.get('/c', con.news);
router.get('/d', con.contact);
module.exports = router;