// CRUD OPERATIONS
// For create operation the methods are writeFile() and appendFile()
// For read operation the method is readFile()
// For update operation the methods are writeFile() and appendFile()
// For delete operation the method is unlink

// READ FILE
const fs = require('fs'); // Import the file system module

// fs.readFile("abc.txt", "utf-8", (err, data) => { // Read the file with UTF-8 encoding
//     if (err) { // Check for errors
//         console.log(err); // Log the error if there is one
//     } else {
//         console.log(data); // Log the file contents if no error
//     }
// });


// WRITE FILE
// fs.writeFile("a.html", "<h1>Hello</h1>", (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log("Created and Data added")
//     }
// })

// APPEND FILE
// fs.appendFile("abc.txt", "Hello World", (err) => {
//     if (err) console.log(err)
//     else console.log("Appended")
// })

// DELETE FILE
// fs.unlink("My.text", (err) => {
//     if (err) console.log(err)
//     else console.log("File Deleted")
// })

// RENAME FILE
// fs.rename("abc.txt", "hello.txt", (err) => {
//     if (err) console.log("File Not Found")
//     else console.log("success")
// })



// WORKING WITH SERVER
// http request and response
// ctrl - c in the terminal will stop the server
// const http = require('http'); // Import the HTTP module
// const url = require("url");
// Create the HTTP server
// const myser = http.createServer((req, res) => {
//     res.write("<h1>Hello World Jeevan Here</h1>"); // Write a response
//     const q = url.parse(req.url, true).query;
//     res.write("name : " + q.name);
//     res.write("age :" + q.age);
//     res.end(); // End the response
// });

// Make the server listen on port 5000
// myser.listen(5000, () => {
//     console.log('Server is listening on port 5000'); // Log a message to the console
// });

// CREATING MODULES
function add(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function multi(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}

// creating modules and use this with other files
module.exports = { add, sub, multi, div }
