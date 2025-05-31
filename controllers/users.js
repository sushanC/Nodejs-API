const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json({message:"Displaying user"})
});
router.get('/:userID',(req,res)=>{
    console.log(req.params.userID);
    const userID=req.params.userID
    res.json({message:`Displaying the user ${userID}`})
})




module.exports=router;