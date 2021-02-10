const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Database Connection
require('./config/db.js')();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}))

//Routes 
const transactions = require('./routes/transaction');

app.use('/api/v1/transactions', transactions);

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server Running ....')
})