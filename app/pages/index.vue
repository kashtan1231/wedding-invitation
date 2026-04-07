<template>
  <NuxtLayout class="home">
    <WHero />
    <WPlace />
    <WInfo />
    <WRemain />
  </NuxtLayout>
</template>

<script setup lang="ts">
import WHero from '~/components/W-Hero.vue'
import WPlace from '~/components/W-Place.vue'
import WInfo from '~/components/W-Info.vue'
import WRemain from '~/components/W-Remain.vue'
</script>

<style lang="scss" scoped>
.home {
  background-color: $gray-light;
}
</style>
