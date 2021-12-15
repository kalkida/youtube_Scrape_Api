const express = require ('express');
const app = express();
const mongoose = require ('mongoose')

const  bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

// for routhing through  the database

const PostRoute = require('./routes/posts')
app.use ('/youtube_Data' , PostRoute)



mongoose.connect(process.env.DB_Connection ,() =>{
    console.log('connected to db')
})

app.listen(3000)