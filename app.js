"use strict"

const express = require('express');
const app = express();
const port = 3000;

app.disable('etag');
app.disable('x-powered-by');

app.use("/", express.static('public'));
app.use("/dist/", express.static('bower_components'));

app.listen(port, function() {
    console.log(`alexellis.io started on port: http://0.0.0.0:${port}`);
});
