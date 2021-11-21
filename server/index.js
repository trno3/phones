const express = require('express');
const db = require('diskdb');
const phonesRoutes = require('./routes/phonesRouter');
const path = require('path');

db.connect('./data', ['phones.json']);
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use('/phones', phonesRoutes);

app.use(express.static(path.join(__dirname, 'dist/client')));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
