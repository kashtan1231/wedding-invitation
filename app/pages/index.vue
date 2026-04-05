<template>
  <NuxtLayout class="home">
    <Hero />
  </NuxtLayout>
</template>

<script setup lang="ts">
import Hero from '~/components/W-Hero.vue'
</script>

<style lang="scss" scoped>
.home {
  background-color: $gray-light;
}
</style>
