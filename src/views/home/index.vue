<template>
  <div class="relative">
    <GHeader />
    <GSearch />
    <div class="page-store-cont-inner">
      <!-- 轮播 -->
      <Banner />
      <NewGame />
      <Ranking />

      <Recommend />
    </div>
  </div>

  <GFooter class="mt-[60px]" />
</template>

<script setup lang="ts">
import { GHeader, Banner, GSearch, NewGame, Ranking, Recommend } from './components'
</script>

<style scoped lang="scss">
:root {
  --font-family-ffblacktit: 'ffblacktit',
    'system-ui, PingFang SC, Open Sans, calibri, Roboto, verdana, Hiragino Sans GB, Microsoft YaHei UI, Microsoft YaHei, sans-serif';
  --font-family-base: system-ui, PingFang SC, Open Sans, calibri, Roboto, verdana, Hiragino Sans GB, Microsoft YaHei UI,
    Microsoft YaHei, sans-serif;
}

.page-store-cont-inner {
  position: relative;
  padding-left: calc(100vw - 100%);
  min-height: 120vh;
}
</style>
