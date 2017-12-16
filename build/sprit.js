const path = require('path');
const SpritesmithPlugin = require('webpack-spritesmith');
const glob = require('glob');

function spriteTpl(data) {
  let items = data.items;
  let base = data.spritesheet;
  let str2 = ``;
  let str1 = `%base_${base.image}{
    background: url(./img/sprite.png) 0 0 no-repeat;
    background-size: (${base.width}rem/75) (${base.height}rem/75);
  }`
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    str2 += `@mixin ${base.image}_${item.name} {
  @extend %base_${base.image};
  width: rem(${item.width} + 4);
  height: rem(${item.height} + 4);
  background-position: ((${item.offset_x} + 2) * 1rem/75) ((${item.offset_y} + 2) * 1rem/75);
}`
  }
  return str1 + '\n' + str2;
}

function getSprites(globPath) {
  var entries = [];
  glob.sync(globPath).forEach(function (entry) {
    entries.push(entry);
  });
  return entries;
}

exports.spriteConfig = function (webpackConfig) {
  var sprites = getSprites('./src/views/**/sprite');
  for (let i = 0; i < sprites.length; i++) {
    let name = sprites[i].split('views/')[1].split('/')[0];
    let disImgPath = sprites[i].replace('/sprite', '');
    let disScssPath = sprites[i].replace('/img/sprite', '');
    let conf = {
      src: {
        cwd: path.resolve(sprites[i]),
        glob: '*.png'
      },
      target: {
        image: path.resolve(`${disImgPath}/sprite.png`),
        css: [[path.resolve(`${disScssPath}/sprite.scss`), {
          format: 'function_based_template'
        }]]
      },
      spritesmithOptions: {
        padding: 4,
      },
      apiOptions: {
        cssImageRef: `${name}`
      },
      customTemplates: {
        'function_based_template': spriteTpl
      }
    }
    webpackConfig.plugins.push(new SpritesmithPlugin(conf));
  }
  return webpackConfig;
}
