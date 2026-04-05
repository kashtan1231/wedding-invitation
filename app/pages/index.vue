<template>
  <NuxtLayout class="home">
    <WHero />
    <WPlace />
  </NuxtLayout>
</template>

<script setup lang="ts">
import WHero from '~/components/W-Hero.vue'
import WPlace from '~/components/W-Place.vue'
</script>

<style lang="scss" scoped>
.home {
  background-color: $gray-light;
}
</style>
