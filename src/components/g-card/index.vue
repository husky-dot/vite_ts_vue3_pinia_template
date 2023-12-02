<template>
  <div class="g-card">
    <div class="bg-wrapper">
      <img src="//wegame.gtimg.com/g.2008074-r.ebfea/info/844a6dfdfb5ed55565eb1b9af89ac00d.jpg/320" alt="桃花源记2" />
    </div>
    <div class="content-info">
      <div class="title">桃花源记2</div>
      <div class="desc">回合制/新游</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.g-card {
  position: relative;
  width: 100%;
  height: auto;
  background-color: #fff;
  transform: translateZ(0);
  border-radius: 12px;
  overflow: hidden;
  transition: all linear 0.2s;
  padding: 4px;
  box-sizing: border-box;
	padding-bottom: 0;

  .bg-wrapper {
    position: relative;
    margin: 0 auto;
    display: block;
    border-radius: 8px;
    width: 100%;
    height: 178px;
    background-color: #e4e4e4;
    background-repeat: no-repeat;
    overflow: hidden;
    img {
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
      object-position: 50% 50%;
      transition: all 0.15s ease-in;
      border-radius: 8px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .content-info {
    padding: 15px 10px;
		padding-bottom: 5px;;
    .title {
      color: #41454f;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .desc {
      line-height: 22px;
      margin-bottom: 10px;
      color: #757575;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
