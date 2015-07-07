'use strict';
var CONFIG = require('./env/config.json');
var qiniu = require('qiniu');
qiniu.conf.ACCESS_KEY = CONFIG.QINIU_ACCESS_KEY;
qiniu.conf.SECRET_KEY = CONFIG.QINIU_SECRET_KEY;
// 上传凭证
var putPolicy = new qiniu.rs.PutPolicy(CONFIG.QINIU_BUCKET);
var uptoken = putPolicy.token();

/**
 * @description 上传本地文件到七牛
 */

module.exports.uploadBuffer = function(key,buffer,callback){
  qiniu.io.put(uptoken,key,buffer,null,function(err,ret){
    callback(err,ret);
  });
}

/**
 * @description 拼接URL地址
 */
module.exports.concatUrl = function(character,type){
  var host = 'http://' + CONFIG.QINIU_DOMAIN + '/';
  return host + encodeURIComponent(character) + '.' + type;
};

