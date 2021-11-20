const data = [
    {
        id: 0,
        name: 'iPhone 7',
        manufacturer: 'Apple',
        description: 'lorem ipsum dolor sit amet consectetur.',
        color: 'black',
        price: 769,
        imageFileName: 'IPhone_7.png',
        screen: '4,7inch IPS',
        processor: 'A10Fusion',
        ram: 2,
    },
    {
        id: 1,
        name: 'iPhone 8',
        manufacturer: 'Apple',
        description: 'lorem ipsum dolor sit amet consectetur.',
        color: 'black',
        price: 969,
        imageFileName: 'IPhone_8.png',
        screen: '5inch IPS',
        processor: 'A11',
        ram: 2,
    },
    {
        id: 2,
        name: 'iPhone 7',
        manufacturer: 'Apple',
        description: 'lorem ipsum dolor sit amet consectetur.',
        color: 'black',
        price: 769,
        imageFileName: 'IPhone_7.png',
        screen: '4,7inch IPS',
        processor: 'A10Fusion',
        ram: 2,
    },
    {
        id: 3,
        name: 'iPhone 8',
        manufacturer: 'Apple',
        description: 'lorem ipsum dolor sit amet consectetur.',
        color: 'black',
        price: 969,
        imageFileName: 'IPhone_8.png',
        screen: '5inch IPS',
        processor: 'A11',
        ram: 2,
    },
];

const getPhonesList = (_req, res) => {
    res.send(JSON.stringify(data));
};

const getPhone = (req, res) => {
    const id = parseInt(req.params.id);
    let idNotValid = false;

    if (isNaN(id)) {
        idNotValid = true;
    } else {
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

module.exports = {
    getPhonesList,
    getPhone,
};
