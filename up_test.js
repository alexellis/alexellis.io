var request = require('request');
var assert = require('assert');

describe("Availability test", function() {
  it("is up", function(done) {
    request.get("http://localhost:3000", function(err, res, body) {
      assert.ok(res.status==200, "Did not get OK status");
      done();
    });
  });

});
