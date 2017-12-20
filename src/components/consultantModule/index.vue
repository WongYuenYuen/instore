<!-- 顾问 -->

<template>
  <div class="__consultant__">
    <div class="list">
      <div class="item">
        <div class="avatar">
          <div class="real-avatar" style="backgroundImage:url(https://ebcnews.s3.amazonaws.com/images/2017/10/16/15081174458687MFnz.jpg)"></div>
        </div>
        <div class="msg">
          <div class="name-box">
            <p class="name">许志强强强许志强强强许志强强强
            </p>
            <span class="status">直播中</span>
          </div>
          <p class="starts">
            <span class="txt">评价</span>
            <i class="start act"></i>
            <i class="start act"></i>
            <i class="start act"></i>
            <i class="start"></i>
            <i class="start"></i>
          </p>
          <p class="nums">服务过123位客户</p>
        </div>
        <div class="r-box">
          <!-- <div class="online">
                <div class="contact">
                  <i class="c-icon"></i>
                  <p class="info">聊一聊</p>
                </div>
                <div class="live">
                  <i class="v-icon"></i>
                  <p class="info">去看看</p>
                </div>
              </div> -->
          <div class="offline">
            <div class="contact">
              <i class="c-icon"></i>
              <p class="info">留言</p>
            </div>
            <div class="live">
              <i class="v-icon"></i>
              <p class="info">提醒上线</p>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="avatar">
          <div class="real-avatar" style="backgroundImage:url(https://ebcnews.s3.amazonaws.com/images/2017/10/16/15081174458687MFnz.jpg)"></div>
        </div>
        <div class="msg">
          <div class="name-box">
            <p class="name">许志强强强许志强强强许志强强强
            </p>
            <span class="status">直播中</span>
          </div>
          <p class="starts">
            <span class="txt">评价</span>
            <i class="start act"></i>
            <i class="start"></i>
            <i class="start"></i>
            <i class="start"></i>
            <i class="start"></i>
          </p>
          <p class="nums">服务过123位客户</p>
        </div>
        <div class="r-box">
          <div class="online">
            <div class="contact">
              <i class="c-icon"></i>
              <p class="info">聊一聊</p>
            </div>
            <div class="live">
              <i class="v-icon"></i>
              <p class="info">去看看</p>
            </div>
          </div>
          <!-- <div class="offline">
                <div class="contact">
                  <i class="c-icon"></i>
                  <p class="info">留言</p>
                </div>
                <div class="live">
                  <i class="v-icon"></i>
                  <p class="info">提醒上线</p>
                </div>
              </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/_mixin.scss";
  @import "./sprite.scss";
  .__consultant__ {
    .list {
      .item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: rem(36) rem(0) rem(36) rem(0);
        .avatar {
          margin-right: rem(14);
          width: rem(100);
          height: rem(100);
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
          @extend %background_cover;
          .real-avatar {
            width: 100%;
            height: 100%;
            @extend %background_cover;
          }
        }
        .msg {
          .name-box {
            display: flex;
            align-items: center;
          }
          .name {
            color: #303030;
            @include font(30);
            @extend %text_overflow;
            max-width: rem(260);
          }
          .status {
            margin-left: rem(10);
            padding: 0 rem(2);
            color: #757575;
            @include font(16);
            border: 1px solid #757575;
            line-height: rem(22);
          }
          .starts {
            margin: rem(18) 0;
            display: flex;
            align-items: center;
            text-align: left;
            .txt {
              margin-right: rem(12);
              color: #79797e;
              @include font(20);
            }
            .start {
              margin: 0 rem(2);
              display: block;
              @include consultantModule_start_act();
              &.act {
                @include consultantModule_start_act();
              }
            }
          }
          .nums {
            color: #79797e;
            @include font(20);
          }
        }
        .r-box {
          position: absolute;
          right: rem(40);
        }
        .online,
        .offline {
          display: flex;
          align-items: center;
          top: 0;
          bottom: 0;
          margin: auto;
        }
        .info {
          @include font(26);
          margin-top: rem(30);
        }
        .contact {
          width: rem(114);
          text-align: center;
          .c-icon {
            margin: auto;
            display: block;
          }
        }
        .live {
          text-align: center;
          width: rem(114);
          .v-icon {
            margin: auto;
            display: block;
          }
        }
        .online {
          .c-icon {
            @include consultantModule_talk();
          }
          .v-icon {
            @include consultantModule_video();
          }
          .contact {
            .info {
              color: #319d64;
            }
          }
          .live {
            .info {
              color: #f32b2b;
            }
          }
        }
        .offline {
          .c-icon {
            @include consultantModule_talk_1();
          }
          .v-icon {
            @include consultantModule_video_1();
          }
          .contact,
          .live {
            .info {
              color: #79797e;
            }
          }
        }
      }
    }
  }
</style>
