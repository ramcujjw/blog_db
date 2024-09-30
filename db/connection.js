const mongoose = require("mongoose");

//Write missing code here for database connection
require('dotenv').config();
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connection Established');
}).catch((error)=>{
    console.log('Error in connection')
})