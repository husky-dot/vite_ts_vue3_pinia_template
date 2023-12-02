<template>
  <div class="wgheader">
    <div class="wgheader-inner">
      <div class="wgheader-hd"><a href="/home" class="wgheader-logo">WeGame</a></div>
      <div class="wgheader-bd">
        <div class="wgnav-popup">
          <ul class="wgnav">
            <li class="wgnav-item">
              <a href="/home" class="wgnav-link">首页</a>
            </li>
            <li class="wgnav-item cur" id="header-store"><a href="/store" class="wgnav-link">商店</a></li>
            <li class="wgnav-item" id="header-client"><a href="/client" class="wgnav-link">客户端</a></li>
            <li class="wgnav-item wgnav-item--dropmenu">
              <a href="javascript:void(0);" class="wgnav-link">开发者平台</a>
              <div class="wgnav-dropmenu">
                <ul class="wgnav-dropmenu-list">
                  <li class="wgnav-dropmenu-item">
                    <a href="https://developer.wegame.com" target="_blank" class="wgnav-dropmenu-link">正式发行游戏</a>
                  </li>
                  <li class="wgnav-dropmenu-item">
                    <a
                      href="https://developer.wegame.com/service/test-area.html"
                      target="_blank"
                      class="wgnav-dropmenu-link"
                    >
                      先锋测试游戏
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="wgheader-ft">
        <a href="javascript:void(0)" class="wgheader-download"><span>下载客户端</span></a>
        <div class="widget-feedback">
          <a href="/client/changelog" class="widget-feedback-btn btn-version" title="更新日志"></a>
        </div>
        <div class="widget-feedback">
          <a href="/feedback" class="widget-feedback-btn btn-feedback" title="帮助与反馈"></a>
        </div>
        <div class="wglogin"><a href="javascript:void(0);" class="btn-wglogin" title="登录"></a></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wgheader {
  position: relative;
  height: 76px;
  z-index: 200;
  margin: auto;
  font-size: 0;
	background-color: rgba(30, 30, 32, 1);
}
.wgheader-inner {
  font-family:
    system-ui,
    PingFang SC,
    Open Sans,
    calibri,
    Roboto,
    verdana,
    Hiragino Sans GB,
    Microsoft YaHei UI,
    Microsoft YaHei,
    sans-serif;
  height: 76px;
  background-color: rgba(30, 30, 32, 0.8);
  backdrop-filter: blur(20px);
  padding: 8px 120px;
  transition: all 0.25s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-width: 1024px;
  z-index: 900;
  width: 100vw;
  .wgheader-hd {
    padding: 10px 40px 0 0;
    display: inline-block;
    vertical-align: middle;
    height: 60px;
  }
  .wgheader-logo {
    display: inline-block;
    vertical-align: middle;
    width: 152px;
    height: 38px;
    background-image: url(https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/header/icon-logo.a4edc358.svg);
    text-indent: -9999px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 0;
    color: #0000;
    background-size: auto 100%;
    transition: all 0.25s ease;
  }
  .wgheader-bd {
    display: inline-block;
    vertical-align: middle;
    height: 60px;
    .wgnav {
      white-space: nowrap;
      word-wrap: normal;
      text-align: center;
      width: 100%;
      position: relative;
      .wgnav-item {
        display: inline-block;
      }
      .wgnav-item.cur a::before {
        content: '';
        position: absolute;
        right: 25px;
        bottom: 10px;
        left: 25px;
        height: 3px;
        background-image: linear-gradient(to right, #ffe082, #ff6f00);
        border-radius: 2px;
        overflow: hidden;
        transition: all 0.2s ease;
      }
      .wgnav-link {
        position: relative;
        display: block;
        font-size: 16px;
        height: 60px;
        line-height: 60px;
        font-weight: 700;
        color: #fffc;
        transition: all 0.2s ease;
        padding: 0 25px;
      }
      .wgnav-item--dropmenu {
        position: relative;
      }
      .wgnav-dropmenu {
        width: 150px;
        position: absolute;
        top: 60px;
        left: 50%;
        transform: translate(-50%);
        overflow: hidden;
        transition: opacity 0.25s ease;
        opacity: 0;
        height: 0;
        border-radius: 6px;
        box-shadow: 0 10px 10px #0000001a;
      }
      .wgnav-dropmenu-list {
        padding: 6px;
        box-sizing: border-box;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid rgba(0, 0, 0, 0.05);
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
          border-radius: 6px;
          background-color: #fff;
          opacity: 0.95;
          backdrop-filter: blur(10px);
        }
      }
      .wgnav-item--dropmenu .wgnav-link:after {
        content: '';
        width: 10px;
        height: 10px;
        border: 2px solid #fff;
        border-top: none;
        border-left: none;
        transform: rotate(45deg);
        position: absolute;
        right: 0;
        top: 50%;
        margin-top: -8px;
        box-sizing: border-box;
        opacity: 0.8;
      }
      .wgnav-item--dropmenu:hover .wgnav-dropmenu {
        opacity: 1 !important;
        height: auto;
      }
      .wgnav-dropmenu-link {
        display: block;
        height: 30px;
        line-height: 30px;
        font-size: 13px;
        padding: 0 19px;
        color: #3c3c3c;
        border-radius: 6px;
        overflow: hidden;
        transition: all 0.15s ease;
        &:hover {
          background-color: #0000001a;
        }
      }
    }
  }
  .wgheader-ft {
    height: 55px;
    position: absolute;
    right: 120px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .wgheader-download {
      display: inline-block;
      font-weight: 700;
      width: 115px;
      height: 36px;
      padding: 0 20px;
      vertical-align: middle;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 18px;
      color: #fffc;
      white-space: nowrap;
      font-size: 15px;
      line-height: 34px;
      text-align: center;
      transition: all 0.15s ease;
    }
    .widget-feedback {
      display: inline-block;
      vertical-align: middle;
      margin-left: 23px;
    }
    .btn-version {
      background-image: url(https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/header/svg-version.dc27e4b3.svg);
      background-size: 100% auto;
      background-position: 50% 50%;
    }
    .widget-feedback-btn,
    .btn-wglogin {
      display: block;
      width: 24px;
      height: 24px;
      opacity: 0.6;
      transition: opacity 0.15s ease-in;
    }
    .btn-feedback {
      background-image: url(https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/header/svg-feedback.bc819122.svg);
      background-size: 100% auto;
      background-position: 50% 50%;
    }
    .wglogin {
      height: 55px;
      padding-left: 21px;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .btn-wglogin {
      background-image: url(https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/header/svg-login.7b0c02e4.svg);
      background-size: 100% auto;
      background-position: 50% 50%;
    }
    .widget-feedback-btn:hover,
    .btn-wglogin:hover {
      opacity: 1;
    }
  }
}
@media screen and (min-width: 1280px) and (max-width: 1500px) {
  .wgheader-inner {
    padding: 8px 60px;
    .wgheader-hd {
      padding: 10px 20px 0 0;
    }
  }
  .wgnav-link {
    padding: 0 15px;
  }
  .wgnav-item.cur a:before {
    right: 15px;
    left: 15px;
  }
  .wgpopup,
  .wgnav-dropmenu {
    top: 50px;
  }
  .wgheader-ft {
    right: 60px;
  }
}

@media screen and (min-width: 0) and (max-width: 1279px) {
  .wgheader-inner {
    padding: 8px 40px;
    .wgheader-hd {
      padding: 10px 20px 0 0;
    }
    .wgheader-logo {
      width: 38px;
    }
  }

  .wgheader-ft {
    right: 40px;
  }
}
</style>
