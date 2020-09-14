const express = require('express');
// var cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const port = process.env.PORT || 3030;

// app.use(cors());
app.use(bodyParser.json());

const oplatyRoute = require('./routes/oplaty');

app.use('/oplaty', oplatyRoute);

app.get('/', (req, res) => {
    res.send('test');
});

mongoose.connect(process.env.DB_CONNECTION, 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, 
    () => {        
        console.log( mongoose.connection.readyState === 1 ? "Connected" : "Problem with connection" );
    }
);

app.listen(port, () => {
    console.log('Started');
});