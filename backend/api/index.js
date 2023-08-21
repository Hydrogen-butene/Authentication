import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import userRoutes from "../routes/user.route.js"
import authRoutes from "../routes/auth.route.js"
import cookieParser from "cookie-parser"
dotenv.config()

mongoose.connect(process.env.MONO)
.then(()=>console.log("connected to database"))
.catch((err)=>console.log(err))

const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors())



app.listen(process.env.PORT,()=>{
    console.log("server running at  3001")
})

app.use("/api/user", userRoutes)
app.use("/api/auth",authRoutes)



app.use((err,req,res,next)=>{
    const statusCode = err.statusCode||500;
    const message= err.message || "internal Server Error"

    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})