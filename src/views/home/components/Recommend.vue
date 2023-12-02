<template>
  <div class="panel-recommend-games">
    <Title title="游戏推荐" :show-desc="false" />
    <div class="grid grid-cols-3 gap-[20px]">
			<GCard></GCard>
			<GCard></GCard>
			<GCard></GCard>
			<GCard></GCard>
			<GCard></GCard>
			<GCard></GCard>
		</div>
  </div>
</template>

<script setup lang="ts">
import Title from './Title.vue'
</script>

<style scoped lang="scss">
.panel-recommend-games {
  width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 50;
}
</style>
