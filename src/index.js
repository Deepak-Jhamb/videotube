import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()

















/*
   way 1 to connect database
import express from "express"
const app =express()
(async()=>{
    try{
        await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRRR:",error)
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port : ${process.env.port}`)
        })
    }catch(error){
        console.log("error:",error)
        throw error
    }

})()
*/