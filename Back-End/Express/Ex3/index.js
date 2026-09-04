import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req,res,next) => {
    console.log(`URL Path: ${req.path}`)
    console.log(`Header: ${req.header}`)
})

app.get("/", (req,res)=>{
    console.log(`URL : ${req.path}`);
    res.send("<h1> Home Page </h1>")
})

app.get("/about", (req, res) => {
    console.log(`URL : ${req.path}`);
    res.send("<h1> About </h1>")
})

app.use((req,res) => {
    res.send("<h1>Page not found!</h1>")
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

