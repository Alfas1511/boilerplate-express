let express = require("express");
let app = express();
app.use('/public', express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  res.json({ message: "Hello json" });
});


// console.log("Hello World");
app.get("/", function (req, res) {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
