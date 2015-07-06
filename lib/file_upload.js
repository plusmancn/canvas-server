'use strict';
var CONFIG = require('./config');
var qiniu = require('qiniu');
qiniu.conf.ACCESS_KEY = CONFIG.QINIU_ACCESS_KEY;
qiniu.conf.SECRET_KEY = CONFIG.QINIU_SECRET_KEY;
// 上传凭证
var putPolicy = new qiniu.rs.PutPolicy(CONFIG.QINIU_BUCKET);
var uptoken = putPolicy.token();



qiniu.io.put(uptoken,'11.png','hah',null,function(err,ret){
  console.log(err,ret);
});