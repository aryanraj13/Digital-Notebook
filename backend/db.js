const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.DATABASE

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>
    console.log("Connected to server Successfully")).catch((e)=>
    console.log(e.message))

}

module.exports = connectToMongo;