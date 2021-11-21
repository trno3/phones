const db = require('diskdb');

const getIdFromRequest = (req) => {
    const id = parseInt(req.params.id);

    return isNaN(id) ? null : id;
};

const getNewId = () => {
    const itemsList = db.phones.find();
    const newId = Math.max(...itemsList.map((e) => e.id), 0);

    return newId + 1;
};

const getPhonesList = (_req, res) => {
    const phones = db.phones.find();

    res.send(JSON.stringify(phones));
};

const getPhone = (req, res) => {
    const id = parseInt(req.params.id);
    let idNotValid = false;

    if (isNaN(id)) {
        idNotValid = true;
    } else {
        const data = db.phones.find({ id });
        const phone = data.filter((item) => item.id === id);

        if (phone.length !== 1) {
            idNotValid = true;
        } else {
            res.send(JSON.stringify(phone[0]));
        }
    }

    if (idNotValid) {
        res.sendStatus(404);
    }
};

const removePhone = (req, res) => {
    const id = getIdFromRequest(req);
    let idNotValid = false;

    if (id === null) {
        idNotValid = true;
    } else {
        //TODO: not looking if the phone is in the db
        db.phones.remove({ id });

        res.send(JSON.stringify('OK'));
    }

    if (idNotValid) {
        res.sendStatus(404);
    }
};

const updatePhone = (req, res) => {
    console.log('Updating item: ');
    const id = getIdFromRequest(req);
    const item = req.body;
    let idNotValid = false;

    if (id === null) {
        idNotValid = true;
    } else {
        //TODO: not looking if the phone already exists
        db.phones.update({ id }, item);
        res.send(JSON.stringify('OK'));
    }

    if (idNotValid) {
        res.sendStatus(404);
    }
};

const createPhone = (req, res) => {
    //TODO: verify data is correct
    const item = req.body;
    console.log('Adding new item: ', req.body);
    item.id = getNewId();

    db.phones.save(item);

    res.send(JSON.stringify('OK'));
};

module.exports = {
    getPhonesList,
    getPhone,
    removePhone,
    updatePhone,
    createPhone,
};
