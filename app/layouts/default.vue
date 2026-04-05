<template>
  <div class="layout">
    <div class="layout__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  font-family: $font-family-default;
  color: $black;
}
</style>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__wrapper {
    background-image: url('~/assets/imgs/main-background.webp');
    background-repeat: no-repeat;
    background-position: 0 -500px;
    background-size: cover;
  }
}
</style>
