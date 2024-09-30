const mongoose=require("mongoose");
const blogSchema = mongoose.Schema({
//Write missing code here
    blogCaption:String,
    blogDescription:String,
    blogAuthor:String,
    blogLikes:Number
});


//Write missing code here
const blogData=mongoose.model('blog',blogSchema)
module.exports=blogData;