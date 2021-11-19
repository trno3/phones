const phonesList = (_req, res) => {
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
    ];

    res.send(JSON.stringify(data));
};

module.exports = {
    phonesList,
};
