#### 一、当前环境  
构建工具：是用vue－cli生成webpack打包的，配置支持多页面入口，后续可能加上gulp支持雪碧图等功能  
js：使用vue 2  
css：使用sass语法，建议每个组件的样式scoped在vue里面    
```
node -v 
6.12.2
npm -v 
5.6.0
```
#### 二、安装  
1. node安装：  
到官网直接下载包安装： https://nodejs.org/en/
2. npm升级：  
安装node后，运行```npm update```,即可更新npm


#### :wave: 备注：如果您有多个node版本，建议使用nvm来管理node的版本，保持一个项目里的node和npm版本一致
1. 安装nvm：  
```curl -L -o- [http://build.sankuai.com/nvm/install](http://build.sankuai.com/nvm/install) | bash```
2. 安装node及npm:
```
nvm install 6.12.2
npm update
```

3. clone项目到本地  
4. 在instore文件夹下，执行：```npm i``` ,将package.json里面的依赖都安装到本地,安装成功后，就可以进行开发

#### 三、运行  

##### 开发时使用的指令，执行成功后在浏览器打开该链接即可： localhost:8080
```npm run dev```

##### 准备发布到线上，进行构建打包时执行的命令
```npm run build```

##### 对打包进行分析
```npm run build --report```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).





目录结构：  
├─build        项目的webpack配置文件 <br>
├─config        项目的文件路径配置文件<br>
├─dist        打包生成<br>
│  ├─assets  <br>
│  │  ├─css  <br>
│  │  └─js  <br>
│  └─html  <br>
└─src        开发的源代码<br>
   ├─assets        静态资源存放，比如引入一些库的js和css，公用的图片<br>
   │  ├─images  <br>
   │  ├─js  <br>
   │  │  ├─common        一些公用方法函数<br>
   │  │  ├─im  <br>
   │  │  └─zepto  <br>
   │  └─sass        基础的sass方法之类<br>
   ├─components        公用组件，比如返回的导航条，结构跟views一致，一个组件一个文件夹<br>
   ├─html        html的入口文件<br>
   ├─pages        html对应的js入口文件，注意！！入口文件要和html文件名一致！！<br>
   ├─router        路由配置<br>
   └─views       作为一个路由页面层级的组件<br>
       └─shop        一个组建一个文件夹，组建样式、图片等都放在这下面<br>
           └─img<br>

