<template>
  <div class="__shop__">
    <div class="shop-msg">
      <div class="logo"></div>
      <h3 class="shop-name">广州美琪店
        <strong class="grade">4S店</strong>
        <p href="" class="collection-btn">收藏</p>
      </h3>
      <div class="address-box">
        <p class="address">广东省广州市海珠区广州大道南1280号道南道南1280号道道南1280号道道南1280号道道南1280号道</p>
        <p class="distance">5.6km</p>
      </div>
    </div>
    <div class="banner-swiper">
      <swiper :options="bannerSwiperOption">
        <swiper-slide v-for="(slide,index) in bannerSwiperSlides" :key="index">
          <div class="banner-slide" :style="{backgroundImage:`url(${slide.url})`}"></div>
        </swiper-slide>
        <div class="swiper-pagination banner-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="coupon-swiper"></div>
    <div class="hot-car">
      <div class="title-box">
        <h3 class="title">热销车型</h3>
        <p class="more">更多</p>
      </div>
      <div class="list">
        <div class="item">
          <div class="img"></div>
          <p class="name">探界者</p>
          <p class="money">￥179000 起</p>
          <p class="coupon">购探界者全系可享购探界者全系可享购探界者全系可享</p>
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabs-swiper">
        <div class="scroll-bar" :style="{width: `${1/tabMenu.length*100}%`}"></div>
        <swiper :options="tabSwiperOption">
          <div class="swiper-pagination tabs-pagination" slot="pagination"></div>
          <swiper-slide class="tab-con">
            <consultantModule></consultantModule>
          </swiper-slide>
          <swiper-slide class="tab-con">I'm Slide 1</swiper-slide>
          <swiper-slide class="tab-con">I'm Slide 1</swiper-slide>
        </swiper>
      </div>
      <div class="tab-menu">
        <p class="menu-item active"></p>
        <p class="menu-item"></p>
        <p class="menu-item"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import api from './api.js';
  import consultantModule from '@components/consultantModule';
  let tabMenu = ['找顾问', '享优惠', '活动'];
  export default {
    name: 'shop',
    components: {
      consultantModule
    },
    data() {
      return {
        bannerSwiperOption: {
          autoplay: {
            delay: 3000
          },
          margin: 0,
          pagination: {
            el: '.banner-pagination'
          }
        },
        bannerSwiperSlides: [],
        tabMenu: tabMenu,
        tabSwiperOption: {
          pagination: {
            el: '.tabs-pagination',
            clickable: true,
            renderBullet: function(index, className) {
              return '<span class="' + className + ' tab-page">' + (tabMenu[index]) + '</span>';
            }
          },
          on: {
            slideChangeTransitionStart: function() {
              console.log(this)
              let $el = $(`.tabs-swiper .scroll-bar`);
              let index = this.activeIndex;
              let aLeft = index * $el.width();
              $el.animate({
                left: `${aLeft}px`
              }, 200);
            }
          }
        }
      }
    },
    mounted: function() {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/_mixin.scss';
  .__shop__ {
    .shop-msg {
      position: relative;
      &:before {
        display: block;
        content: '';
        width: 100%;
        height: rem(86);
        background: #1b1b1f;
        border-bottom-left-radius: 50%;
        border-bottom-right-radius: 50%;
      }
      .logo {
        margin: rem(-70) auto 0;
        width: rem(120);
        height: rem(120);
        background: red;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .shop-name {
        position: relative;
        margin-top: rem(18);
        @include dprFontFix(34);
        color: #202021;
        text-align: center;
      }
      .grade {
        display: inline-block;
        padding: 0 rem(4);
        width: rem(60);
        background-color: #ffa200;
        border-radius: rem(6);
        color: #fff;
        @include dprFontFix(22);
        line-height: rem(30);
        text-align: center;
      }
      .collection-btn {
        position: absolute;
        top: 0;
        right: rem(35);
        display: inline-block;
        padding: rem(5) rem(6);
        color: #f33131;
        @include dprFontFix(22);
        line-height: rem(30);
        text-align: center;
        border-radius: rem(6);
        border: rem(2) solid #f33131;
        &:before {
          display: inline-block;
          content: '';
          margin-right: rem(4);
          width: rem(18);
          height: rem(18);
          background: black;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }
      .address-box {
        position: relative;
        @include dprFontFix(22);
        color: #79797e;
      }
      .address {
        margin: rem(23) auto 0;
        width: rem(460);
        text-align: center;
        @extend %text_overflow;
        text-align: center;
      }
      .distance {
        position: absolute;
        top: 0;
        right: rem(35);
      }
    }
    .banner-swiper {
      margin: rem(24) auto;
      width: rem(690);
      height: rem(260);
      background: red;
      .banner-slide {
        width: 100%;
        height: 100%;
      }
    }
    .hot-car {
      padding: rem(50) rem(35);
      background: #fff;
      margin: rem(20) 0;
      .title-box {
        position: relative;
        margin: 0 0 rem(20);
        .title {
          display: inline;
          @include dprFontFix(34);
          color: #202021;
        }
        .more {
          position: relative;
          display: inline;
          float: right;
          @include dprFontFix(22);
          color: #79797e;
          line-height: rem(34);
        }
      }
      .list {
        .item {
          width: rem(300);
          height: rem(370);
          border: 1px solid #eee;
          .img {
            width: 100%;
            height: rem(230);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background: red;
          }
          .name,
          .money,
          .coupon {
            margin-left: rem(22);
          }
          .name {
            margin-bottom: rem(10);
            @include dprFontFix(30);
            color: #202021;
          }
          .money {
            margin-bottom: rem(8);
            @include dprFontFix(26);
            color: #79797e;
          }
          .coupon {
            width: rem(260);
            @include dprFontFix(22);
            @extend %text_overflow;
            color: #79797e;
            &:before {
              padding: rem(2);
              margin-right: rem(8);
              content: '促';
              background: #f32b2b;
              @include dprFontFix(18);
              color: #fff;
            }
          }
        }
      }
    }
    .tabs {
      background: #fff;
      .scroll-bar {
        position: relative;
        top: rem(102);
        width: rem(30);
        height: rem(33);
        width: 50%;
        height: 1px;
        background: #0286eb;
      }
    }
  }
</style>

<style lang="scss">
  @import '../../assets/sass/_mixin.scss';
  .tabs-swiper {
    .swiper-container {
      .swiper-wrapper {
        margin-top: rem(104);
      }
      .swiper-pagination {
        position: absolute;
        top: 0;
        display: flex;
        justify-content: space-around;
        top: 0;
        bottom: auto !important;
      }
      .tab-page {
        margin: 0;
        width: 100% !important;
        height: auto;
        background: transparent;
        display: block;
        border-radius: 100%;
        @include dprFontFix(30);
        line-height: rem(102);
        color: #202021;
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        // color: #ffdeac;
        border-radius: 0;
      }
    }
  }
</style>

