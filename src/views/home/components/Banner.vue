<template>
  <div class="nbanner-modulea">
    <div class="nbanner-modulea-inner">
      <div class="nbmodulea-box">
        <div class="nbmodulea-box-cont">
          <div class="nbmodulea-menu">
            <div class="nbmodulea-menulist">
              <div
                class="nbmodulea-menulist-item"
                v-for="(item, index) in imgList"
                :key="index"
                :class="{ kvimg: index === 0, active: active === index }"
                @mouseenter="onMouseEnter(index)"
                @mouseleave="onMouseLeave"
              >
                <div class="nbmodulea-menulist-pic">
                  <div class="we-image">
                    <img :src="item.thumbUrl" alt="" class="we-image-figure" />
                  </div>
                </div>
                <div class="nbmodulea-menulist-gamename">{{ item.name }}</div>
                <div v-if="index === 0" class="nbmodulea-menulist-labelsuper">
                  <icon name="local-icon-heavy" size="80" color="#000" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="nbmodulea-bg">
        <div class="nbmodulea-bg-source">
          <div class="nbmodulea-bg-list">
            <div class="nbmodulea-bg-item" v-for="(item, index) in imgList" :key="index">
              <transition name="fade">
                <div v-if="active === index">
                  <div class="nbmodulea-bg-pic">
                    <div class="we-image we-image--square nbmodulea-bg-pic-img">
                      <div class="we-image we-image--square nbmodulea-bg-pic-img">
                        <img :src="item.url" alt="title" class="we-image-figure" />
                      </div>
                    </div>
                  </div>
                  <div v-if="item.videoUrl" class="nbmodulea-bg-video" :style="{ opacity: showVideo ? '1' : '0' }">
                    <video
                      ref="videoRef"
                      :src="item.videoUrl"
                      class="nbmodulea-bg-video-ele"
                      loop
                      preload="preload"
                      autoplay
                      muted
                    ></video>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const imgList = ref([
  {
    thumbUrl: '//wegame.gtimg.com/g.2001992-r.e203b/info/89442538ae97f0655c92cb10e99a165c.jpg/184',
    name: '奇迹降临',
    videoUrl: 'https://wegame.gtimg.com/g.2001142-r.aa610/d5f77f27-d1fb-4fcf-8c13-454bed3d50b4_9w9e0g0a0m3e3.mp4',
    url: 'https://wegame.gtimg.com/g.2000576-r.0cca1/4d2c4a2a-4223-4425-9d68-b3a2df97607b_9w9e0g0a0m3e3.jpg',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.26-r.39647/info/oss_58f47a138e37f.jpg/184',
    name: '英雄联盟',
    url: 'https://wegame.gtimg.com/g.26-r.39647/0ea84972-9432-4a04-9adf-86c12b2d939d_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://dlcdn.td2.qq.com/rid.2000821-r.0385b/e0c67187-0016-4b4d-9a05-e30b19036e82_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.48-r.f5a22/info/oss_58f96fa7093b9.jpg/184',
    name: '剑灵',
    url: 'https://wegame.gtimg.com/g.48-r.f5a22/e0456bb7-5068-4fc1-b98b-d65f1240888f_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2000576-r.0cca1/93b585a6-bbaf-477a-8343-92178348fb4f_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2000576-r.0cca1/info/20716213e1fa3000957db0208dc10741.jpg/184',
    name: '星际战甲',
    url: 'https://wegame.gtimg.com/g.2000576-r.0cca1/4d2c4a2a-4223-4425-9d68-b3a2df97607b_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2000576-r.0cca1/a7b82801-b391-43f4-a8a7-8bab55a130d4_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2001446-r.b5807/info/c381fd88d98eebaf1999b5b982045a25.jpg/184',
    name: '重生边缘',
    url: 'https://image.sop.qq.com/rid.2001446-r.b5807/91544394-b192-46ba-8fe8-7b9e7affbf40_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2000576-r.0cca1/93b585a6-bbaf-477a-8343-92178348fb4f_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2000717-r.2feb0/info/8367121e5f65d524990c09445278fd56.jpg/184',
    name: '三国杀',
    url: 'https://wegame.gtimg.com/g.2001128-r.5990c/3aac0dc9-4909-445d-bc6f-8d913972ad5c_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2001878-r.e636c/dde45b91-9bb7-44be-8c0f-a7a7ce8b325b_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2001460-r.a31b0/info/3968e01fed36c58269f2fba8ca12c9ad.jpg/184',
    name: '枪火重生',
    url: 'https://wegame.gtimg.com/g.2000717-r.2feb0/39220a4c-1ca9-4aba-a186-975cebf7ad6d_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://dlcdn.td2.qq.com/rid.2000821-r.0385b/e0c67187-0016-4b4d-9a05-e30b19036e82_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2001878-r.e636c/info/b41aec1fac2bf0a134f71be455b3b51b.jpg/184',
    name: '暗夜奇迹',
    url: 'https://wegame.gtimg.com/g.2001878-r.e636c/a4e5bca0-e93a-4a47-a70c-0a45efcbd64b_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2001878-r.e636c/dde45b91-9bb7-44be-8c0f-a7a7ce8b325b_9w9e0g0a0m3e3.mp4',
  },
  {
    thumbUrl: '//wegame.gtimg.com/g.2001462-r.13beb/info/837501c750d690994d6a2d4f853742c1.jpg/184',
    name: '生死狙击2',
    url: 'https://wegame.gtimg.com/g.2001462-r.13beb/c6a1d15d-fe91-4623-8276-0bab6115a20a_9w9e0g0a0m3e3.jpg',
    videoUrl: 'https://wegame.gtimg.com/g.2-r.37dc5/d6ad6734-01ac-4d2a-a1cb-596cb0201e96_9w9e0g0a0m3e3.mp4',
  },
])

const active = ref(0)
// 设置定时器来自动切换轮播
let intervalId: any
const videoRef = ref<any>(null)
const showVideo = ref(false)

// 开始自动轮播
const startAutoPlay = () => {
  intervalId = setInterval(() => {
    showVideo.value = false
    active.value = (active.value + 1) % imgList.value.length
    handleTransitionEnd(active.value)
  }, 7000)
}

// 停止自动轮播
const stopAutoPlay = () => {
  clearInterval(intervalId)
}

// 当鼠标进入时停止轮播
const onMouseEnter = (index: number) => {
  stopAutoPlay()
  active.value = index
  showVideo.value = false
  if (videoRef.value && imgList.value[index].videoUrl) {
    setTimeout(() => {
      showVideo.value = true
    }, 1000)
  }
}

// 当鼠标离开时继续轮播
const onMouseLeave = () => {
  startAutoPlay()
}

const handleTransitionEnd = (index: number) => {
  if (index === active.value && imgList.value[index].videoUrl) {
    const videoEl = videoRef.value
    if (videoEl && imgList.value[index].videoUrl) {
      setTimeout(() => {
        showVideo.value = true
      }, 1000)
    }
  }
}

onMounted(() => {
  startAutoPlay()
  handleTransitionEnd(0)
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped lang="scss">
.nbanner-modulea {
  margin-top: -94px;
  margin-bottom: 114px;
  .nbanner-modulea-inner {
    width: 1000px;
    height: 630px;
    margin: 0 auto;
    cursor: pointer;
  }
  .nbmodulea-box {
    height: 100%;
    position: relative;
    z-index: 12;
    cursor: pointer;
    .nbmodulea-box-cont {
      position: absolute;
      bottom: -94px;
      left: 0;
    }
    .nbmodulea-menulist {
      width: 1000px;
      white-space: nowrap;
      height: 134px;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: default;
    }
    .nbmodulea-menulist-item {
      display: inline-block;
      width: 86px;
      height: 134px;
      margin-right: 16px;
      cursor: pointer;
      position: relative;
      background: #fff;
      padding: 2px;
      box-sizing: border-box;
      border-radius: 2px;
      transition:
        transform 0.2s ease-in-out,
        box-shadow 0.2s ease-in-out,
        -webkit-transform 0.2s ease-in-out,
        -webkit-box-shadow 0.2s ease-in-out;
      &.kvimg {
        width: 187px;
        height: 134px;

        transition:
          transform 0.2s ease-in-out,
          box-shadow 0.2s ease-in-out,
          -webkit-transform 0.2s ease-in-out,
          -webkit-box-shadow 0.2s ease-in-out;
      }
      &.active {
        transform: scale(1.13);
        box-shadow: 0 2px 12px #00000029;
        .nbmodulea-menulist-pic,
        .nbmodulea-menulist-gamename {
          opacity: 1;
        }
      }
    }
    .nbmodulea-menulist-pic {
      height: 106px;
      border-radius: 2px;
      position: relative;
      z-index: 2;
      background-color: #e4e4e4;
      transition:
        height 0.25s linear,
        transform 0.25s ease,
        -webkit-transform 0.25s ease;
      overflow: hidden;
      opacity: 0.6;
      .we-image {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        -webkit-animation: unset;
        animation: unset;
        img {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 2px;
          animation: unset;
          display: block;
          object-position: 50% 50%;
          object-fit: cover;
        }
      }
    }
    .nbmodulea-menulist-gamename {
      font-size: 13px;
      line-height: 26px;
      font-weight: 700;
      color: #41454f;
      opacity: 0.8;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      transition: all 0.25s linear;
    }
    .nbmodulea-menulist-labelsuper {
      width: 72px;
      height: 28px;
      position: absolute;
      top: -25px;
      left: 50%;
      margin-left: -36px;
      z-index: 2;
      transition: all 0.2s linear;
    }
  }
}
.nbmodulea-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 636px;
  display: block;
  overflow: hidden;
  width: auto;
  cursor: pointer;
  &::before {
    content: '';
    height: 96px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0.6;
    background: linear-gradient(0deg, rgba(14, 20, 22, 0) 0%, #0e1416 100%);
    z-index: 20;
    pointer-events: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    height: 160px;
    background: linear-gradient(180deg, rgba(236, 235, 238, 0) 0%, #ecebee 100%);
  }
  .nbmodulea-bg-source {
    padding: 0;
    width: 1920px;
    height: 636px !important;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -960px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
    z-index: 10;
    animation: none;
    overflow: hidden;
    pointer-events: none;
  }
  .nbmodulea-bg-list {
    height: 100%;
  }
  .nbmodulea-bg-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .nbmodulea-bg-pic {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .we-image {
      width: 100%;
      height: 706px;
      word-wrap: normal;
      display: inline-block;
      font-size: 0;
      .img {
        margin-top: -70px;
        display: block;
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        -webkit-animation: none !important;
        animation: none !important;
        object-position: 50% 50%;
      }
    }
  }
  .nbmodulea-bg-video {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    transition: opacity 0.25s linear;
    height: 706px;
    video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      animation: none !important;
    }
    &.video-show {
      opacity: 1;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
