let express = require('express');
let app = express();
require('dotenv').config();

app.use('/public', express.static(`${__dirname}/public`));

app.use(function(req, res, next) {
    const message = `${req.method} ${req.path} - ${req.ip}`;
    console.log(message);
    next();
});

app.get('/:word/echo', function(req, res, next) {
    res.json({ echo: req.params.word });
});

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({ time: req.time });
});

app.get('/', function(req, res) {
    const indexHtml = `${__dirname}/views/index.html`
    res.sendFile(indexHtml);
});

app.get('/json', function(req, res){
    let greetings = "Hello json";

    if (process.env.MESSAGE_STYLE === 'uppercase') {
        greetings = greetings.toUpperCase();
    }

    res.json({"message": greetings});
})





























 module.exports = app;
