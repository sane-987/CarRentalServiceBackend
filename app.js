const express = require("express")
const app = express()
const mysql = require("mysql2")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.json())
app.use(cors())



app.get("/", (req, res) => {
    res.send("Welcome to Car Rental service")
})

app.use("/", require("./routes/users"))


app.listen(3000, () => {
    console.log("Server connected : 3000")
})