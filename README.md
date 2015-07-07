# canvas-server
> 字符头像生成，背后不是 node-canvas 驱动，canvas很美好，可我没法解决中文问题，最后是 [gm](https://github.com/aheckmann/gm) 在驱动图形处理。

## Usage
**如何运行？**
```javascript
node ./server.js
```

**API开放接口**
```javascript
// GET 请求方式
http://character-image.plusman.cn:8001/CharacterImage/:character

// 参数说明
:character 单字符，传参数时对参数做一层，encodeURIComponent 编码。

// 示例
http://character-image.plusman.cn:8001/CharacterImage/%E4%B8%9C

// return JSON
{
  "code": 0,
  "message": "success",
  "data": {
    "hash": "from_cached",
    "key": "东.png",
    "url": "http://7xk6mk.com1.z0.glb.clouddn.com/%E4%B8%9C.png"
  }
}

```

**效果图**  
![会](http://7xk6mk.com1.z0.glb.clouddn.com/会.png)
![友](http://7xk6mk.com1.z0.glb.clouddn.com/友.png)
![行](http://7xk6mk.com1.z0.glb.clouddn.com/行.png)
![G](http://7xk6mk.com1.z0.glb.clouddn.com/G.png)


## License

(The MIT License)

Copyright (c) 2015 [plusmancn](plusmancn@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
