<template>
  <div class="new-game">
    <div class="skin-panel-inner">
      <Title title="新游发布" desc="更多游戏" />
      <div class="tui-panel-bd">
        <div class="gscroll">
          <div class="gscroll-cont">
            <div class="gscroll-title-list" :style="{ transform: `translate3d( ${diff}px, 0px, 0px)` }">
              <div class="gscroll-title-list-inner">
                <div class="gscroll-title-list-item" v-for="(item, index) in imgList" :key="index" style="width: 204px">
                  <div class="future-act-item-date">
                    <div class="gscroll-title-date" style="transform: translate3d(0px, 0px, 0px)">
                      <strong class="date-num">{{ item.label }}</strong>
                    </div>
                    <div class="gscroll-title-desc" style="transform: translate3d(0px, 0px, 0px)">
                      <span class="future-date-num-ico"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="gscroll-cont-list" :style="{ transform: `translate3d(${diff}px, 0px,  0px)` }">
              <li v-for="(item, index) in imgList" :key="index">
                <div class="future-act-item">
                  <div class="widget-gcard widget-gcard--yg widget-gcard--gamevideo">
                    <div class="widget-gcard-wp">
                      <div class="widget-gcard-cover">
                        <a href="/store/2001879">
                          <div class="we-image we-image--square">
                            <img :src="item.url" alt="" class="we-image-figure" />
                          </div>
                        </a>

                        <div class="widget-futureyg-act only-title">
                          <span class="widget-futureyg-act-desc highlight">即将上线</span>
                        </div>
                      </div>
                      <div class="widget-gcard-info-wrap">
                        <div class="widget-gcard-info">
                          <div class="widget-gcard-tit">
                            <span>{{ item.name }}</span>
                            <!---->
                          </div>
                          <div class="widget-gcard-extra">
                            <div class="widget-gprice gprice--text">
                              <div class="widget-gprice-text">
                                <span class="widget-gprice-content">{{ item.remark }}</span>
                              </div>
                            </div>
                            <!---->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="gscroll-scrollbar">
            <a class="gscroll-scrollbar-arrow gscroll-scrollbar-arrow--prev" @click="handlePrev"></a>
            <div class="gscroll-scrollbar-inner">
              <div class="gscroll-scroll-track"></div>
              <div
                ref_key="scrollBtnRef"
                class="gscroll-scroll-button"
                :style="{ transform: `translateX(${scrollButtonPosition}px)`, width: '133.333px' }"
                @mousedown="handleMouseDown"
              >
                <a class="gscroll-scroll-button-inner"></a>
              </div>
            </div>
            <a class="gscroll-scrollbar-arrow gscroll-scrollbar-arrow--next" @click="handleNext"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Title from './Title.vue'

const imgList = ref([
  {
    label: '09.08',
    url: 'https://image.sop.qq.com/rid.2001446-r.b5807/4c4f4c03-35b9-4e03-9b0c-d22576bc8ec6.png',
    name: '重生边缘',
    remark: '免费开玩',
  },
  {
    label: '09.09',
    url: '//wegame.gtimg.com/g.2002001-r.0a88a/info/242fed5441dbebe2e26be76ef87d449a.jpg/184',
    name: '终极钓鱼模拟器',
    remark: '免费开玩',
  },
  {
    label: '09.10',
    url: 'https://wegame.gtimg.com/g.2001642-r.c5bc9/f0cf3d6e-111b-469d-b0cc-82677005bdc2.png',
    name: '蛮荒志异：起源',
    remark: '免费开玩',
  },
  {
    label: '09.11',
    url: 'https://wegame.gtimg.com/g.2001963-r.7fd08/0ff358d6-b15e-4b04-b9a8-460e194d880e.jpg',
    name: '疯狂伐木工',
    remark: '免费开玩',
  },
  {
    label: '09.12',
    url: 'https://wegame.gtimg.com/g.2001142-r.aa610/c4baa285-c341-45d7-90c9-4e380e911620.jpg',
    name: '从军',
    remark: '免费开玩',
  },
  {
    label: '09.13',
    url: 'https://gcloud.sqsd.qq.com/wegame/rid.2001743-r.81681/831d45e2-c2b1-4e59-b23d-1112710cf964.jpg',
    name: '石器时代：觉醒',
    remark: '免费开玩',
  },
  {
    label: '09.14',
    url: '//wegame.gtimg.com/g.2001879-r.5f8ff/info/c96a709df5354589a3c40d47ad536444.png/184',
    name: '全民街篮',
    remark: '免费开玩',
  },
  {
    label: '09.15',
    url: '//wegame.gtimg.com/g.2001879-r.5f8ff/info/c96a709df5354589a3c40d47ad536444.png/184',
    name: '全民街篮',
    remark: '图形工厂',
  },
  {
    label: '09.16',
    url: '//wegame.gtimg.com/g.2001929-r.f444a/info/093511857542dacfe816e541e98e6cad.jpg/184',
    name: '湮灭线',
    remark: '免费开玩',
  },
  {
    label: '09.17',
    url: '//wegame.gtimg.com/g.2001833-r.fd299/info/32505d8a2d0a88a97859a0ad60d44fe1.jpg/184',
    name: '白荆回廊',
    remark: '免费开玩',
  },
  {
    label: '09.18',
    url: '//wegame.gtimg.com/g.2001916-r.55884/info/b8d7f923fb23b0506c5dd32464d6b945.jpg/184',
    name: '野蛮人大作战2',
    remark: '免费开玩',
  },
  {
    label: '09.19',
    url: 'https://dlcdn.td2.qq.com/rid.2000821-r.0385b/a4d32c0f-8622-4953-9082-f3d896320a2d.jpg',
    name: '全境封锁2',
    remark: '免费开玩',
  },
  {
    label: '09.20',
    url: 'https://wegame.gtimg.com/g.2001992-r.e203b/14308689-1c37-4d04-9c8d-2e0ce1dd789b.jpg',
    name: '奇迹降临',
    remark: '免费开玩',
  },
  {
    label: '09.21',
    url: '//wegame.gtimg.com/g.2002022-r.cea36/info/f94f5aa73618e16ba56c279499002aa2.png/184',
    name: '避难所',
    remark: '免费开玩',
  },
  {
    label: '09.22',
    url: 'https://wegame.gtimg.com/g.2001879-r.5f8ff/7a292c26-b749-4f93-a0fb-5bc20f84c609.jpg',
    name: '全民街篮',
    remark: '敬请期待',
  },
])

const diff = ref(0)
// 步长
const step = 204

const scrollButtonPosition = ref(0)

// 假设滚动条的总宽度是某个固定值
const scrollbarWidth = 400 // 示例宽度，根据实际情况调整
const scrollButtonWidth = 133.333 // 按钮的宽度

const isDragging = ref(false)
let startMouseX = 0

// 总长度
const totalWidth = computed(() => {
  return imgList.value.length * step
})
// 固定步长
const fixedLength = computed(() => {
  return 5 * step
})
// 可移动的长度
const moveLength = computed(() => {
  return totalWidth.value - fixedLength.value
})

const updateScrollButtonPosition = () => {
  if (totalWidth.value < fixedLength.value) {
    // 如果总宽度小于或等于固定长度，不需要移动滚动条按钮
    scrollButtonPosition.value = 0
    return
  }

  // 计算内容滚动的比例
  // 确保 diff 值不会导致无效的滚动比例
  let scrollRatio = Math.max(0, Math.min(-diff.value / moveLength.value, 1))

  // 计算滚动条按钮的最大移动距离
  const maxButtonMove = scrollbarWidth - scrollButtonWidth // 这里使用您提供的 400 作为 scrollbarWidth

  // 根据比例更新按钮位置
  scrollButtonPosition.value = scrollRatio * maxButtonMove
}

const handlePrev = () => {
  const diffStep = diff.value + step * 2
  if (diffStep <= 0) {
    diff.value = diffStep
  } else {
    // 如果已经到达最左端，可以选择将 diff 设置为 0 或者保持当前状态
    diff.value = 0
  }
  updateScrollButtonPosition()
}

const handleNext = () => {
  const diffStep = diff.value - step * 2
  if (Math.abs(diffStep) + fixedLength.value > totalWidth.value) {
    return
  }
  diff.value = diffStep
  updateScrollButtonPosition()
}

const handleMouseDown = (event: MouseEvent) => {
  isDragging.value = true
  startMouseX = event.clientX
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)

  // 计算当前滚动条按钮位置相对于初始位置的偏移
  const currentButtonOffset = scrollButtonPosition.value / (scrollbarWidth - scrollButtonWidth)
  // 根据当前按钮位置偏移计算起始鼠标位置
  startMouseX = event.clientX - currentButtonOffset * (scrollbarWidth - scrollButtonWidth)
}
// 鼠标移动时的事件处理函数
const handleMouseMove = (event: MouseEvent) => {
  if (!isDragging.value) return

  const dx = event.clientX - startMouseX // 计算鼠标移动的距离
  const moveRatio = dx / (scrollbarWidth - scrollButtonWidth) // 计算移动比例
  const totalMovableLength = totalWidth.value - fixedLength.value // 计算总可移动长度

  let newDiff = -moveRatio * totalMovableLength // 根据比例计算新的 diff 值
  // // 确保 diff 在有效范围内
  diff.value = Math.max(-totalMovableLength, Math.min(0, newDiff))

  updateScrollButtonPosition() // 更新滚动条按钮位置
}
const handleMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  // 调整 diff 为 step 的倍数
  diff.value = Math.round(diff.value / step) * step
  diff.value = Math.max(-totalWidth.value + fixedLength.value, Math.min(0, diff.value))

  updateScrollButtonPosition() // 更新滚动条按钮位置
}
</script>

<style scoped lang="scss">
.gscroll * {
  user-select: none !important;
}
.new-game {
  width: 1000px;
  margin: 0 auto;
  padding-bottom: 18px;
  position: relative;
  z-index: 50;
  .tui-panel-bd {
    height: 462px;
  }
  .gscroll {
    position: relative;
    height: 438px;
  }
  .gscroll-cont {
    overflow: hidden;
    position: relative;
    z-index: 10;
    transform: translateZ(0);
    height: 406px;
  }
  .gscroll-title-list-inner {
    white-space: nowrap;
  }
  .gscroll-title-list-item {
    display: inline-block;
    vertical-align: top;
    padding-right: 20px;
  }
  .future-act-item-date {
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .date-num {
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    font-family: din;
    font-weight: 500;
    color: #41454f;
    font-weight: bold;
  }
  .gscroll-title-desc {
    flex: 1;
    padding-top: 5px;
    margin-left: 5px;
    .future-date-num-ico {
      position: relative;
      display: flex;
      width: 100%;
      height: 8px;
      &::before {
        content: '';
        display: block;
        width: 15px;
        height: 8px;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAYCAYAAACFms+HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4RDU3MDQ5RDc3MDExRUQ5ODBBRkU1QkVEODY3MTJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4RDU3MDRBRDc3MDExRUQ5ODBBRkU1QkVEODY3MTJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NThENTcwNDdENzcwMTFFRDk4MEFGRTVCRUQ4NjcxMkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NThENTcwNDhENzcwMTFFRDk4MEFGRTVCRUQ4NjcxMkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aSj3CAAAAnElEQVR42uzU0QmAIBAGYNugEdqgNsgR2qBRdANHchRHcIQ64QIJXyr/4OAOfnw7P+V0MDLKUmZeF8qI2GSiOF6/VMF5SqYcjXRHJ26cQODu8Br9Fm5vPa6UQwTK3ntUWuino+Ib4EhZUQ8HgS49NuRrR6Aj6tdAogP6X0WgnaIVrWhFK1rRipaCNlLRhrHi0L+Wk4iub1wU+hRgAGLPr5BYGnvAAAAAAElFTkSuQmCC);
        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAYCAYAAACFms+HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4RDU3MDQ5RDc3MDExRUQ5ODBBRkU1QkVEODY3MTJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4RDU3MDRBRDc3MDExRUQ5ODBBRkU1QkVEODY3MTJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NThENTcwNDdENzcwMTFFRDk4MEFGRTVCRUQ4NjcxMkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NThENTcwNDhENzcwMTFFRDk4MEFGRTVCRUQ4NjcxMkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aSj3CAAAAnElEQVR42uzU0QmAIBAGYNugEdqgNsgR2qBRdANHchRHcIQ64QIJXyr/4OAOfnw7P+V0MDLKUmZeF8qI2GSiOF6/VMF5SqYcjXRHJ26cQODu8Br9Fm5vPa6UQwTK3ntUWuino+Ib4EhZUQ8HgS49NuRrR6Aj6tdAogP6X0WgnaIVrWhFK1rRipaCNlLRhrHi0L+Wk4iub1wU+hRgAGLPr5BYGnvAAAAAAElFTkSuQmCC);
        -webkit-mask-size: 100% 100%;
        background-color: #bfbfbf;
      }
      &::after {
        content: '';
        position: absolute;
        left: 15px;
        top: 0;
        right: 0;
        height: 1px;
        background-color: #bfbfbf;
        opacity: 0.9;
      }
    }
  }
  .gscroll-cont-list {
    display: inline-block;
    white-space: nowrap;
    li {
      width: 204px;
      padding-right: 20px;
      display: inline-block;
      vertical-align: top;
    }
    .widget-gcard {
      position: relative;
      width: 184px;
      height: 326px;
      cursor: pointer;
      transition: all 0.3s linear;
      border-radius: 4px;
    }
    .widget-gcard-wp {
      position: relative;
      width: 100%;
      height: 100%;
      display: block;
      background-color: #fff;
      overflow: visible;
      border-radius: 6px;
    }
    .widget-gcard-cover {
      position: relative;
      display: block;
      width: 184px;
      height: 250px;
      border-radius: 4px 4px 0 0;
      background-color: #e4e4e4;
      overflow: hidden;
      transform: unset;
      a {
        display: block;
        width: 100%;
        height: 100%;
      }
      .we-image {
        width: 100%;
        height: 100%;
        word-wrap: normal;
        display: inline-block;
        font-size: 0;
      }
    }
    .widget-futureyg-act {
      width: 100%;
      height: 30px;
      line-height: 30px;
      background: rgba(0, 0, 0, 0.7);
      position: absolute;
      bottom: 0;
      box-sizing: border-box;
      z-index: 2;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      transition: background 0.3s linear;
    }
    .widget-futureyg-act-desc {
      position: relative;
      font-size: 12px;
      color: #fff;
      font-weight: 700;
      width: 100%;
      max-width: 100%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      padding: 0 10px;
      box-sizing: border-box;
      &:last-child {
        width: 100%;
        max-width: 100%;
        text-align: center;
      }
      &.highlight {
        color: #212121;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, #fdcb41, #fdcb41), linear-gradient(180deg, #f7ed79 0%, #fec537 100%), #ffe8c6;
        z-index: -1;
        pointer-events: none;
      }
    }
    .widget-gcard-info-wrap {
      position: static;
      height: auto;
      overflow: hidden;
      border-radius: 6px;
    }
    .widget-gcard-info {
      position: static;
      transform: translateY(0);
      padding: 10px 16px 0;
      min-height: auto;
      background: none;
      font-size: 13px;
      color: #757575;
      transition:
        transform 0.2s ease-in-out,
        -webkit-transform 0.2s ease-in-out;
    }
    .widget-gcard-tit {
      font-size: 17px;
      margin: 0 0 4px;
      display: flex;
      align-items: center;
      height: 25px;
      line-height: 25px;
      color: #41454f;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .widget-gcard-extra {
      margin: 0 0 10px;
    }
    .widget-gprice {
      display: flex;
      align-items: center;
      min-height: 21px;
      font-size: 0;
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
      padding-right: 0;
    }
    .widget-gprice-content {
      color: #757575;
      font-size: 14px;
      font-weight: 400;
    }
  }

  .gscroll-scrollbar {
    position: absolute;
    left: 300px;
    right: 300px;
    bottom: 15px;
    .gscroll-scrollbar-arrow {
      width: 40px;
      height: 32px;
      position: absolute;
      top: 50%;
      margin-top: -6px;
      opacity: 1;
      cursor: pointer;
      transition: opacity 0.15s linear;
      border-radius: 6px;
      &::before {
        content: '';
        width: 40px;
        height: 32px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 4px 11px;
        border: 1px solid rgba(33, 33, 33, 0.2);
        background-color: transparent;
        transition: background-color 0.3s ease;
      }
      &::after {
        content: '';
        width: 9px;
        height: 22px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -11px 0 0 -5px;
        border: unset;
        -webkit-mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAmCAYAAADJJcvsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgBrZaxctNAEIZ3FWeG0iWlInsmdmc6SgmSTGhAPAHJG5AnIDxBeAPCE1hmMsMwJvjo6BCdXdg+upSmY4ZJll2NZBL7TtKN8xfS6vb0aU+3t3cA960wjJuwgTA8jH28pj7bPUDQRPhSDZMUHOUtISICH4FG4X7cA0d5S8h/NRGpL5GCgwSk1lolshuOzAHm0V885rveFIZy4RnzcZt+sGmauZQ/FimVLMpAMjTgTpoAIzZNnXv8kVFVeniFIVOew0zqeQ16DyXauv2gZ+Mrv9X9xeON13oidIJWx5/PJoNKUA5LrTCOLGjvNufTyedKUAELgq5EEa578bHf3kU9nahKkGg+G3+zwZBX1irMCqoFC7q/OfrvlaBKGMKh3+5qPR3/RKipaO/5Ob/5yuBacMLuVEZUSM8myU6rE7Lpr7ge8EL744GDuFa9NbUj4lHtoRWK9l+Qqd0porL15gSCbWO2i9LaoKy2A52ZfESU1PpHGYSLnBQ7g1tLvWpsCAG6uT5R6kKXDk1+bjkEj9TlRSJ2aURcGftWCNGpuhx8KJ6tEUUHvCTAVEZyyJePd5LTCHpyEJ8CGdeVESJCE4Q7v7FA3jHkxOS7Awr34te8y55ZOp5/HQ6OwaIlKHwax+hl5wCT0tFw8AhKlM2aHBo4a23bTbZBQoW28tT/xPZDg1+y9hlvoFdVoEZ+rPEtENmqNdSQ6VjjDClAaqVt4QrJQHKs4ZKXLiMBd4joH1IoAkR8wvwdAAAAAElFTkSuQmCC);
        mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAmCAYAAADJJcvsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgBrZaxctNAEIZ3FWeG0iWlInsmdmc6SgmSTGhAPAHJG5AnIDxBeAPCE1hmMsMwJvjo6BCdXdg+upSmY4ZJll2NZBL7TtKN8xfS6vb0aU+3t3cA960wjJuwgTA8jH28pj7bPUDQRPhSDZMUHOUtISICH4FG4X7cA0d5S8h/NRGpL5GCgwSk1lolshuOzAHm0V885rveFIZy4RnzcZt+sGmauZQ/FimVLMpAMjTgTpoAIzZNnXv8kVFVeniFIVOew0zqeQ16DyXauv2gZ+Mrv9X9xeON13oidIJWx5/PJoNKUA5LrTCOLGjvNufTyedKUAELgq5EEa578bHf3kU9nahKkGg+G3+zwZBX1irMCqoFC7q/OfrvlaBKGMKh3+5qPR3/RKipaO/5Ob/5yuBacMLuVEZUSM8myU6rE7Lpr7ge8EL744GDuFa9NbUj4lHtoRWK9l+Qqd0porL15gSCbWO2i9LaoKy2A52ZfESU1PpHGYSLnBQ7g1tLvWpsCAG6uT5R6kKXDk1+bjkEj9TlRSJ2aURcGftWCNGpuhx8KJ6tEUUHvCTAVEZyyJePd5LTCHpyEJ8CGdeVESJCE4Q7v7FA3jHkxOS7Awr34te8y55ZOp5/HQ6OwaIlKHwax+hl5wCT0tFw8AhKlM2aHBo4a23bTbZBQoW28tT/xPZDg1+y9hlvoFdVoEZ+rPEtENmqNdSQ6VjjDClAaqVt4QrJQHKs4ZKXLiMBd4joH1IoAkR8wvwdAAAAAElFTkSuQmCC);
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: 100% auto;
        mask-size: 100% auto;
        -webkit-mask-position: center center;
        mask-position: center center;
        background-color: #41454f;
        -webkit-transition: background-color 0.3s ease;
        transition: background-color 0.3s ease;
      }
      &.gscroll-scrollbar-arrow--prev {
        margin-top: -15px;
        left: -50px;
      }
      &.gscroll-scrollbar-arrow--prev::before {
        border-radius: 11px 4px;
      }
      &.gscroll-scrollbar-arrow--prev::after {
        transform: rotate(180deg);
      }
      &.gscroll-scrollbar-arrow--next {
        margin-top: -15px;
        right: -50px;
      }
    }
    .gscroll-scrollbar-inner {
      position: relative;
      .gscroll-scroll-track {
        position: relative;
        height: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        overflow: hidden;
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 100%;
          height: 3px;
          display: block;
          background-color: #0000001a;
          border-radius: 10px;
          overflow: hidden;
        }
      }
      .gscroll-scroll-button {
        position: absolute;
        top: 50%;
        left: 0;
        height: 7px;
        margin-top: -3.5px;
        width: 40px;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 5;
        cursor: pointer;
        border-radius: 200px;
      }
      .gscroll-scroll-button-inner {
        position: absolute;
        inset: -20px -10px;
      }
    }
  }
}
</style>
