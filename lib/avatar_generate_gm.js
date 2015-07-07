'use strict';
var fs = require('fs');
var gm = require('gm').subClass({imageMagick:true});

/**
 * @description 生成字体图片
 */
module.exports.getImageBuffer = function(charecter,callback){
  // creating an image
  gm(150,150,"#ECF5FD")
  .fill('#84BDFD')
  .font('../fonts/LiHei Pro.ttf',100)
  .drawText(25, 110, "刘")
  .toBuffer("PNG",function(err,buffer){
    if (callback) {
      callback(err,buffer);
    }
  });
};

/**
 * @description 获取上传到七牛
 */
module.exports.getImageUrl = function(){
};

