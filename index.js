const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotEnv = require("dotenv")
const cors = require("cors")
const studentRouters = require("./route/studentRoutes")

const port = process.env.PORT || 5000;

// middlewares 
dotEnv.config()
app.use(express.static("public"))
app.use(bodyParser.json())
// app.use(cors({orgin : "https://orgdashboard.netlify.app/"}))
app.use(cors(cors()))

// mongodb connection to the server
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("Mongodb is connected successfully")
}).catch((error)=>{
   console.log(error)
})

app.use("/students",studentRouters)


// server listens
app.listen(port ,()=>{
    console.log(`server started at port number ${port}`)
})