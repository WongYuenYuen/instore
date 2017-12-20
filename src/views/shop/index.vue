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
          <div class="banner-slide" :style="{backgroundImage:`url(${slide})`}"></div>
        </swiper-slide>
        <div class="swiper-pagination banner-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="coupon-swiper">
      <h3 class="coupon-title"></h3>
      <swiper :options="couponSwiperOption">
        <swiper-slide v-for="(slide,index) in couponSwiperSlides" :key="index">
          <p class="tips">{{slide.toplinetag}}</p>
          <p class="msg">{{slide.topline}}</p>
        </swiper-slide>
      </swiper>
    </div>
    <div class="hot-car">
      <div class="title-box">
        <h3 class="title">热销车型</h3>
        <p class="more">更多</p>
      </div>
      <hotCarModule :list="hotCarList" direction="v"></hotCarModule>
    </div>
    <div class="tabs">
      <div class="tabs-swiper">
        <div class="scroll-bar" :style="{width: `${1/tabMenu.length*100}%`}"></div>
        <swiper :options="tabSwiperOption">
          <div class="swiper-pagination tabs-pagination" slot="pagination"></div>
          <swiper-slide class="tab-con">
            <consultantModule></consultantModule>
          </swiper-slide>
          <swiper-slide class="tab-con">
            <div class="coupon-list">
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-1">优惠进行中</p>
                </div>
                <h4 class="title">12月30日前购探界者可享价值三万元三重礼</h4>
                <p class="time">开始时间 07月21日10:00</p>
                <p class="time">结束时间 07月21日10:00</p>
              </div>
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-2">预告</p>
                </div>
                <h4 class="title">12月30日前购探界者可享价值三万元三重礼12月30日前购探界者可享价值三万元三重礼</h4>
                <p class="time">开始时间 07月21日10:00</p>
                <p class="time">结束时间 07月21日10:00</p>
              </div>
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-3">已结束</p>
                </div>
                <h4 class="title">12月30日前购探界者可享价值三万元三重礼</h4>
                <p class="time">开始时间 07月21日10:00</p>
                <p class="time">结束时间 07月21日10:00</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="tab-con">
            <div class="activity-list">
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-1">直播中</p>
                  <i class="live-icon"></i>
                  <i class="like-icon"></i>
                </div>
                <h4 class="title">12月30日前购探界者可享价值
                  <strong>三万元</strong>三重礼</h4>
              </div>
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-2">预告</p>
                  <i class="play-icon p-2"></i>
                  <p class="pre-time">活动时间：12月28日 16:00-18:00</p>
                  <p class="book-btn">立即预约</p>
                </div>
                <h4 class="title">12月30日前购探界者可享价值
                  <strong>三万元</strong>三重礼</h4>
              </div>
              <div class="item">
                <div class="b-img" style="backgroundImage:url(http://cw1.tw/CW/images/article/C1416896449951.jpg)">
                  <p class="status s-3">回放</p>
                  <i class="play-icon p-3"></i>
                </div>
                <h4 class="title">12月30日前购探界者可享价值
                  <strong>三万元</strong>三重礼</h4>
              </div>
            </div>
          </swiper-slide>
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
  import api from '@assets/js/api/api';
  import util from '@assets/js/common/util';
  import hotCarModule from '@components/hotCarModule';
  import consultantModule from '@components/consultantModule';
  let tabMenu = ['找顾问', '享优惠', '活动'];
  export default {
    name: 'shop',
    components: {
      consultantModule,
      hotCarModule
    },
    data() {
      return {
        requestParam: {
          shopid: util.queryParam('id'),
        },
        hotCarList: [],
        bannerSwiperOption: {
          autoplay: {
            delay: 3000
          },
          margin: 0,
          pagination: {
            el: '.banner-pagination'
          }
        },
        bannerSwiperSlides: ['http://img3.imgtn.bdimg.com/it/u=1687181189,1620972370&fm=11&gp=0.jpg', 'http://img0.selfimg.com.cn/voguenormal/2016/08/08/1470620676_QEfrnd.jpg'],
        couponSwiperOption: {
          direction: 'vertical',
          autoplay: {
            delay: 3000
          },
          margin: 20,
        },
        couponSwiperSlides: [],
        tabMenu: tabMenu,
        tabSwiperOption: {
          pagination: {
            el: '.tabs-pagination',
            clickable: true,
            renderBullet: function(index, className) {
              return '<span class="' + className + ' tab-page">' + (tabMenu[index]) + '</span>';
            }
          },
          autoHeight: true,
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
    mounted: function() {
      this.getData();
    },
    methods: {
      getData() {
        this.getHotCar();
        this.getShopInfo();
        this.getCouponSwiper();
        this.getBannerSwiper();
        this.getAnchourList();
      },
      getHotCar() {
        api.getHotCar(this.requestParam).then(data => {
          this.hotCarList = data.data.cars;
          console.log(data)
        }, err => {
          console.log(err);
        });
      },
      getCouponSwiper() {},
      getShopInfo() {},
      getAnchourList() {},
      getCouponList() {},
      getActivity() {},
      getBannerSwiper() {}
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/_mixin.scss";
  @import "./sprite.scss";
  .__shop__ {
    .shop-msg {
      position: relative;
      background: #fff;
      &:before {
        display: block;
        content: "";
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
        @extend %background_cover;
      }
      .shop-name {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: rem(18);
        @include font(34);
        color: #202021;
        text-align: center;
      }
      .grade {
        display: inline-block;
        padding: 0 rem(4);
        margin-left: rem(8);
        width: rem(60);
        background-color: #ffa200;
        background: linear-gradient(145deg, #ffa200 70%, #ff8a00 30%);
        border-radius: rem(6);
        color: #fff;
        @include font(22);
        line-height: rem(30);
        text-align: center;
      }
      .collection-btn {
        position: absolute;
        top: 0;
        right: rem(35);
        display: flex;
        align-items: center;
        padding: rem(5) rem(6);
        color: #f33131;
        @include font(22);
        line-height: rem(30);
        text-align: center;
        border-radius: rem(6);
        border: rem(2) solid #f33131;
        &:before {
          display: inline-block;
          content: "";
          margin-right: rem(4);
          @include shop_more();
        }
      }
      .address-box {
        position: relative;
        @include font(22);
        color: #79797e;
      }
      .address {
        margin: rem(23) auto 0;
        width: rem(460);
        text-align: center;
        @extend %text_overflow;
        text-align: center;
        &:before {
          position: relative;
          top: rem(4);
          margin-right: rem(2);
          display: inline-block;
          content: "";
          margin-right: rem(4);
          @include shop_address();
        }
      }
      .distance {
        position: absolute;
        top: 0;
        right: rem(35);
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
          @include font(34);
          color: #202021;
        }
        .more {
          position: relative;
          display: inline;
          float: right;
          @include font(22);
          color: #79797e;
          line-height: rem(34);
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
      .coupon-list {
        .item {
          margin: 0 rem(30);
          padding: rem(18) 0 rem(43);
          border-bottom: 1px solid #e5e5e5;
          &:last-child {
            border: none;
          }
          .b-img {
            margin-bottom: rem(30);
            width: 100%;
            height: rem(260);
            border-radius: rem(8);
            @extend %background_cover;
            overflow: hidden;
            .status {
              width: rem(124);
              line-height: rem(46);
              border-bottom-right-radius: rem(8);
              @include font(20);
              color: #fff;
              text-align: center;
            }
            .s-1 {
              background: #f32b2b;
            }
            .s-2,
            .s-3 {
              background: #0286eb;
            }
          }
          .title {
            margin-bottom: rem(13);
            max-width: 100%;
            color: #202021;
            @include font(30);
            @extend %text_overflow;
            font-weight: normal;
          }
          .time {
            margin-right: rem(24);
            display: inline;
            color: #303030;
            @include font(22);
          }
        }
      }
      .activity-list {
        .item {
          margin: 0 rem(30);
          padding: rem(18) 0 rem(43);
          border-bottom: 1px solid #e5e5e5;
          &:last-child {
            border: none;
          }
          .b-img {
            position: relative;
            margin-bottom: rem(30);
            width: 100%;
            height: rem(260);
            border-radius: rem(8);
            @extend %background_cover;
            overflow: hidden;
            &:before {
              position: absolute;
              display: block;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.3);
              content: "";
              z-index: 1;
            }
            .live-icon {
              @extend %center;
              @include shop_trailer();
              z-index: 3;
            }
            .like-icon {
              position: absolute;
              display: block;
              right: rem(24);
              bottom: rem(6);
              @include shop_likes();
              z-index: 3;
            }
            .play-icon {
              position: relative;
              display: block;
              margin: auto;
              @include shop_play();
              z-index: 3;
              &.p-2 {
                margin-top: rem(-20);
              }
              &.p-3 {
                @extend %center;
              }
            }
            .pre-time {
              position: relative;
              margin: rem(15) auto rem(26);
              color: #fff;
              @include font(22);
              text-align: center;
              z-index: 3;
            }
            .book-btn {
              position: relative;
              margin: auto;
              width: rem(140); // padding: 0 rem(20);
              line-height: rem(42);
              background: #f32b2b;
              border-radius: rem(6);
              color: #fff;
              @include font(26);
              text-align: center;
              z-index: 3;
            }
            .status {
              position: relative;
              margin-top: rem(18);
              width: rem(100);
              line-height: rem(40);
              border-radius: 0 rem(20) rem(20) 0;
              @include font(20);
              color: #fff;
              text-align: center;
              z-index: 3;
            }
            .s-1 {
              background: #f32b2b;
            }
            .s-2,
            .s-3 {
              background: #0286eb;
            }
          }
          .title {
            margin-bottom: rem(13);
            max-width: 100%;
            color: #202021;
            @include font(30);
            @extend %text_overflow;
            font-weight: normal;
            strong {
              color: #f32b2b;
            }
          }
        }
      }
    }
  }
</style>

<style lang="scss">
  @import "../../assets/sass/_mixin.scss";
  @import "./sprite.scss";
  body{
    background: #f5f5f5;
  }
  .banner-swiper {
    padding: rem(24) rem(30);
    width: rem(690);
    height: rem(260);
    background: #fff;
    .swiper-container {
      height: 100%;
    }
    .banner-slide {
      width: 100%;
      height: 100%;
      @extend %background_cover;
    }
    .swiper-pagination-bullets {
      bottom: rem(16);
    }
    .swiper-pagination-bullet {
      margin: 0 rem(5) !important;
      width: rem(10);
      height: rem(10);
      background: rgba(255, 255, 255, 0.5);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #f33131;
    }
  }
  .coupon-swiper {
    display: flex;
    align-items: center;
    padding: 0 rem(30) rem(24) rem(30);
    width: rem(690);
    background: #fff;
    .swiper-container {
      width: rem(540);
      height: rem(40);
    }
    .swiper-slide {
      display: flex;
      align-items: center;
    }
    .coupon-title {
      // width: rem(114);
      // height: rem(28);
      // background: pink;
      @include shop_t_1();
    }
    .tips {
      margin-right: rem(10);
      padding: 0 rem(4);
      color: #f33131;
      @include font(20);
      border: 1px solid #f33131;
      line-height: rem(25);
      border-radius: rem(4);
    }
    .msg {
      width: rem(430);
      color: #202021;
      @include font(26);
      @extend %text_overflow;
    }
  }
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
        @include font(30);
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

