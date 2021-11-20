const router = require('express').Router();
const {
    getPhonesList,
    getPhone,
    removePhone,
    updatePhone,
    createPhone,
} = require('../controllers/phonesController');

router.get('/', getPhonesList);

router.get('/:id', getPhone);

router.delete('/:id', removePhone);

router.put('/:id', updatePhone);

router.post('/', createPhone);

module.exports = router;
