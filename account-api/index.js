const express = require("express");
const cors = require('cors');
const accountRouter = require('./routes/account-route');
const db = require('./db');
const app = express();

const corsOptions = {
    origin: '*',
    optionSucessStatus: 200
};

app.use(cors(corsOptions));


app.use(express.json({
    limit: "20mb"
}));

app.use(express.urlencoded({
    limit: "20mb",
    extended: true
}));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/api', accountRouter);

const port = process.env.PORT || 3003;

module.exports = app.listen(port, () =>  console.log(`Listening on port ${port}....`));
