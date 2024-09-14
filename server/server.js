const http = require("http");
const mongoose = require("mongoose");
const express = require("express")
const session = require("express-session")
const path = require("path"); // provide utilities for working with file and directory paths
// const socketManager = require("./server-socket");


const api = require("api")

const app = express()
app.use(express.json())
const reactPath = path.resolve(__dirname, "..", "dist");
app.use(express.static(reactPath));

//Because every file is being rendered on the client side, we essentially want to 
//return the starter file that is bundled with every route whenever
//we put some kind of url request in the browser

app.get("*", (req, res) => {
    console.log("Serving:", path.join(reactPath, "main.js")); // Check path in console
    res.sendFile(path.join(reactPath, "index.html"));
  });

app.use((err, req, res, next) => {
    const status = err.status || 500;
    if (status === 500) {
      // 500 means Internal Server Error
      console.log("The server errored when processing a request!");
      console.log(err);
    }
  
    res.status(status);
    res.send({
      status: status,
      message: err.message,
    });
}); 

// hardcode port to 3000 for now
const port = 3000;
const server = http.Server(app);
// socketManager.init(server);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
