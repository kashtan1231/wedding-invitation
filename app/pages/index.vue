<template>
  <NuxtLayout>
    <div class="home">
      <div class="bg bg--main" :class="{ 'bg--hidden': showInfoBg || showRemainBg }" />
      <div class="bg bg--info" :class="{ 'bg--visible': showInfoBg && !showRemainBg }" />
      <div class="bg bg--remain" :class="{ 'bg--visible': showRemainBg }" />

      <WHero />
      <WPlace />
      <div ref="infoTrigger">
        <WInfo />
      </div>
      <div ref="remainTrigger">
        <WRemain />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import WHero from '~/components/W-Hero.vue'
import WPlace from '~/components/W-Place.vue'
import WInfo from '~/components/W-Info.vue'
import WRemain from '~/components/W-Remain.vue'

const infoTrigger = ref<HTMLElement | null>(null)
const remainTrigger = ref<HTMLElement | null>(null)
const showInfoBg = ref(false)
const showRemainBg = ref(false)

provide('showInfoBg', showInfoBg)
provide('showRemainBg', showRemainBg)

onMounted(() => {
  const infoObserver = new IntersectionObserver(
    ([entry]) => {
      showInfoBg.value = entry.isIntersecting
    },
    { threshold: 0, rootMargin: '0px 0px -50% 0px' }
  )

  const remainObserver = new IntersectionObserver(
    ([entry]) => {
      showRemainBg.value = entry.isIntersecting
    },
    { threshold: 0, rootMargin: '0px 0px -50% 0px' }
  )

  if (infoTrigger.value) infoObserver.observe(infoTrigger.value)
  if (remainTrigger.value) remainObserver.observe(remainTrigger.value)
})
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  flex-direction: column;

  .bg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 110vh;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: opacity 0.8s ease;

    &--main {
      background-image:
        linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url('~/assets/imgs/place.jpg');
      opacity: 1;

      &.bg--hidden {
        opacity: 0;
      }
    }

    &--info {
      background-image: url('~/assets/imgs/info.png');
      opacity: 0;

      &.bg--visible {
        opacity: 1;
      }
    }

    &--remain {
      background-image:
        linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('~/assets/imgs/remain.jpg');
      opacity: 0;

      &.bg--visible {
        opacity: 1;
      }
    }
  }
}
</style>
