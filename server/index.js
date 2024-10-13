require('dotenv').config()
const express=require('express');
const app=express();
const userRouter=require('./router/user-form-router')
const cors = require('cors');
const connectDB = require('./utils/db');
const path = require('path');

const corsOption={
    origin:process.env.CORS_ORIGIN || "http://localhost:5173",
    method:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

const _dirname=path.resolve()

app.use(cors(corsOption));

app.use(express.json())
app.use('/api',userRouter)
app.use('/images', express.static(path.join(__dirname, './images')));


app.use(express.static(path.join(_dirname, '/client/dist')));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"))
})


const PORT=5000;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("server is running at port ",PORT);
    })
})
