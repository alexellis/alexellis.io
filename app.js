var express=require('express');
var app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use("/", express.static('public'));
app.use("/dist/", express.static('bower_components'));

app.listen(3000, function() {
    console.log("alexellis.io started");
});
