const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todo.js");


const app = express();
app.use(express.json())
app.use(cors())
app.use("/todo", router)



const PORT = process.env.PORT || 5000;

const start = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_CONECT_URL)
        app.listen(PORT, ()=> console.log(`SERVER run in ${PORT} port`))
        
    } catch (error) {
        console.log(error)
    }
}

start()