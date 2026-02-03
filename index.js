const express= require("express")
const connection = require("./mongoDb/config")
const router = require("./router/userrouter")
const app = express()
const doteenv = require("dotenv")


doteenv.config()

connection()


app.use(express.json())
app.use("/authentication",router)

app.listen(process.env.port,console.log("Server Connected"))