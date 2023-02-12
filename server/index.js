const express = require('express');
const mongoose  = require( 'mongoose')
const cors = require('cors');
const app = express();
const user=require('./routes/user')
app.use(express.json())
app.use(cors())


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=> console.log(`mongo connected to db`))
    .catch(err => console.error(err.message))


app.use('/users',user)





app.listen(4000 , ()=> console.log(`active on 4000`));