# 启动步骤
    1. 先把这个项目 git clone https://github.com/xuya227939/m4a1 下来，启动方式项目README有介绍。
    
    2. git clone https://github.com/xuya227939/ak47.git
    
    3. cd ak47
    
    4. npm i

    5. npm start

# 发布步骤
    npm run build  // 打包静态文件
    
<pre># 目录结构描述
├── public                      // 公共目录
├── src                         // 入口
│   ├── action                  // action
│   ├── components              // 组件
│   ├── pages                   // 页面
│   ├── reducers                // reducers
│   ├── sagas                   // sagas
│   ├── store                   // store
│   ├── servers                 // 接口
│   ├── index.js                // index.js
│   ├── requrest.js             // fetch
│   ├── router.js               // 路由
├── webpack.dev.js              // 测试环境
├── webpack.prod.js             // 生产环境
</pre>
