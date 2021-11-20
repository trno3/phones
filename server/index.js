const express = require('express');
const db = require('diskdb');
const phonesRoutes = require('./routes/phonesRouter');

db.connect('./server/data', ['phones.json']);
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/phones', phonesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
