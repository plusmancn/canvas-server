'use strict';
var fs = require('fs');
var gm = require('gm');

// creating an image
gm(200, 400, "#ddff99f3")
.drawText(10, 50, "from scratch")
.write("./brandNewImg.jpg", function (err) {
  console.log(err);
});