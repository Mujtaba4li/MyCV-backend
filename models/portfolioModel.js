const mongoose=require('mongoose');
const portfolioSchema=mongoose.Schema({
    selectedFile:String,
    title:String,
    description:String,
    github:String,
    demo:String,
   
})

module.exports=mongoose.model('Portfolio',portfolioSchema);
