// Express is the middleware which acts between the request and response

const express = require('express');
const app = express();
app.use((req, res, next) => {
    if (10 > 20) next()
    else console.log("Not Allowed")
})
// Here localhost is the router
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/Home', (req, res) => {
    res.send("I am Home Page");
});

app.get('/About', (req, res) => {
    res.send("I am About Page");
});

app.get('/user/:id', (req, res) => {
    res.send("I am A User");
});

app.listen(5000, (err) => {
    if (err) console.log("Error in accessing port", err);
    else console.log("Connection established");
});
