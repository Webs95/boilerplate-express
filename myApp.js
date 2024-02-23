let express = require('express');
let app = express();

const filePath = __dirname + "/views/index.html";

app.get('/say-hello', (req, res) => {
 res.sendFile(filePath);
});

app.get('/get-file', (req, res) => {
 res.sendFile(filePath);
})
































 module.exports = app;
