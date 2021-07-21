// creating express instance
const app = require("express")();
 
// creating http instance
const http = require("http").createServer(app);
 
// creating the route
app.get("/", (req , res) => {
    res.sendFile(__dirname + "/index.html");
})





// start the server
http.listen(3000, function () {
    console.log("J'écoule le port 3000");
});