import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routers/userRoute.js"

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL

app.use(bodyParser.json())
app.use("/api/user",userRoute);

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected successfully")
    app.listen(PORT, ()=>{
        console.log(`Server is running on PORT ${PORT}`);
    })
}).catch((error)=>{
    console.log("Database connection failed:",error);
})