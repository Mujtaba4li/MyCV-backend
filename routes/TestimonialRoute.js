const express=require('express');
const router=express.Router();
const testimonialSchema=require('../controllers/testimonialController')


// routes
router.get('/get/',testimonialSchema.getTestimonial);
router.post('/add/',testimonialSchema.creatTestimonial);

// export 
module.exports=router;

