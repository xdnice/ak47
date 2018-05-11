const express = require('express');  //引入express框架
const compression = require('compression'); //开启gzip压缩
// const webpack = require('webpack');
const bodyParser = require("body-parser");  //对req.body 正文解析
const mysql      = require('mysql');
// const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
// const config = require('./webpack.dev.js');
// const compiler = webpack(config);

// const data = { "name": "Test", "age": "19" };
const data = "1";
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());
/*app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});*/


app.all('*', function(req, res, next) {
  //设置请求体,支持 post、get、jsonp
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf8");
  // res.header("Content-Type", "text/plain;charset=utf8");
  next();
});
//get请求
app.get('/', function(req, res) {
  console.log('get..........');
  console.log(req.query);
  if (req.query && req.query.callback) {  
    var str = req.query.callback + "(" + JSON.stringify(data) + ")"; //jsonp    
    console.log('jsonp: '+str);  
    res.end(str);  
  } else {
    console.log('json: '+JSON.stringify(data));  
    res.end(JSON.stringify(data));  
  }
});
//post请求
app.post('/user', function(req, res) {
  const count = req.body.count;
  let listData = [];
  for (let i = 0; i < count; i++) {
    listData.push({
      src: '',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: `Title Jiang ${i}`,
      description:'Rise n’ shine and don’t forget to smile',
      star: i * 2,
      like: i * 3
    });
  }
  let data = {};
  data.listData = listData;
  data.count = count;
  res.end(JSON.stringify(data));
});

app.listen(8080, function () { // 监听8080端口
  console.log('Example app listening on port 8080!\n');
});