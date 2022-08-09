const mongoose=require('mongoose');
const testimonialSchema=mongoose.Schema({
    selectedFile:String,
    clientname:String,
    clientcomment:String,

   
})

module.exports=mongoose.model('Testimonial',testimonialSchema);
