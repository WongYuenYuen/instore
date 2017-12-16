<template>
  <div class="__consultant__">
    <div class="list">
      <div class="item">
        <div class="avatar">
          <div class="real-avatar"></div>
        </div>
        <div class="msg">
          <p class="name">许志强强强<span class="status">直播中</span></p>
          <p class="starts"><span class="txt">评价</span> <i class="start"></i></p>
          <p class="nums">服务过123位客户</p>
        </div>
        <div class="contact">
          <div class="online">
            <i class="c-icon"></i>
            <p class="info">聊一聊</p>
          </div>
          <div class="offline">
            <i class="c-icon"></i>
            <p class="info">留言</p>
          </div>
        </div>
        <div class="live">
          <div class="online">
            <i class="v-icon"></i>
            <p class="info">去看看</p>
          </div>
          <div class="offline">
            <i class="v-icon"></i>
            <p class="info">提醒上线</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import '../../assets/sass/_mixin.scss';
  .__consultant__ {
    .list {
      .item {
        display: flex;
        align-items: center;
        padding: rem(36) rem(40) rem(36) rem(30);
        .avatar {
          margin-right: rem(14);
          width: rem(100);
          height: rem(100);
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
          background: url(https://ebcnews.s3.amazonaws.com/images/2017/10/16/15081174458687MFnz.jpg) no-repeat center;
          background-size: cover;
          .real-avatar {
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }
        .msg {
          .name {
            color: #303030;
            display: flex;
            align-items: center;
            @include dprFontFix(30);
            .status {
              margin-left: rem(10);
              padding: 0 rem(2);
              color: #757575;
              @include dprFontFix(16);
              border: 1px solid #757575;
              line-height: rem(22);
            }
          }
          .starts {
            margin: rem(18) 0;
            display: flex;
            align-items: center;
            text-align: left;
            .txt {
              margin-right: rem(12);
              color: #79797e;
              @include dprFontFix(20);
            }
            .start {
              margin: 0 rem(2);
              display: block;
              width: rem(22);
              height: rem(20);
              background: red;
            }
          }
          .nums {
            color: #79797e;
            @include dprFontFix(20);
          }
        }
        .contact {
          .c-icon {}
          .online {
            .info {}
          }
          .offline {
            .info {}
          }
        }
        .live {
          .v-icon {}
          .online {
            .info {}
          }
          .offline {
            .info {}
          }
        }
      }
    }
  }
</style>
