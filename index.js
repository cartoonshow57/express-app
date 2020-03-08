const express = require('express');
const path = require('path')

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile('/about.html', {root: __dirname});
});

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
});

app.use(function(req, res){
    res.status(404).sendFile(__dirname + '/404.html');
});


app.listen(8080, function() {
    console.log("Server started!");
});