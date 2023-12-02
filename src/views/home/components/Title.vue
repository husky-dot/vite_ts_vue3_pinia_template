<template>
  <div class="tui-panel-hd">
    <h2 class="tui-panel-tit">
      {{ title }}
      <div v-if="showDesc" class="widget-iconmore-btnbox">
        <span class="widget-iconmore-btnbox-text">{{ desc }}</span>
        <span class="widget-iconmore-btnbox-icon"></span>
      </div>
    </h2>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  showDesc: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.tui-panel-hd {
  position: relative;
  z-index: 1;
  padding: 0;
  min-height: 30px;
  margin-bottom: 5px;
  height: 70px;
  .tui-panel-tit {
    font-size: 32px;
    line-height: 70px;
    height: 70px;
    max-width: 820px;
    position: relative;
    overflow: visible;
    user-select: none !important;
    font-family: var(--font-family-ffblacktit);
    color: #212121;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    font-weight: bold !important;
  }
  .widget-iconmore-btnbox {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 32px;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
    margin-left: 14px;
    transition: all 0.3s ease;
    overflow: hidden;
    border-radius: 4px 11px;
    user-select: none !important;
    &::after {
      content: '';
      border-radius: 4px 11px;
      border: 1px solid rgba(33, 33, 33, 0.2);
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    &:hover {
      width: 111px;
      .widget-iconmore-btnbox-text {
        display: block;
      }
      .widget-iconmore-btnbox-icon {
        background-color: #fff9;
      }
    }
    &:hover::after {
      width: 100%;
      border: 1px solid #41454f;
      background-color: #41454f;
    }
  }
  .widget-iconmore-btnbox-text {
    display: inline-block;
    font-size: 15px;
    font-weight: 700;
    font-family: var(--font-family-base);
    color: #fff;
    margin-right: 10px;
    display: none;
    transition: all 0.35s ease;
  }
  .widget-iconmore-btnbox-icon {
    display: inline-block;
    width: 9px;
    height: 22px;
    mask-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAmCAYAAADJJcvsAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgBrZaxctNAEIZ3FWeG0iWlInsmdmc6SgmSTGhAPAHJG5AnIDxBeAPCE1hmMsMwJvjo6BCdXdg+upSmY4ZJll2NZBL7TtKN8xfS6vb0aU+3t3cA960wjJuwgTA8jH28pj7bPUDQRPhSDZMUHOUtISICH4FG4X7cA0d5S8h/NRGpL5GCgwSk1lolshuOzAHm0V885rveFIZy4RnzcZt+sGmauZQ/FimVLMpAMjTgTpoAIzZNnXv8kVFVeniFIVOew0zqeQ16DyXauv2gZ+Mrv9X9xeON13oidIJWx5/PJoNKUA5LrTCOLGjvNufTyedKUAELgq5EEa578bHf3kU9nahKkGg+G3+zwZBX1irMCqoFC7q/OfrvlaBKGMKh3+5qPR3/RKipaO/5Ob/5yuBacMLuVEZUSM8myU6rE7Lpr7ge8EL744GDuFa9NbUj4lHtoRWK9l+Qqd0porL15gSCbWO2i9LaoKy2A52ZfESU1PpHGYSLnBQ7g1tLvWpsCAG6uT5R6kKXDk1+bjkEj9TlRSJ2aURcGftWCNGpuhx8KJ6tEUUHvCTAVEZyyJePd5LTCHpyEJ8CGdeVESJCE4Q7v7FA3jHkxOS7Awr34te8y55ZOp5/HQ6OwaIlKHwax+hl5wCT0tFw8AhKlM2aHBo4a23bTbZBQoW28tT/xPZDg1+y9hlvoFdVoEZ+rPEtENmqNdSQ6VjjDClAaqVt4QrJQHKs4ZKXLiMBd4joH1IoAkR8wvwdAAAAAElFTkSuQmCC);
    mask-repeat: no-repeat;
    mask-size: 100% auto;
    mask-position: center center;
    background-color: #41454f;
    transition: all 0.3s ease;
    margin-top: -1px;
  }
}
</style>
