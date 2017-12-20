<template>
  <div :class="['__hot-car-list__', direction == 'h' ? 'd-h' : '']">
    <div class="item" v-for="item in list">
      <div class="img" :style="{backgroundImage:`url(${item.picurl })`}"></div>
      <p class="name">{{item.name}}</p>
      <p class="money">￥{{item.minprice}} 起</p>
      <p class="coupon">{{item.promotion}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list', 'direction']
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/_mixin.scss';
  .__hot-car-list__ {
    display: flex;
    overflow: scroll;
    &.d-h {
      display: block;
      .item {
        display: inline-block;
        width: rem(330);
        margin-right: rem(14);
        margin-bottom: rem(14);
        
        &:nth-child(2n){
          margin-right: 0;
        }
        
      }
    }
    .item {
      width: rem(300);
      height: rem(370);
      border: 1px solid #eee;
      margin-right: rem(17);
      &:last-child {
        margin-right: 0;
      }
      .img {
        width: 100%;
        height: rem(230);
        @extend %background_cover;
      }
      .name,
      .money,
      .coupon {
        margin-left: rem(22);
      }
      .name {
        max-width: rem(260);
        margin-bottom: rem(10);
        @extend %text_overflow;
        @include font(30);
        color: #202021;
      }
      .money {
        margin-bottom: rem(8);
        @include font(26);
        color: #79797e;
      }
      .coupon {
        width: rem(260);
        @include font(22);
        @extend %text_overflow;
        color: #79797e;
        @include red_bg('促');
      }
    }
  }
</style>
