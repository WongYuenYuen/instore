%{{@root.options.extentName}}{
  {{#spritesheet}}
  background: url({{image}}) 0 0 no-repeat;
  background-size: ({{width}}rem/75) ({{height}}rem/75);
  {{/spritesheet}}
}
{{#sprites}}
@mixin {{@root.options.extentName}}{{name}} {
  @extend %{{@root.options.extentName}};
  width: rem({{width}} + 4);
  height: rem({{height}} + 4);
  background-position: (({{offset_x}} + 2) * 1rem/75) (({{offset_y}} + 2) * 1rem/75);
}
{{/sprites}}
