const express=require ('express');
const path=require('path');
const app=express();
const port=process.env.PORT || 8000;

//Public static path
const static_path=path.join(__dirname,"../public");

app.use(express.static(static_path));

//Routing
app.get("",(req,res)=>{
        res.send("welcome to weather app");
})

app.get("/about",(req,res)=>{
    res.send("welcome to about page of weather app");
})

app.get("/weather",(req,res)=>{
    res.send("welcome to the weather page");
})

app.get("*",(req,res)=>{
    res.send("404 error page oops");
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})







