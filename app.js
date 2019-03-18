"use strict"

const express = require('express');
const app = express();
const port = 3000;

app.disable('etag');
app.disable('x-powered-by');

app.use("/", express.static('public'));
app.use("/dist/", express.static('bower_components'));

app.use("/inlets", function(req, res) {
  return res.redirect(302, "https://raw.githubusercontent.com/alexellis/inlets/master/get.sh");
});

app.use("/goto/:id", function(req, res) {
  if(req.params && req.params.id) {

    switch(req.params.id) {
      case "github":
        return res.redirect(302, "https://github.com/alexellis/");
      case "blog":
        return res.redirect(302, "http://blog.alexellis.io/");
      case "linkedin":
        return res.redirect(302, "https://www.linkedin.com/in/alexellisuk/");
      case "openfaas":
        return res.redirect(302, "https://www.openfaas.com/");
      case "twitter":
        return res.redirect(302, "https://twitter.com/alexellisuk");
    }
  }
  res.end(404);
});

app.listen(port, function() {
    console.log(`alexellis.io started on port: ${port}.`);
});
