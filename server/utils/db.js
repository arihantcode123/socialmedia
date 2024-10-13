const mongoose = require('mongoose');

const URL=process.env.MONGO_URL;
const connectDB=async()=>{
    try {
        await mongoose.connect(URL)
        console.log("database is connected successfully");
    } catch (error) {
        console.log("database connection failed");
        console.log(error);
        process.exit(0);
    }
}

module.exports=connectDB;