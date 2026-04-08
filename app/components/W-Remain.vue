<template>
  <div class="remain" :class="{ 'remain--colored': !showRemainBg }">
    <div class="remain__wrapper">
      <h1
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700 } }"
        class="remain__title"
        >До нашого весілля:</h1
      >
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 200 } }"
        class="remain__timer"
      >
        <span>{{ days }} {{ pluralize(days, 'день', 'дні', 'днів') }}</span>
        <span>{{ hours }} {{ pluralize(hours, 'година', 'години', 'годин') }}</span>
        <span>{{ minutes }} {{ pluralize(minutes, 'хвилина', 'хвилини', 'хвилин') }}</span>
      </div>

      <h3
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 700, delay: 400 } }"
        class="remain__text"
        >просимо підтвердити вашу присутність</h3
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const showRemainBg = inject<Ref<boolean>>('showRemainBg', ref(false))

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

  &--colored {
    .remain__title,
    .remain__text {
      background: none;
      -webkit-text-fill-color: #{$red};
    }

    .remain__timer span {
      background: none;
      -webkit-text-fill-color: #{$red};
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1240px;
    height: 600px;
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

  &__text {
    margin-top: auto;
    font-weight: 500;
    text-align: center;
    background: linear-gradient(105deg, #fff 0%, #a8a8a8 40%, #d4d4d4 60%, #fff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
