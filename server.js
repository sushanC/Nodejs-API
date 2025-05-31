const express = require("express")
const app =express();

app.use('/products', require('./controllers/products'))
app.use('/users', require('./controllers/users'))
app.use('/about', require('./controllers/About'))




app.get('/',(req,res)=>{
    res.json({message:"Hello from nodeAPI"})
});




app.listen(5000,()=>{
    console.log("server started on port 5000"); 
});
