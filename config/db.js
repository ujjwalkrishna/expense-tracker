const mongoose = require('mongoose');

const connectDB = () => {
    const url = 'mongodb://localhost:27017/expense-TrackerDB';
    mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true });
    const connection = mongoose.connection;
    connection.once('open', () => { console.log('Database connected..'); })
        .catch(err => { console.log('Connection failed..'); })
}

module.exports = connectDB;