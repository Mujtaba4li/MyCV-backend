const express=require('express');
const router=express.Router();
const portfolioController=require('../controllers/portfolioController')


// routes
router.get('/get/',portfolioController.getPortfolio);
router.post('/add/',portfolioController.createPortfolio);

// export 
module.exports=router;

