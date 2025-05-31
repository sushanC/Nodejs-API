const express = require("express")
const app =express();

app.listen(5000,()=>{
    console.log("server started on port 5000"); 
});

app.use('/products',require('./controllers/products'));


app.get('/',(req,res)=>{
    res.json({message:"Hello from nodeAPI"})
});
app.get('/about',(req,res)=>{
    res.json({message:"This is about page"})
});


app.get('/users',(req,res)=>{
    res.json({message:"Displaying user"})
});


app.get('/users/:userID',(req,res)=>{
    console.log(req.params.userID);
    const userID=req.params.userID
    res.json({message:`Displaying the user ${userID}`})
})
