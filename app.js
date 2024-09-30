const express = require("express");
const app = express();
const morgan =require('morgan')
app.use(morgan('dev'));

// var PORT = 3000;
// app.use(express.json());
// const blog
// const blogModel=require('model');
const blogRoutes=require('./routes/blogRoutes')
app.use('/blog',blogRoutes)

require('dotenv').config();
const PORT=process.env.PORT;
require('./db/connection')
//Write missing code here and all the CRUD operations on the database



app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
