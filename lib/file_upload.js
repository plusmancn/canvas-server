'use strict';
var CONFIG = require('./env/config.json');
var qiniu = require('qiniu');
qiniu.conf.ACCESS_KEY = CONFIG.QINIU_ACCESS_KEY;
qiniu.conf.SECRET_KEY = CONFIG.QINIU_SECRET_KEY;
// 上传凭证
var putPolicy = new qiniu.rs.PutPolicy(CONFIG.QINIU_BUCKET);
var uptoken = putPolicy.token();
var upTime =  Date.now();

/**
 * @description 刷新token值防止过期,token默认1小时过期
 */
module.exports.refreshToken = function(){
  if(Date.now() - upTime > 3540e3){
    upTime  = Date.now();
    uptoken = putPolicy.token();
  }
};

/**
 * @description 上传本地文件到七牛
 */
module.exports.uploadBuffer = function(key,buffer,callback){
  // 刷新token操作
  exports.refreshToken();

  qiniu.io.put(uptoken,key,buffer,null,function(err,ret){
    callback(err,ret);
  });
};

/**
 * @description 拼接URL地址
 */
module.exports.concatUrl = function(character,type){
  var host = 'http://' + CONFIG.QINIU_DOMAIN + '/';
  return host + encodeURIComponent(character) + '.' + type;
};


