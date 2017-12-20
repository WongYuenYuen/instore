<template>
  <div class="__car__">
    <!-- 车辆基本信息 start-->
    <div class="hd">
      <h1 class="car-name">探界者</h1>
      <p class="car-1">实力中级SUV探界者</p>
      <p class="car-2">官方指导价<strong class="money">￥174900~￥250900</strong></p>
      <p class="msg-1">12月30日前购探界者全系可享价值三万元礼遇！！！</p>
      <p class="msg-2">12月30日前三万元礼遇！！！</p>
    </div>
    <!-- 车辆基本信息 end-->
    <!-- 360 720视图，引入组件 start-->
    <div class="car-360">
      <carViewer></carViewer>
    </div>
    <!--  360 720视图，引入组件 end-->
    <!-- 车辆参数 start-->
    <div class="car-info">
      <p class="car-name">535T领界版</p>
      <div class="change-car">
        <p class="change-btn">更换型号</p>
        <div class="car-list"></div>
      </div>
      <div class="param-list act">
        <p class="title">基本参数</p>
        <div class="param-item">
          <p class="p-l">长度(mm)</p>
          <p class="num">4718</p>
        </div>
        <div class="param-item">
          <p class="p-l">长度(mm)</p>
          <p class="num">4718</p>
        </div>
      </div>
      <div class="param-list">
        <p class="title">基本参数</p>
        <div class="param-item">
          <p class="p-l">长度(mm)</p>
          <p class="num">4718</p>
        </div>
        <div class="param-item">
          <p class="p-l">长度(mm)</p>
          <p class="num">4718</p>
        </div>
      </div>
      <p class="more-consult">更多参数配置请咨询销售</p>
    </div>
    <!-- 车辆参数 end-->
    <!-- 优惠信息 start-->
    <div class="coupon">
      <p class="m-title">享优惠</p>
      <div class="coupon-img"></div>
      <p class="p-1">12月30日前购探界者可享价值三万元三重礼</p>
      <p class="time">开始时间 07月21日10:00</p>
      <p class="time">开始时间 07月21日10:00</p>
      <p class="p-2">一重礼：万元购置税补贴</p>
      <p class="p-2">二重礼：万元金融补贴（12万24期0利率或者8万36期二重礼：万元金融补贴（12万24期0利率或者8万36期......</p>
      <p class="more-btn">查看更多</p>
      <div class="coupon-list">
        <div class="item">
          <div class="i-l">
            <p class="title">
              <span class="t-1">￥</span>
              <strong>1000</strong>现金券</p>
            <p class="msg">(仅限雪佛兰广州美琪店使用，可同其他优惠同时使用)</p>
            <p class="msg">(仅限雪佛兰广州美琪店使用，可同其他优惠同时使用)</p>
          </div>
          <div class="i-r">立即领取</div>
        </div>
      </div>
    </div>
    <!-- 优惠信息 end-->
    <!-- 政策 start-->
    <div class="policy">
      <p class="m-title">金融政策</p>
      <p class="name">星速贷金融专案</p>
      <ul class="info">
        <li class="info-item">首付20%起，还款期限最长36期，最低可享0利率优惠</li>
        <li class="info-item">贷款16万，享18期0利率/贷款12万，享24期0利率</li>
        <li class="info-item">申请人有最近6个月（含）以上良好信用记录或本地居 住、本地有工作，则无需房产，无需担保，无需收入类 证明材料
        </li>
        <li class="info-item">该方案适用于预装安吉星的车型</li>
      </ul>
    </div>
    <!-- 政策 end-->
    <!-- 热销车辆，引入组件 start-->
    <div class="hot-car">
      <div class="hot-hd">
        <h3 class="m-title">热销车型</h3>
        <p class="more">更多</p>
      </div>
      <hotCarModule :list="hotCarList" direction="h"></hotCarModule>
    </div>
    <!-- 热销车辆，引入组件 end-->
    <!-- 顾问，引入组件 start-->
    <div class="consult">
      <h3 class="m-title">专业销售顾问</h3>
      <consultantModule></consultantModule>
    </div>
    <!-- 顾问，引入组件 end-->

  </div>
</template>

<script>
  import consultantModule from '@components/consultantModule';
  import hotCarModule from '@components/hotCarModule';
  import carViewer from '@components/car720';
  
  export default {
    name: 'car',
    components: {
      consultantModule,
      hotCarModule,
      carViewer
    },
    data() {
      return {
        'hotCarList': [{
            "picurl": "http://pv.instore.com.cn:8088/live/userfiles/1/images/car/login/2017/11/%E5%A4%96%E8%A7%821(2).jpg",
            "minprice": "100000",
            "maxprice": "125000",
            "name": "探界者",
            "id": "1",
            "promotion": "圣诞优惠进行中"
          },
          {
            "picurl": "http://pv.instore.com.cn:8088/live/userfiles/1/images/car/login/2017/10/%E5%A4%96%E8%A7%821(4).png",
            "minprice": "100000",
            "maxprice": "115000",
            "name": "科鲁兹",
            "id": "2",
            "promotion": "圣诞优惠进行中"
          },
          {
            "picurl": "http://pv.instore.com.cn:8088/live/userfiles/1/images/car/login/2017/10/%E5%A4%96%E8%A7%821(5).png",
            "minprice": "120000",
            "maxprice": "150000",
            "name": "迈锐宝XL",
            "id": "3",
            "promotion": "双蛋优惠倒计时"
          }
        ]
      }
    },
    mounted: function() {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/_mixin.scss';
  @import './sprite.scss';
  %bottom_line {
    border-bottom: 1px solid #e5e5e5;
  }
  .__car__ {
    margin: 0 rem(30);
    .m-title {
      margin-top: rem(63);
      color: #111116; // line-height: rem(88);
      @include font(40);
      font-weight: bold;
    }
    .hd {
      @extend %bottom_line;
      .car-name {
        margin-bottom: rem(18);
        color: #202021;
        @include font(68);
      }
      .car-1 {
        margin-bottom: rem(44);
        color: #79797e;
        @include font(40);
      }
      .car-2 {
        margin-bottom: rem(20);
        color: #79797e;
        @include font(26);
      }
      .money {
        @include font(34);
        color: #202021;
      }
      .money-1,
      .money-2 {
        @include font(22);
        color: #202021;
      }
      .msg-1 {
        margin-bottom: rem(20);
        @include red_bg('促');
      }
      .msg-2 {
        @include red_bg('惠');
        margin-bottom: rem(27);
      }
    }
    .car-info {
      .car-name {
        margin-bottom: rem(30);
        display: inline-block;
        color: #202021;
        font-weight: bold;
        line-height: rem(58);
        @include font(34);
      }
      .change-car {
        position: relative;
        float: right;
        .change-btn {
          display: flex;
          justify-content: center;
          align-items: center; // padding: 0 rem(20);
          width: rem(160);
          color: #202021;
          @include font(22);
          line-height: rem(58);
          background: #cdcdd5;
          border-radius: rem(6);
          &:after {
            display: block;
            content: '';
            margin-left: rem(4);
            @include car_more();
          }
        }
        .car-list {}
      }
      .param-list {
        &.act {
          .title {
            color: #fff;
            background: #202021;
            &:after {
              display: block;
              content: '';
              @include car_param_act();
            }
          }
        }
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 rem(20);
          color: #202021;
          @include font(30);
          background: #cdcdd5;
          line-height: rem(80);
          &:after {
            display: block;
            content: '';
            @include car_param_nor();
          }
        }
        .param-item {
          display: flex;
          padding: 0 rem(20);
          justify-content: space-between;
          &:nth-child(2n+1) {
            background: #f5f5f5;
          }
          .p-l,
          .num {
            color: #79797e;
            line-height: rem(80);
            @include font(26);
          }
        }
      }
      .more-consult {
        margin-top: rem(56);
        width: 100%;
        color: #f32b2b;
        line-height: rem(88);
        @include font(30);
        text-align: center;
        border-radius: rem(8);
        border: solid 1px #f32b2b;
      }
    }
    .coupon {
      .coupon-img {
        margin-top: rem(28);
        width: 100%;
        height: rem(260);
        border-radius: rem(8);
        @extend %background_cover;
        background: red;
      }
      .p-1 {
        margin: rem(24) 0 rem(22);
        color: #202021;
        @include font(34);
        line-height: rem(36);
      }
      .time {
        margin-bottom: rem(12);
        color: #303030;
        @include font(22);
      }
    }
    .p-2 {
      margin: rem(10) 0 rem(20);
      width: 100%;
      color: #79797e;
      @include font(26);
      font-weight: bold;
      @extend %text_overflow;
    }
    .more-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: rem(50);
      width: 100%;
      color: #202021;
      line-height: rem(88);
      @include font(30);
      text-align: center;
      border-radius: rem(8);
      border: solid 1px #cdcdd5;
      &:after {
        display: block;
        content: '';
        margin-left: rem(4);
        @include car_more();
      }
    }
    .coupon-list {
      margin-top: rem(40);
      @extend %bottom_line;
      .item {
        margin-bottom: rem(20);
        display: flex;
        color: #fff;
        .i-l {
          padding: rem(24) rem(10) rem(24) rem(30);
          background: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) rem(4), #f32b2b rem(4));
          background-size: rem(12) rem(8);
          background-position: rem(-5) rem(10);
          position: relative;
          overflow: hidden;
          &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: rem(5);
            right: rem(5);
            z-index: -1;
            background: #f32b2b;
          }
          .title {
            @include font(50);
            .t-1 {
              @include font(30);
            }
            strong {
              font-weight: bolder; // @include font(18);
            }
          }
          .msg {
            @include font(18);
          }
        }
        .i-r {
          width: rem(214);
          line-height: rem(158);
          font-weight: bold;
          @include font(30);
          color: #f32b2b;
          background-color: #f5f5f5;
          border: solid 1px #f32b2b;
          text-align: center;
        }
      }
    }
  }
  .policy {
    .m-title {
      padding-bottom: rem(12);
      @extend %bottom_line;
    }
    .name {
      margin: rem(37) 0 rem(20);
      color: #202021;
      @include font(34);
      line-height: rem(36);
    }
    .info {
      padding: rem(28) rem(30) rem(44) rem(38);
      background-color: #f5f5f5;
    }
    .info-item {
      color: #79797e;
      @include font(26);
      line-height: rem(50);
    }
  }
  .hot-car {
    .hot-hd {
      margin-top: rem(60);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .m-title {
      margin-top: 0;
    }
    .more {
      color: #79797e;
      @include font(22);
    }
  }
</style>
