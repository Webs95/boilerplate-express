let express = require('express');
let app = express();

const filePath = __dirname + "/views/index.html";

app.get('/say-hello', (req, res) => {
 res.sendFile(filePath);
});

app.get('/get-file', (req, res) => {
 res.sendFile(filePath);
})

app.use(express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
































 module.exports = app;
