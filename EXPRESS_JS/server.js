const express = require("express")
const mongose = require("mongoose")
const env = require("dotenv")
const bodyparser = require("body-parser")
const router = require('./EmployeeRouter')
const cors = require("cors");
const app = express()
env.config()
mongose.connect(process.env.URI)
    .then(
        () => { console.log("MongoDB Connected") }
    )
    .catch((err) => { console.log("not connected", err) })

app.use(cors());
app.use(bodyparser.json())
app.use("/employee", router)

app.listen(5000, (err) => {
    if (err) console.log("unable to connect!")
    else console.log("connection established successfully!")
})