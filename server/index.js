const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todo.js");


const app = express();
app.use(express.json())
app.use(cors({
    origin: "https://todo-sable-three-60.vercel.app/",
    credentials: true
  }));
app.use("/todo", router)



const PORT = process.env.PORT || 5000;

const start = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        app.listen(PORT, ()=> console.log(`SERVER run in ${PORT} port`))
        
    } catch (error) {
        console.log(error)
    }
}

start()