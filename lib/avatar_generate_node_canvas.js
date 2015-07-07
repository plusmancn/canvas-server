/**
 * @description node-canvas版本，存在中文字体支持性问题
 */
'use strict';
var fs = require('fs');
var Canvas = require('canvas')
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');

ctx.fillStyle = "rgb(236, 245, 253)";
ctx.fillRect (0, 0, 150, 150);

ctx.font = "100px song"; // serif
ctx.fillStyle  = "rgb(132,189,253)";
ctx.fillText("房", 25, 100);


var indexHtml = "<img src='"+ canvas.toDataURL()  + "' />";

fs.writeFile('../index.html',indexHtml,function(err,data){
  console.log(err,Date.now());
});
