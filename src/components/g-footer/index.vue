<template>
  <div class="g-footer">
    <div class="footer-inner">
      <h3 class="wglogo">WeGame</h3>
      <div class="wgsite">
        <dl class="wgsite-item wgsite-item--wg">
          <dt class="wgsite-tit">下载客户端</dt>
          <dd class="wgsite-cont">
            <a href="javascript:void(0);" class="wgsite-link">
              <span class="wgsite-link-icon icon-pc"></span>
              <span class="wgsite-link-txt">Windows版</span>
            </a>
            <a href="javascript:void(0);" class="wgsite-link">
              <span class="wgsite-link-icon icon-mac"></span>
              <span class="wgsite-link-txt">Mac版（测试版）</span>
            </a>
          </dd>
        </dl>
        <dl class="wgsite-item wgsite-item--og">
          <dt class="wgsite-tit">官方渠道</dt>
          <dd class="wgsite-cont">
            <a class="wgsite-link" id="wechat-popup">
              <span class="wgsite-link-icon icon-wechat"></span>
              <span class="wgsite-link-txt">微信</span>
              <div class="wgsite-popup">
                <div class="wgsite-popup-inner">
                  <img
                    class="wgsite-qrcode"
                    src="https://wegame.gtimg.com/g.55555-r.c4663/oss-images/oss_6107a332759fb.jpg"
                  />
                  <p class="wgsite-tips">
                    <span>扫描二维码</span>
                    <span>关注微信公众号</span>
                  </p>
                </div>
                <div class="wgsite-popup-inner">
                  <img
                    class="wgsite-qrcode"
                    src="https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/footer/wechat-video-qrcode.cc3285b2.jpg"
                  />
                  <p class="wgsite-tips">
                    <span>扫描二维码</span>
                    <span>关注微信视频号</span>
                  </p>
                </div>
              </div>
            </a>
            <a class="wgsite-link" target="_blank" href="https://weibo.com/u/6068787464">
              <span class="wgsite-link-icon icon-sina"></span>
              <span class="wgsite-link-txt">微博</span>
            </a>
            <a class="wgsite-link" target="_blank" href="https://space.bilibili.com/1208379085">
              <span class="wgsite-link-icon icon-bilibili"></span>
              <span class="wgsite-link-txt">bilibili</span>
            </a>
          </dd>
        </dl>
        <dl class="wgsite-item wgsite-item--fr">
          <dt class="wgsite-tit">友情链接</dt>
          <dd class="wgsite-cont">
            <a href="https://indienova.com/" class="wgsite-link" target="_blank">
              <span class="wgsite-link-txt">INDIENOVA</span>
            </a>
            <a href="https://gwb.tencent.com/" class="wgsite-link" target="_blank">
              <span class="wgsite-link-txt">腾讯GWB</span>
            </a>
            <a href="http://ac.qq.com" class="wgsite-link" target="_blank">
              <span class="wgsite-link-txt">腾讯动漫</span>
            </a>
            <a href="http://v.qq.com" class="wgsite-link" target="_blank">
              <span class="wgsite-link-txt">腾讯视频</span>
            </a>
          </dd>
        </dl>
      </div>

      <div class="wg-copyright">
        <div class="wg-copyright-link">
          <a href="https://www.tencent.com/zh-cn/index.html" target="_blank" rel="noopener noreferrer">关于腾讯</a>
          <a href="https://www.qq.com/contract.shtml" target="_blank" rel="noopener noreferrer">服务条款</a>
          <a href="/contract" target="_blank" rel="noopener noreferrer">软件许可及服务协议</a>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">隐私保护指引</a>
          <a href="https://privacy.qq.com/privacy-children.htm" target="_blank" rel="noopener noreferrer">
            儿童隐私保护指引
          </a>
          <a href="https://game.qq.com/self-discipline_pact.shtml" target="_blank" rel="noopener noreferrer">
            网络游戏行业防沉迷自律公约
          </a>
          <a
            href="https://developer.wegame.com/developer/static/infringement.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            侵权通知
          </a>
          <a href="http://www.tencentmind.com/" target="_blank" rel="noopener noreferrer">广告服务</a>
          <a href="https://hr.tencent.com/" target="_blank" rel="noopener noreferrer">腾讯招聘</a>
          <a href="https://kf.qq.com/index.html" target="_blank" rel="noopener noreferrer">客服中心</a>
          <a href="https://www.qq.com/map/" target="_blank" rel="noopener noreferrer">网站导航</a>
          <a href="/contact-us/" target="_blank" rel="noopener noreferrer">联系我们</a>
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
            ICP备案号：粤B2-20090059-376
          </a>
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502008701">
            <img
              src="https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/footer/record.a20583c8.png"
              style="display: inline-block; width: 16px; height: 16px; position: relative; top: -1px"
            />
            粤公网安备 44030502008701号
          </a>
        </div>
        <div class="wg-copyright-info">COPYRIGHT © 2017 – 2023 TENCENT. ALL RIGHTS RESERVED.</div>
        <div class="wg-copyright-owner">
          <a
            href="https://www.tencent.com/law/mo_law.shtml?/law/copyright.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            腾讯公司 版权所有
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.g-footer {
  position: relative;
  min-height: 290px;
  padding-bottom: 50px;
  background-color: #1b1b1b;
  font-size: 12px;
  z-index: 100;
  .footer-inner {
    width: 1000px;
    margin: 0 auto;
    padding: 40px 0 0 0;
    position: relative;
  }
  .wglogo {
    width: 240px;
    height: 100px;
    position: absolute;
    right: 0;
    top: 60px;
    background: url(https://wegame.gtimg.com/g.55555-r.c4663/rail/fragments/footer/ico-logo.90dbe144.svg) no-repeat 0 0;
    background-size: 100% auto;
    font-size: 0;
  }
  .wgsite {
    min-height: 110px;
    .wgsite-item {
      display: inline-block;
      vertical-align: top;
      margin: 0 50px 0 0;
    }
    .wgsite-tit {
      font-size: 18px;
      color: #fff;
      margin: 0 0 16px 0;
    }
    .wgsite-cont {
      position: relative;
    }
    .wgsite-link {
      color: rgba(255, 255, 255, 0.6);
      font-size: 14px;
      line-height: 24px;
      display: block;
      min-width: 100px;
      margin: 0 10px 8px 0;
      transition: color 0.2s ease-in;
      position: relative;
      cursor: pointer;
    }
    .wgsite-link-icon,
    .wgsite-link-txt {
      width: 24px;
      height: 24px;
      line-height: 24px;
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
    }
    .wgsite-link-txt {
      width: auto;
    }
    .wgsite-link-icon {
      background: url(data:image/png;base64,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)
        no-repeat -102px 0;
      background-size: 160px 30px;
      margin: 0 4px 0 0;
      opacity: 0.6;
      transition: opacity 0.2s ease-in;
    }
    .icon-wechat {
      background-position: -34px 0;
    }
    .wgsite-item--fr {
      width: 200px;
    }
    .icon-mac {
      background-position: -136px 0;
    }
    .wgsite-link:hover {
      color: #fff;
    }
  }
  .wgsite-popup {
    background-color: #fff;
    border-radius: 6px;
    text-align: center;
    position: absolute;
    top: -8px;
    left: 100%;
    padding: 6px;
    color: #3c3c3c;
    font-size: 12px;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    pointer-events: none;
    font-size: 13px;
    white-space: nowrap;
    &:hover {
      opacity: 1;
    }
    &::after {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 6px 8px 6px 0;
      border-color: transparent #fff transparent transparent;
      position: absolute;
      top: 16px;
      left: -8px;
    }
    .wgsite-popup-inner {
      display: inline-block;
      vertical-align: middle;
      position: relative;
      padding: 10px 12px 6px 12px;
    }
    .wgsite-popup-inner + .wgsite-popup-inner::before {
      content: '';
      position: absolute;
      top: 10px;
      left: -2px;
      bottom: 10px;
      width: 1px;
      background: rgba(0, 0, 0, 0.12);
    }
    .wgsite-qrcode {
      display: block;
      width: 120px;
      height: auto;
      margin: 0 auto;
    }
    .wgsite-tips {
      line-height: 1.5;
      padding-bottom: 6px;
      color: #3c3c3c;
    }
  }

  .wgsite-link:active .wgsite-popup,
  .wgsite-link:hover .wgsite-popup {
    opacity: 1;
  }

  .wg-copyright {
    padding: 30px 0 0;
    font-size: 12px;
    .wg-copyright-link {
      font-size: 0;
    }
    .wg-copyright-link > a {
      color: rgba(255, 255, 255, 0.4);
      transition: color 0.2s ease-in;
      display: inline-block;
      padding: 0 16px 0 0;
      position: relative;
      font-size: 12px;
    }
    .wg-copyright-link > a:active,
    .wg-copyright-link > a:link,
    .wg-copyright-link > a:visited,
    .wg-copyright-owner > a:active,
    .wg-copyright-owner > a:link,
    .wg-copyright-owner > a:visited {
      color: rgba(255, 255, 255, 0.4);
    }
    .wg-copyright-info,
    .wg-copyright-link {
      padding: 0 0 8px 0;
    }
    .wg-copyright-info,
    .wg-copyright-owner {
      color: rgba(255, 255, 255, 0.4);
      font-size: 12px;
    }
  }
}
</style>
