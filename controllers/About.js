const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"This is about page"})
});

module.exports=router;