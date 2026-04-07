<template>
  <div class="remain">
    <div class="remain__wrapper">
      <h1 class="remain__title">До нашого весілля:</h1>
      <div class="remain__timer">
        <span>{{ days }} {{ pluralize(days, 'день', 'дні', 'днів') }}</span>
        <span>{{ hours }} {{ pluralize(hours, 'година', 'години', 'годин') }}</span>
        <span>{{ minutes }} {{ pluralize(minutes, 'хвилина', 'хвилини', 'хвилин') }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const pluralize = (n: number, one: string, few: string, many: string) => {
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return one
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few
  return many
}

const { $dayjs } = useNuxtApp()

const WEDDING_DATE = $dayjs('2026-07-02 13:00')

const getDiff = () => {
  const diff = $dayjs.duration(WEDDING_DATE.diff($dayjs()))
  return {
    days: Math.floor(diff.asDays()),
    hours: diff.hours(),
    minutes: diff.minutes(),
  }
}

const { days, hours, minutes } = toRefs(reactive(getDiff()))

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    const updated = getDiff()
    days.value = updated.days
    hours.value = updated.hours
    minutes.value = updated.minutes
  }, 60000)
})

onUnmounted(() => clearInterval(interval))
</script>

<style lang="scss" scoped>
.remain {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:
    linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('~/assets/imgs/main-background.webp');
  background-repeat: no-repeat;
  background-position:
    0 0,
    0 -300px;
  background-size: cover;

  @include respond-to('tablet') {
    background-position: top;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    padding: 100px 16px;
  }

  &__title {
    line-height: 1;
    text-align: center;
    background: linear-gradient(105deg, #fff 0%, #a8a8a8 40%, #d4d4d4 60%, #fff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__timer {
    display: flex;
    gap: 48px;
    justify-content: center;
    margin-top: 48px;
    text-align: center;

    @include respond-to('mobile') {
      gap: 24px;
    }

    span {
      @extend %h2;

      font-weight: 500;
      background: linear-gradient(105deg, #fff 0%, #a8a8a8 40%, #d4d4d4 60%, #fff 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
