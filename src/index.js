import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on((error)=>{
        console.log("ERRR",error)
        throw error
    })

    const port =process.env.PORT||8000

    app.listen(port,()=>{
        console.log(`app is listening on port: ${port}`)

    })
})
.catch((err)=>{
    console.log(`mongo db connection failed!!! `,err);
})

















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