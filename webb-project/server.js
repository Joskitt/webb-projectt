const express = require("express")
const layout = require("express-ejs-layouts")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const server = express()
const indexRouter = require("./controller/index")
const decodeIDToken = require("./config/auth")

//view engine
server.use(express.static("public"))
server.set("view engine", "ejs")
server.set("layout", "layouts/layout")
server.use(layout)
server.use(cookieParser())
server.use(express.urlencoded({extended:true}))
/*
server.use(decodeIDToken)
*/
server.use("/", indexRouter)
server.use(express.json())

server.listen(process.env.PORT, ()=>{
    console.log("Connected to server at port " + process.env.PORT);
})