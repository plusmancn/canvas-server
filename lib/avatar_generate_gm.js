'use strict';
var fs = require('fs');
var gm = require('gm').subClass({imageMagick:true});
var fileUpload = require('./file_upload');

/**
 * @description 生成字体图片
 */
module.exports.getImageBuffer = function(character,callback){
  // creating an image
  gm(150,150,"#ECF5FD")
  .fill('#84BDFD')
  .font('./fonts/LiHei Pro.ttf',100)
  .drawText(25, 110, character)
  .toBuffer("PNG",function(err,buffer){
    if (callback) {
      callback(err,buffer);
    }
  });
};


/**
 * @description 获取文件并上传到七牛
 */
module.exports.getImageUrl = function(character,callback){
  if(character.length !== 1){
    return callback(new Error('字符串长度只能为1'));
  }

  exports.getImageBuffer(character,function(err,buffer){
    if(err){
       return callback(err);
    }


    fileUpload.uploadBuffer(character + '.png',buffer,function(err,ret){

      if(err &&  err.code === 614){
        return callback(null,{
          hash:'from_cached',
          key:character + '.png',
          url:fileUpload.concatUrl(character,'png')
        });
      }

      if(!err){
         ret.url = fileUpload.concatUrl(character,'png');
      }

      callback(err,ret);
    });

   });
};
