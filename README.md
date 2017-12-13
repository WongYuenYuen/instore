###### 环境：
node -v 6.12.2
npm -v 5.6.0

###### 直接安装node可以到官网直接下载包安装：
https://nodejs.org/en/
###### 安装node后，运行npm update即可更新npm

###### 如果您有多个node版本，建议使用nvm来管理node的版本，保持一个项目里的node和npm版本一致
安装nvm：
curl -L -o- [http://build.sankuai.com/nvm/install](http://build.sankuai.com/nvm/install) | bash
安装node及npm
nvm install v8.9.3

安装完node之后，clone项目到本地
在instore文件夹下，执行：npm i
将package.json里面的依赖都安装到本地
安装成功后，可以直接运行下面的Build Setup指令进行开发

# instore

> m.instore.com.cn

## Build Setup

``` bash
# 安装依赖
npm install

# 开发时使用的指令，执行成功后在浏览器打开该链接即可： localhost:8080
npm run dev

# 准备发布到线上，进行构建打包时执行的命令
npm run build

# 对打包进行分析
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


目录结构：
├─build  //项目的webpack配置文件
├─config  //项目的文件路径配置文件
├─dist  //打包生成
│  ├─assets  
│  │  ├─css  
│  │  └─js  
│  └─html  
└─src  //开发的源代码
   ├─assets  //静态资源存放，比如引入一些库的js和css，公用的图片
   │  ├─images  
   │  ├─js  
   │  │  ├─common  //一些公用方法函数
   │  │  ├─im  
   │  │  └─zepto  
   │  └─sass  //基础的sass方法之类
   ├─components  //公用组件，比如返回的导航条，结构跟views一致，一个组件一个文件夹
   ├─html  //html的入口文件
   ├─pages  //html对应的js入口文件，注意！！入口文件要和html文件名一致！！
   ├─router  //路由配置
   └─views //作为一个路由页面层级的组件
       └─shop  //一个组建一个文件夹，组建样式、图片等都放在这下面
           └─img

