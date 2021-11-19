const router = require('express').Router();
const { phonesList } = require('../controllers/phonesController');

router.get('/', phonesList);

module.exports = router;
