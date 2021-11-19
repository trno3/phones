const express = require('express');
const phonesRoutes = require('./routes/phonesRouter');

const PORT = process.env.PORT || 3001;

const app = express();

app.use('/phones', phonesRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
