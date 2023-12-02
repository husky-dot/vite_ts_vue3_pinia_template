<template>
  <div class="panel-rankview">
    <div class="widget-layout-main">
      <Title title="排行榜" desc="更多榜单" />
      <div class="rankview-list">
        <div class="rankview-list-cell">
          <div class="rankview-subpanel subpanel-trend">
            <div class="rankview-subpanel-hd clickable">
              <div class="rankview-subpanel-txt">
                <div class="rankview-subpanel-tinner">
                  <h3 class="rankview-subpanel-tit">火爆新品</h3>
                  <p class="rankview-subpanel-desc">
                    <span class="rankview-subicon-desctext">新游戏综合热度排行</span>
                    <span class="rankview-subicon-tips"></span>
                  </p>
                </div>
                <a href="/rail/rank_detail.html?ranktype=best_seller" class="rankview-subpanel-more"></a>
              </div>
            </div>
            <div class="rankview-subpanel-bd">
              <div
                class="gcell widget-gcell gcell--flex"
                v-for="(item, index) in imgList"
                :key="index"
                :class="{ 'gcell--first': index === 0 }"
              >
                <a href="/store/2000811" class="gcell-wp">
                  <div class="widget-gcell-hd">
                    <div class="sort-number sort-number-1">
                      <span class="sort-number-ico">
                        <icon :name="`local-icon-num${index + 1}`"></icon>
                      </span>
                    </div>
                    <div class="we-image we-image--square">
                      <img :src="item.url" alt="命运方舟" class="we-image-figure" />
                    </div>
                  </div>
                  <div v-if="index === 0" class="widget-gcell-bd">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">{{ item.name }}</span>
                    </div>
                    <div class="widget-tag-largeedit-rankview">
                      <div class="widget-tag-largeedit">
                        <span class="widget-tag-largeedit-label">大版本</span>
                        <span class="widget-tag-largeedit-text">新军团长小丑副本</span>
                      </div>
                    </div>
                  </div>
                  <div v-else class="widget-gcell-bd flex-1">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">穿越火线</span>
                    </div>
                    <div class="widget-gprice gprice--text">
                      <div class="widget-gprice-text"><span class="widget-gprice-content">免费开玩</span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rankview-list-cell">
          <div class="rankview-subpanel subpanel-trend">
            <div class="rankview-subpanel-hd clickable">
              <div class="rankview-subpanel-txt">
                <div class="rankview-subpanel-tinner">
                  <h3 class="rankview-subpanel-tit">火爆新品</h3>
                  <p class="rankview-subpanel-desc">
                    <span class="rankview-subicon-desctext">新游戏综合热度排行</span>
                    <span class="rankview-subicon-tips"></span>
                  </p>
                </div>
                <a href="/rail/rank_detail.html?ranktype=best_seller" class="rankview-subpanel-more"></a>
              </div>
            </div>
            <div class="rankview-subpanel-bd">
              <div
                class="gcell widget-gcell gcell--flex"
                v-for="(item, index) in imgList"
                :key="index"
                :class="{ 'gcell--first': index === 0 }"
              >
                <a href="/store/2000811" class="gcell-wp">
                  <div class="widget-gcell-hd">
                    <div class="sort-number sort-number-1">
                      <span class="sort-number-ico">
                        <icon :name="`local-icon-num${index + 1}`"></icon>
                      </span>
                    </div>
                    <div class="we-image we-image--square">
                      <img :src="item.url" alt="命运方舟" class="we-image-figure" />
                    </div>
                  </div>
                  <div v-if="index === 0" class="widget-gcell-bd">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">{{ item.name }}</span>
                    </div>
                    <div class="widget-tag-largeedit-rankview">
                      <div class="widget-tag-largeedit">
                        <span class="widget-tag-largeedit-label">大版本</span>
                        <span class="widget-tag-largeedit-text">新军团长小丑副本</span>
                      </div>
                    </div>
                  </div>
                  <div v-else class="widget-gcell-bd flex-1">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">穿越火线</span>
                    </div>
                    <div class="widget-gprice gprice--text">
                      <div class="widget-gprice-text"><span class="widget-gprice-content">免费开玩</span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="rankview-list-cell">
          <div class="rankview-subpanel subpanel-trend">
            <div class="rankview-subpanel-hd clickable">
              <div class="rankview-subpanel-txt">
                <div class="rankview-subpanel-tinner">
                  <h3 class="rankview-subpanel-tit">火爆新品</h3>
                  <p class="rankview-subpanel-desc">
                    <span class="rankview-subicon-desctext">新游戏综合热度排行</span>
                    <span class="rankview-subicon-tips"></span>
                  </p>
                </div>
                <a href="/rail/rank_detail.html?ranktype=best_seller" class="rankview-subpanel-more"></a>
              </div>
            </div>
            <div class="rankview-subpanel-bd">
              <div
                class="gcell widget-gcell gcell--flex"
                v-for="(item, index) in imgList"
                :key="index"
                :class="{ 'gcell--first': index === 0 }"
              >
                <a href="/store/2000811" class="gcell-wp">
                  <div class="widget-gcell-hd">
                    <div class="sort-number sort-number-1">
                      <span class="sort-number-ico">
                        <icon :name="`local-icon-num${index + 1}`"></icon>
                      </span>
                    </div>
                    <div class="we-image we-image--square">
                      <img :src="item.url" alt="命运方舟" class="we-image-figure" />
                    </div>
                  </div>
                  <div v-if="index === 0" class="widget-gcell-bd">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">{{ item.name }}</span>
                    </div>
                    <div class="widget-tag-largeedit-rankview">
                      <div class="widget-tag-largeedit">
                        <span class="widget-tag-largeedit-label">大版本</span>
                        <span class="widget-tag-largeedit-text">新军团长小丑副本</span>
                      </div>
                    </div>
                  </div>
                  <div v-else class="widget-gcell-bd flex-1">
                    <div class="gcell-tit-wrap">
                      <span class="gcell-tit">穿越火线</span>
                    </div>
                    <div class="widget-gprice gprice--text">
                      <div class="widget-gprice-text"><span class="widget-gprice-content">免费开玩</span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Title from './Title.vue'

const imgList = ref([
  {
    url: '//wegame.gtimg.com/g.2000811-r.5e134/info/fdb1c05b074e2685ceba376a40e494f4.jpg/320',
    name: '命运方舟',
  },
  {
    url: 'https://wegame.gtimg.com/g.2-r.37dc5/oss-images/oss_60bddf8e67891.jpg',
    name: '穿越火线',
  },
  {
    url: '//wegame.gtimg.com/g.2001715-r.9a324/info/4bd6af0d9f18078e128776314c336e65.jpg/142',
    name: '无畏契约',
  },
  {
    url: '//wegame.gtimg.com/g.2000821-r.0385b/info/e2642535ae50ac777d5959c5898fefe5.jpg/142',
    name: '全境封锁2',
  },
  {
    url: '//wegame.gtimg.com/g.2001142-r.aa610/info/01995c9a31cfa900e7aab280810e5c8b.jpg/142',
    name: '从军',
  },
  {
    url: '//wegame.gtimg.com/g.2000797-r.57462/info/4c31ed62ba28a7ad8f0c25e5b75d7e1c.jpg/142',
    name: 'CFHD高清竞技大区',
  },
  {
    url: '//wegame.gtimg.com/g.2000797-r.57462/info/4c31ed62ba28a7ad8f0c25e5b75d7e1c.jpg/142',
    name: 'CFHD高清竞技大区',
  },
  {
    url: '//wegame.gtimg.com/g.2000797-r.57462/info/4c31ed62ba28a7ad8f0c25e5b75d7e1c.jpg/142',
    name: 'CFHD高清竞技大区',
  },
])
</script>

<style scoped lang="scss">
.panel-rankview {
  z-index: 10;
  margin: 0 0 40px;
  position: relative;
  float: none;
  clear: both;
}
.widget-layout-main {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  transition:
    transform 0.2s linear,
    -webkit-transform 0.2s linear;
  .rankview-list {
    position: relative;
    display: flex;
    margin: 0 -20px 0 0;
    .rankview-list-cell {
      width: 33.33%;
      padding-right: 20px;
    }
    .rankview-subpanel {
      transform: scaleZ(1);
      background: #fff;
      min-height: 200px;
      border-radius: 6px;
      overflow: hidden;
      position: relative;
    }
    .subpanel-trend,
    .subpanel-sale {
      // height: 906px;
			padding-bottom: 15px;
    }
    .rankview-subpanel-hd {
      height: 220px;
      position: relative;
      cursor: pointer;
    }
    .rankview-subpanel-txt {
      height: 66px;
      position: absolute;
      top: 20px;
      left: 20px;
      right: 0;
      z-index: 5;
      color: #fff;
    }
    .rankview-subpanel-tinner {
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      vertical-align: middle;
      height: 44px;
      position: relative;
      text-align: center;
      min-width: 160px;
    }
    .rankview-subpanel-tit {
      position: relative;
      height: 24px;
      line-height: 24px;
      color: #41454f;
      margin-bottom: 6px;
      font-size: 20px;
      text-align: left;
      font-family: var(--font-family-ffblacktit);
      padding: 0 0 0 23px;
      box-sizing: border-box;
      font-weight: bold;
      &::before {
        content: '';
        width: 19px;
        height: 24px;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAwCAYAAAB9sggoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANOSURBVHgB7VhdctMwEP7kKc+0J8C5QTgByQlIToD7zkwbYHhNeGUGQk9AeoKGE8ScoOEEcW/QZwZidu11I8vyTxrFYab5ZjyKpLX0ZXe1uzJwxBEtIp7iFP8JvFxvjQGRW8VXeIMDw7OM+URwRgSnh9SgZ/Tutd4lPYtDkTM1FtKjk+vS8x0HQI6YGiWkloYM+90lWobNx0aWsXHbJi0QI62xxr4Zw0zqAi1ClU2Qhm6R+lgGNnNHzL13eBVzQ3oirX+KGK/REkqJkWYiavrQySn0bLIS87pog1jCo0iuVyI6QBrzfDjCg4/RohNqXhDVkCL/TyEFbX6KNOiemX5Gc7H8nNHcORxgo7F1QiTgdETtijZb6OahDUc0V9jU0FLgKqwoY5MVUDDHjJ5R1WnUNEYdBOodrrEjTB+zmSGg57bGfzakVakfbgUzJYXUTCxyPqqdOzJkd4Yt8n/C9uSWhtzOsIYLIWcG2GzTm8ILdIrhGFUBdo40hs2MqS5pbWysEsIxVBMhMR8ncQ6kvgy/lISfyWS5NaLxDnbESRMhCbZcDo3ir3glJ4/zpu5b84wYHKCRxppAtMpxcE5/ZIgd4cERRKshHGnMGbEEMRWYcaE0h1wJtyqZnBKjVPSDnMMWOvhKOJdCoNlaVZOSxPW4FYHTT1qB/JJMUYtcLk0PTL+uEq51/vgLlTpe6T+NaIU5bXtllkkGMbM4qCVXa0r1PrmYTEqmfSLFNdpK6rkyhEafLVFp1sbhgjYeyGJ+hViEVBOR8W6PmoVFfigZ5vHEZAOfGk5HQYUYm+fc3LCk1ouQZpCCSbc6lawJKZ07Us2GFjGuYG8KX4zWSWFggl3B+mXJSeSPP5PPnOA5Nhq5xx/cqY/5mMblOooXmpD+bB/7INYU4gpMzs9NPIOv3uJOH3Ib+Wsgh4LzaN6nficHK4dG1YUNctI4zbBP+dpU9sWIM8DSdGwulehdrlQ2n7dU8bK8tSnlesbmaHrz5tN5bTmlXVmH1yvUcI/2McoIATkChw6/4SsRyU/UxeZqp/ncKRE7gwtiBkE+8r2Gr0TQgrBYYJxcqF0SeyA4Tb4GZdUtm8mHXZsRUj8cVuXXvYeLhPDfJMZBfciHhCOeBP4BUD8RUO96/PQAAAAASUVORK5CYII=);
        background-repeat: no-repeat;
        background-size: 100% auto;
        background-position: center top;
      }
    }
    .rankview-subpanel-desc {
      position: relative;
      display: flex;
      align-items: center;
    }
    .rankview-subicon-tips {
      display: inline-block;
      width: 24px;
      height: 24px;
      position: relative;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKWSURBVHgBzZpNbtRAEIUfmQgWKBIIJJRhUysuwAHIAeAaXADOwQE4AFyAa3AAssoqrLJKlChRRko/uUvTcWz3X9VoPqkky7bG77Pbbbd7VvBFQq1C3cCJFfyQUG9CvQp1BycJLwHBEP4+1AEcJTwEBEP421D/Qm1CHcFJwlpAsA1/iiHwVdzmImEpIHgaXnGTsBIQzIdXXCQsBAT58Iq5RK+AoDy8YirRIyCoD6+YSbQKCNrDKyYSLQKC/vBKt0StgMAuvNIlUSMgsA+vNEs8QxmC+fAnoT6hDgb+Fer/aP1xqHVcPgt1kfuhQ+QRLJ/5D6G+oB6G/T5ap0LreFyyKHGAZQR+zeZoZj0lzkfHn2XpCgjKwv8J9Rd5eKW+oYziKzEnICg/8+fYnjFLiiSmmhB39mo2tWSb01hAd9qH8MqiRNqEdGNveN6cJxh6mZQ12pltTirAlVZnnjfqZ9gzKXGIbXiOXS2azXHhfqeohxJ8e3iHIfeGApcYBLjhLex7lN/xGCmXcX0tL0K9jsvX/B0KaNck2J49S4mpV4YWGJ7PkucYwvMKbrQXosRZXE7fR/aFyfDckHaj+yoxG56MnwP7JrEYnky9SvTeEz/xWPwKbWTDk6XxAHsmicvp03AXFIUnuQFNi8RXPH4W/MDTbnSJ4vAkN6BpaU4fYylsUqUCVeFJbkBDdnVjV4cnJQLEW6IpPCkZEyulzWk8Qsv1Qs3hSelXiRTL3qkrPGn5MsfvNXxj5fcbvvvzJNT0Mkp3eNL6bbRXwiQ86fk63SphFp70zg/USpiGJxYzNKUS5uGJ1RxZTsIlPLGcpZyTcAtPrOeJxxJ8UL6HU3jiMVOfSryMx3AJD/j9VyKVcAu/Cyjg+Y8YPADdegqZuBrj1QAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-left: 6px;
    }
    .rankview-subicon-desctext {
      color: #41454f;
      font-size: 14px;
      opacity: 0.5;
      font-weight: 400;
      text-align: left;
      transition: opacity 0.3s ease;
    }
    .rankview-subpanel-more {
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      right: 20px;
      top: 0;
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
      transition: all 0.2s ease-out;
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
      font-family: var(--font-family-base);
      height: 24px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 30px;
      text-align: center;
      border-radius: 4px 8px;
      &::before {
        content: '';
        width: 30px;
        height: 24px;
        border-radius: 4px 8px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        background-color: transparent;
        transition: background-color;
      }
      &::after {
        content: '';
        width: 7px;
        height: 16px;
        position: absolute;
        right: 12px;
        top: 50%;
        margin-top: -8px;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAmCAYAAADJJcvsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgBrZaxctNAEIZ3FWeG0iWlInsmdmc6SgmSTGhAPAHJG5AnIDxBeAPCE1hmMsMwJvjo6BCdXdg+upSmY4ZJll2NZBL7TtKN8xfS6vb0aU+3t3cA960wjJuwgTA8jH28pj7bPUDQRPhSDZMUHOUtISICH4FG4X7cA0d5S8h/NRGpL5GCgwSk1lolshuOzAHm0V885rveFIZy4RnzcZt+sGmauZQ/FimVLMpAMjTgTpoAIzZNnXv8kVFVeniFIVOew0zqeQ16DyXauv2gZ+Mrv9X9xeON13oidIJWx5/PJoNKUA5LrTCOLGjvNufTyedKUAELgq5EEa578bHf3kU9nahKkGg+G3+zwZBX1irMCqoFC7q/OfrvlaBKGMKh3+5qPR3/RKipaO/5Ob/5yuBacMLuVEZUSM8myU6rE7Lpr7ge8EL744GDuFa9NbUj4lHtoRWK9l+Qqd0porL15gSCbWO2i9LaoKy2A52ZfESU1PpHGYSLnBQ7g1tLvWpsCAG6uT5R6kKXDk1+bjkEj9TlRSJ2aURcGftWCNGpuhx8KJ6tEUUHvCTAVEZyyJePd5LTCHpyEJ8CGdeVESJCE4Q7v7FA3jHkxOS7Awr34te8y55ZOp5/HQ6OwaIlKHwax+hl5wCT0tFw8AhKlM2aHBo4a23bTbZBQoW28tT/xPZDg1+y9hlvoFdVoEZ+rPEtENmqNdSQ6VjjDClAaqVt4QrJQHKs4ZKXLiMBd4joH1IoAkR8wvwdAAAAAElFTkSuQmCC);
        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAmCAYAAADJJcvsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgBrZaxctNAEIZ3FWeG0iWlInsmdmc6SgmSTGhAPAHJG5AnIDxBeAPCE1hmMsMwJvjo6BCdXdg+upSmY4ZJll2NZBL7TtKN8xfS6vb0aU+3t3cA960wjJuwgTA8jH28pj7bPUDQRPhSDZMUHOUtISICH4FG4X7cA0d5S8h/NRGpL5GCgwSk1lolshuOzAHm0V885rveFIZy4RnzcZt+sGmauZQ/FimVLMpAMjTgTpoAIzZNnXv8kVFVeniFIVOew0zqeQ16DyXauv2gZ+Mrv9X9xeON13oidIJWx5/PJoNKUA5LrTCOLGjvNufTyedKUAELgq5EEa578bHf3kU9nahKkGg+G3+zwZBX1irMCqoFC7q/OfrvlaBKGMKh3+5qPR3/RKipaO/5Ob/5yuBacMLuVEZUSM8myU6rE7Lpr7ge8EL744GDuFa9NbUj4lHtoRWK9l+Qqd0porL15gSCbWO2i9LaoKy2A52ZfESU1PpHGYSLnBQ7g1tLvWpsCAG6uT5R6kKXDk1+bjkEj9TlRSJ2aURcGftWCNGpuhx8KJ6tEUUHvCTAVEZyyJePd5LTCHpyEJ8CGdeVESJCE4Q7v7FA3jHkxOS7Awr34te8y55ZOp5/HQ6OwaIlKHwax+hl5wCT0tFw8AhKlM2aHBo4a23bTbZBQoW28tT/xPZDg1+y9hlvoFdVoEZ+rPEtENmqNdSQ6VjjDClAaqVt4QrJQHKs4ZKXLiMBd4joH1IoAkR8wvwdAAAAAElFTkSuQmCC);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% auto;
        mask-size: 100% auto;
        mask-position: center center;
        background-color: #41454f;
      }
    }
    .rankview-subpanel-hbg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }

  .widget-gcell {
    background-color: #fff;
    // padding: 8px 14px 11px;
    cursor: pointer;
    -webkit-transition: background-color 0.15s ease-in;
    transition: background-color 0.15s ease-in;
    display: block;
    position: relative;
  }
  .rankview-subpanel .gcell {
    margin-bottom: 0;
  }
  .rankview-subpanel .gcell--first {
    margin: -132px 0 16px;
  }
  .gcell--first.gcell--flex {
    background: none;
  }
  .gcell.gcell--flex .gcell-wp {
    display: flex;
    align-items: center;
    padding: 0 0 0 44px;
    position: relative;
    height: 70px;
  }
  .gcell--first.gcell--flex .gcell-wp {
    padding: 0 0 0 20px;
    height: 70px;
  }
  .subpanel-trend .gcell--first .gcell-wp {
    height: 162px;
    padding: 0 20px;
    display: block;
  }
  .widget-gcell-hd,
  .gcell-hd {
    top: 11px;
    width: 110px;
    height: 64px;
    position: absolute;
    left: 38px;
  }
  .rankview-subpanel .widget-gcell-hd {
    width: 92px;
    height: 54px;
    position: relative;
  }
  .gcell--first .widget-gcell-hd {
    width: 119px;
    height: 70px;
  }
  .gcell.gcell--flex .gcell-hd,
  .gcell.gcell--flex .widget-gcell-hd {
    position: relative;
    left: auto;
    top: auto;
    margin-right: 12px;
  }
  .subpanel-trend .gcell--first .widget-gcell-hd {
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
  .sort-number {
    height: 32px;
    position: absolute;
    top: 50%;
    left: -20px;
    margin-top: -16px;
    text-align: center;
    display: inline-block;
    width: 22px;
    color: #bfbfbf;
  }
  .gcell--first .sort-number {
    width: 36px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    margin-top: 0;
    overflow: hidden;
    border-top-left-radius: 3px;
  }
  .rankview-subpanel .gcell--first .sort-number {
    z-index: 4;
  }
  .rankview-subpanel .sort-number-ico {
    height: 100%;
    display: block;
    font-family: din;
    color: #41454f80;
    font-size: 20px;
    font-weight: 500;
  }
  .gcell--first .sort-number-ico {
    color: #fff;
    height: 24px;
    line-height: 24px;
    width: 10px;
    margin: 0 0 0 8px;
  }
  .sort-number .local-icon {
    display: inline-block;
    margin-right: 5px;
  }
  .gcell--first .sort-number-ico .local-icon {
    position: relative;
    top: 0px;
  }
  .gcell--first .sort-number-ico:after {
    content: '';
    height: 24px;
    width: 39px;
    -webkit-transform: skew(-15deg, 0);
    transform: skew(-15deg);
    border-radius: 0 0 8px;
    background-image: radial-gradient(85.21% 100% at 42.6% 100%, #ff6b00 0%, #fe4358 100%);
    color: #000;
    min-height: 24px;
    padding: 0 17px 0 11px;
    position: absolute;
    top: 0;
    left: -8px;
    z-index: -1;
  }
  .we-image {
    word-wrap: normal;
    display: inline-block;
    font-size: 0;
  }
  .widget-gcell-hd .we-image,
  .gcell-hd .we-image {
    background-color: #e4e4e4;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    transform: scaleZ(1);
  }
  .rankview-subpanel .gcell .we-image > img {
    height: 100%;
    object-fit: cover;
    width: 100%;
    transition:
      transform 0.15s ease-in-out,
      -webkit-transform 0.15s ease-in-out;
  }
  .subpanel-trend .gcell--first .widget-gcell-bd {
    width: auto;
    position: absolute;
    bottom: 0;
    left: 28px;
    right: 48px;
    z-index: 5;
    min-height: auto;
    display: flex;
    justify-content: start;
    overflow: unset;
  }

  .gcell.gcell--flex .gcell-tit-wrap,
  .gcell.gcell--text .gcell-tit-wrap {
    padding: 0 10px 0 0;
  }
  .rankview-subpanel .gcell--flex .gcell-tit-wrap {
    margin: -4px 0 4px;
  }
  .rankview-subpanel .gcell-tit-wrap .gcell-tit {
    color: #41454f;
    font-weight: 700;
  }
  .rankview-subpanel .gcell--flex .gcell-tit,
  .rankview-subpanel .gcell--text .gcell-tit {
    max-width: 75%;
    margin: 0 4px 0 0;
    height: 24px;
    line-height: 24px;
  }
  .subpanel-trend .gcell--first .gcell-tit {
    display: none;
  }
  .rankview-subpanel .gcell--flex .gcell-tit:last-child,
  .rankview-subpanel .gcell--text .gcell-tit:last-child {
    max-width: 80%;
  }
  .widget-tag-largeedit-rankview {
    width: auto;
    height: 36px;
    background: rgba(33, 33, 33, 0.7);
    left: -7px;
    right: -27px;
    position: absolute;
    bottom: 0;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }
  .widget-tag-largeedit {
    max-width: 156px;
    height: 24px;
    position: relative;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background: #ff8f00;
      border-radius: 2px;
    }
  }
  .widget-tag-largeedit-label {
    display: inline-block;
    min-width: 46px;
    height: 18px;
    line-height: 14px;
    border-radius: 2px;
    background: #ff8f00;
    padding: 2px 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 12px;
    color: #fff;
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
  .widget-tag-largeedit-text {
    margin-left: 6px;
    color: #ff8f00;
    font-size: 12px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .gcell.gcell--flex .gcell-tit-wrap,
  .gcell.gcell--text .gcell-tit-wrap {
    padding: 0 10px 0 0;
  }
  .rankview-subpanel .gcell--flex .gcell-tit-wrap {
    margin: -4px 0 4px;
  }

  .widget-gcell-tit,
  .gcell-tit {
    font-size: 15px;
    color: #3c3c3c;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    height: 29px;
    line-height: 29px;
    margin: 4px 0 0;
  }
  .gcell.gcell--flex .gcell-tit {
    margin: 0;
    font-weight: 700;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
  }
  .rankview-subpanel .gcell-tit-wrap .gcell-tit {
    max-width: 75%;
    margin: 0 4px 0 0;
    height: 24px;
    line-height: 24px;
  }
  .rankview-subpanel .gcell--flex .gcell-tit:last-child,
  .rankview-subpanel .gcell--text .gcell-tit:last-child {
    max-width: 80%;
  }

  .widget-gprice-text {
    font-family:
      Microsoft YaHei,
      微软雅黑,
      Microsoft YaHei UI,
      PingFang SC,
      Open Sans,
      calibri,
      Roboto,
      verdana,
      Hiragino Sans GB,
      sans-serif;
    height: 24px;
    overflow: hidden;
  }
  .widget-gprice-content {
    color: #41454f99;
    font-size: 15pxs;
  }

  .rankview-subpanel .gcell:hover .we-image > img {
    transform: scale3d(1.15, 1.15, 1.15);
  }
  .rankview-subpanel .gcell-wp:after {
    content: '';
    position: absolute;
    inset: 0;
    background: #41454f;
    z-index: -1;
    opacity: 0;
    -webkit-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
    pointer-events: none;
  }

  .rankview-subpanel .gcell-wp:hover .sort-number-ico,
  .rankview-subpanel .gcell-wp:hover .gcell-tit {
    color: #fff;
  }
  .rankview-subpanel .gcell-wp:hover .widget-gprice.gprice--text .widget-gprice-content,
  .rankview-subpanel .gcell-wp:hover .gcell-recommend-txt {
    color: #fff9;
  }
  .rankview-subpanel .gcell-wp:hover:after {
    opacity: 1;
  }

  .rankview-subpanel .gcell-wp:hover:after {
    opacity: 1;
  }
  .rankview-subpanel .gcell--flex:hover {
    background: none;
  }
  .rankview-subpanel .gcell--first:hover {
    .gcell-wp:after {
      opacity: 0;
    }
  }
}
</style>
