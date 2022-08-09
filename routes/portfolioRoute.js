const express=require('express');
const router=express.Router();
const portfolioController=require('../controllers/portfolioController')



// routes
router.get('/',portfolioController.getPosts);
router.post('/',portfolioController.createPost);

// export 
module.exports=router;

