var Canvas = require('canvas')
  , canvas = new Canvas(200, 200)
  , ctx = canvas.getContext('2d');


ctx.fillStyle = "rgb(236, 245, 253)";
ctx.fillRect (0, 0, 150, 150);

ctx.font = "100px serif";
ctx.fillStyle  = "rgb(132,189,253)";
ctx.fillText("黎", 25, 100);

canvas.toBuffer()



/**
 * 
 */
