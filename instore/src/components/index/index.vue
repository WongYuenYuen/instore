<template>
  <div class="__index__">
    <div class="app-topbar">
      <div class="sel-city">{{cityName}}</div>
      <div class="search-box">
        <input type="search" placeholder="输入品牌/4S店" class="txt-search" />
      </div>
      <div class="user">
        <i class="user-icon"></i>
      </div>
    </div>
    <div class="banner-box">
      <swiper :options="bannerSwiperOption">
        <swiper-slide v-for="(slide,index) in bannerSwiperSlides" :key="index">
          <div class="banner-slide" :style="{backgroundImage:`url(${slide.url})`}"></div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="brand-box">
      <div class="brand-list">
        <div class="brand-item" v-for="item in brandList">
          <div class="brand-logo" :style="{backgroundImage:`url(${item.logo})`}"></div>
          <p class="brand-name">{{item.name}}</p>
        </div>
      </div>
      <p class="more-btn">查看更多品牌</p>
    </div>
    <div class="shops-list">
      <h3 class="shop-title">
        <i class="logo"></i>人气4S店
      </h3>
      <div class="shop-item" v-for="item in hotList">
        <div class="shop-img" :style="{backgroundImage:`url(${item.url})`} "></div>
        <p class="name "> {{item.name}}</p>
        <p class="address ">地址：{{item.address}}</p>
      </div>
    </div>
    <div class="copy-right ">
      Copyright &copy; 电声营销 版权所有
    </div>
    <!-- <div class="preloader-indicator-modal "><span class="preloader preloader-white "></span></div> -->
  </div>
</template>
<script>
import api from './api.js';
export default {
  name: 'Index',
  data() {
    return {
      cityName: "广州",
      cityid: "guangzhou",
      bannerSwiperOption: {
        autoplay: {
        delay: 3000
        },
        margin: 0,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      bannerSwiperSlides: [],
      brandList: [],
      hotList: [],
    }
  },
  mounted: function(){
    this.getBrandList();
    this.getHotList();
    this.getBannerList();
  },
  methods:{
    getBrandList(){
      let param = {
        cityid: this.cityid
      };
      api.getBrandList(param).then(data=>{
        this.brandList = data.data.list;
      }, err=>{
      });
    },

    getHotList(){
      let param = {
        cityid: this.cityid
      };
      api.getHotList(param).then(data=>{
        this.hotList = data.data.list;
      }, err=>{
      });
    },
    getBannerList(){
       let param = {
        cityid: this.cityid
      };
      api.getBannerList(param).then(data=>{
        this.bannerSwiperSlides = data.data.list;
      }, err=>{
      });
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../../assets/sass/_mixin.scss';
.__index__ {
  .app-topbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .sel-city {
      color: #303030;
      @include dprFontFix(30);
      &:after {
        position: relative;
        top: rem(-6);
        display: inline-block;
        content: '';
        margin-left: rem(4);
        width: rem(16);
        height: rem(10);
        background: url(img/arrow-down.png) no-repeat center;
        background-size: 100%;
      }
    }
    .search-box {
      position: relative;
      &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: rem(6);
        margin: auto;
        display: inline-block;
        content: '';
        width: rem(31);
        height: rem(33);
        background: url(img/search.png) no-repeat center;
        background-size: 100%;
      }

      .txt-search {
        display: inline-block;
        width: rem(560);
        background: #ececec;
        border: none;
        line-height: rem(52);
        border-radius: rem(10);
        text-indent: rem(40);
        @include dprFontFix(30);
        color: #303030;
      }
    }
    .user {
      .user-icon {
        display: block;
        width: rem(48);
        height: rem(48);
        background: url(img/center.png) no-repeat center;
        background-size: 100%;
      }
    }
  }
  .banner-box {
    width: 100%;
    .slide-wrapper {
      width: 100%;
      margin: 0;
    }
    .banner-slide {
      width: 100%;
      height: rem(300);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  .brand-box {
    margin: rem(20) 0;
    .brand-list {
      display: flex;
      justify-content: space-around;
      .brand-item {
        .brand-logo {
          width: rem(90);
          height: rem(90);
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center;
        }
        .brand-name {
          margin: 0;
          @include dprFontFix(24);
          line-height: rem(30);
          color: #303030;
          text-align: center;
        }
      }
    }
    .more-btn {
      margin: rem(20) auto;
      text-align: center;
    }
  }
  .shops-list {
    .shop-title {
      @include dprFontFix(38);
      line-height: rem(44);
      color: #303030;
      font-weight: normal;

      .logo {
        display: inline-block;
        width: rem(52);
        height: rem(52);
        background: url(img/fire.png) no-repeat center;
        background-size: 100%;
      }
    }
    .shop-item {
      .shop-img {
        width: 100%;
        height: rem(300);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .name {
        margin: 0;
        @include dprFontFix(32);
        line-height: rem(40);
        color: #303030;
      }
      .address {
        margin: 0;
        @include dprFontFix(26);
        line-height: rem(40);
        color: #757575;
      }
    }
  }
}

</style>
