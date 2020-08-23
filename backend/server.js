const express = require('express');
// const bodyParser = require('body-parser'); Already included on express
const cors = require('cors');
const mongoose = require('mongoose');
//const { Mongoose } = require('mongoose');


require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true , useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb Database connection established succesfully");
});

// Listen the files created
const exersiceRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

// Use the created files
app.use('/exercises', exersiceRouter);
app.use('/users', userRouter);
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});
