const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.json({message:"This is products page"})
});

router.get('/:productID',(req,res)=>{
    console.log(req.params.productID);
    const productID = req.params.productID;
    res.json({message:`Displaying products ${productID}`})
    
})

module.exports=router;


