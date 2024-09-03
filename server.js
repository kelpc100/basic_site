const express = require("express");
const app = express();
const port = 3000;
const path = require("path")
const bodyParser = require('body-parser')
const exp = require("constants")

app.use(express.urlencoded({extended: false}))

app.unsubscribe(express.static(path.join(__dirname,'static')));
app.use(express.static('public'));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/views/sql.html", (req, res) => {
    res.sendFile(__dirname + "/views/sql.html");
});

app.post('/api', function(req, res){
    console.log(req.body)
});

app.listen(port, function(){
    console.log("server is working")
});
