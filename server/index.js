const express = require('express');
const mongoose = require( 'mongoose')
const cors = require('cors');

const postsApi = require('./routes/postApi');



mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=> console.log(`mongo connected to db`))
    .catch(err => console.error(err.message))


const app = express();
app.use(express.json())
app.use(cors())
app.use('/postapi',postsApi)



app.listen(4002 , ()=> console.log(`active on 4002`));