const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./Router/StudentRouter");
const cors = require("cors");
const ejs = require("ejs");

// Load environment variables from .env file
env.config();

// Connect to MongoDB using the URI from the environment variables
mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection Established");
    })
    .catch((err) => {
        console.log("MongoDB Not Connected", err);
    });

const app = express();

// Use the cors middleware
app.use(cors());

// Set EJS as the templating engine
app.set("view engine", 'ejs');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route for rendering EJS template
app.get("/ps", (req, res) => {
    res.render('frontend'); // Ensure 'frontend.ejs' exists in the views folder
});

// Placeholder for POST route, you can add your logic here
app.post("/someEndpoint", (req, res) => {
    // Add your POST request handling logic here
    res.send("POST request received");
});

// Route for handling student-related requests
app.use("/Student", router);

// Start the server on port 5000
app.listen(5000, (err) => {
    if (err) {
        console.log("Unable to Connect!");
    } else {
        console.log("Server is running on port 5000");
    }
});
