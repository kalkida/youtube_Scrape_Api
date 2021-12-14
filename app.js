const express = require ('express');
const app = express();
const mongoose = require ('mongoose')

const  bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

const PostRoute = require('./routes/posts')
app.use ('/posts' , PostRoute)

app.get('/',(req,res) =>{
    res.send("we are home")
})


mongoose.connect(process.env.DB_Connection ,() =>{
    console.log('connected to db')
})

app.listen(3000)