'use strict';
var fs = require('fs');
var gm = require('gm').subClass({imageMagick:true});


module.exports.getImageBuffer = function(charecter,callback){
  // creating an image
  gm(150,150,"#ECF5FD")
  .fill('#84BDFD')
  .font('../fonts/LiHei Pro.ttf',100)
  .drawText(25, 110, "刘")
  .toBuffer("PNG",function(err,buffer){
    callback(err,buffer);
  });
};

