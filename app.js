var express=require('express');
var app = express();

app.disable('etag');
app.disable('x-powered-by');

app.use("/", express.static('public'));
app.use("/dist/", express.static('bower_components'));

app.use("/goto/:id", function(req, res) {
  if(req.params.id == "github") {
    return res.redirect(302, "https://github.com/alexellis/");
  } else if(req.params.id == "blog") {
    return res.redirect(302, "http://blog.alexellis.io/");
  }
  res.end(404);
});

app.listen(3000, function() {
    console.log("alexellis.io started");
});
