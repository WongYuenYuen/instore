# 环境：
node -v 8.9.3
npm -v 5.5.1

# 直接安装node可以到官网直接下载包安装：
https://nodejs.org/en/

# 如果您有多个node版本，建议使用nvm来管理node的版本，保持一个项目里的node和npm版本一致
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
├─build
├─config
├─dist
│  ├─assets
│  │  ├─css
│  │  └─js
│  └─html
├─src
│  ├─assets
│  │  ├─images
│  │  ├─js
│  │  │  ├─common
│  │  │  ├─im
│  │  │  │  └─.svn
│  │  │  │      └─text-base
│  │  │  └─zepto
│  │  │      └─.svn
│  │  │          └─text-base
│  │  └─sass
│  ├─components
│  ├─html
│  ├─pages
│  ├─router
│  └─views
│      └─shop
│          └─img
└─static
