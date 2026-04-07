<template>
  <NuxtLayout class="home">
    <WHero />
    <WPlace />
    <WInfo />
  </NuxtLayout>
</template>

<script setup lang="ts">
import WHero from '~/components/W-Hero.vue'
import WPlace from '~/components/W-Place.vue'
import WInfo from '~/components/W-Info.vue'
</script>

<style lang="scss" scoped>
.home {
  background-color: $gray-light;
}
</style>
