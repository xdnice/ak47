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
app.use(bodyParser.urlencoded({ extended: false }));  
app.use(compression());


app.all('*', function(req, res, next) {
  //设置请求体,支持 post、get、jsonp
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
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
  // console.log(req.body); 
  console.log(data);
  res.end(data);
});

app.listen(8080, function () { // 监听8080端口
  console.log('Example app listening on port 8080!\n');
});