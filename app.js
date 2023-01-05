const express = require('express');
const app = express();

require('dotenv').config();
require('./config/db');

app.use(express.json());

const { users, mobiles } = require('./src/');

app.use('/users', users);
app.use('/mobiles', mobiles);

app.listen(process.env.PORT, () =>{
    console.log(`server running on PORT ${process.env.PORT}`);
});