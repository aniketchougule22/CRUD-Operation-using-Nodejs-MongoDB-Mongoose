require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected');
})