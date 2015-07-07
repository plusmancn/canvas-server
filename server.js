'use strict';
var url = require('url');
var http = require('http');
var avatarGenerateGm = require('./lib/avatar_generate_gm.js');

var server = http.createServer(function(req,res){

  if(/\/CharacterImage\/([^\/]+)/.test(req.url)){
    var character = decodeURIComponent(RegExp.$1);
    res.writeHead(200,{"Content-Type":"application/json; charset=utf-8"});

    avatarGenerateGm.getImageUrl(character,function(err,data){

    });
  }

  res.writeHead(301,{'Location':'https://github.com/plusmancn/canvas-server'});
  res.end();
});

server.listen(8001);
console.log('server listen on 8001',Date.now());
