const router = require('express').Router();
const { getPhonesList, getPhone } = require('../controllers/phonesController');

router.get('/', getPhonesList);

router.get('/:id', getPhone);

module.exports = router;
