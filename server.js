const express = require("express");
const app = express();
const port = 3000;
const path = require("path")

app.unsubscribe(express.static(path.join(__dirname,'static')));
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, function(){
    console.log("server is working")
});
