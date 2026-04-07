<template>
  <div class="place">
    <div class="place__wrapper">
      <h3 class="place__text">
        <span>Дорогі!</span>
        <span>
          Ви — частина нашої історії: наших щирих розмов до світанку, сміху, тепла й підтримки.
        </span>
        <span>
          Сьогодні ми створюємо нову історію — нашу сім'ю. <br />
          І нам по-справжньому важливо, щоб ви були поруч у цей день.
        </span>
        <span>
          З радістю запрошуємо вас розділити момент, який стане одним із найцінніших у нашому житті.
        </span>
      </h3>

      <h1 class="place__date">
        02.07.2026 <img src="~/assets/imgs/heart.png" class="place__date-heart" alt="heart" />
      </h1>

      <h4 class="place__location" :class="{ 'place__location--colored': showInfoBg }">
        РЕСТОРАН HARVEST, <br />
        ОБУХІВСЬКЕ ШОСЕ, 50, КОЗИН, <br />
        КИЇВСЬКА ОБЛ.
      </h4>

      <a class="place__map" href="https://maps.app.goo.gl/JfHoksq5C63vuGtH9" target="_blank">
        <img src="~/assets/imgs/show-map.webp" alt="show map" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const showInfoBg = inject<Ref<boolean>>('showInfoBg', ref(false))
</script>

<style lang="scss" scoped>
.place {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;

  // overflow-x: hidden;

  // overflow: hidden auto;

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    padding: 100px 16px;
  }

  &__text {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    text-align: center;
    background: linear-gradient(105deg, #fff 0%, #d8d8d8 50%, #fff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__date {
    position: relative;
    margin-top: 224px;
    font-family: $font-family-additional;
    text-align: center;

    &-heart {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      width: 500px;
      filter: brightness(0) saturate(100%) invert(7%) sepia(89%) saturate(3500%) hue-rotate(335deg)
        brightness(75%);
      transform: translate(-50%, -50%);
    }
  }

  &__location {
    z-index: 1;
    margin-top: 54px;
    text-align: center;
    background: linear-gradient(105deg, #fff 0%, #d8d8d8 50%, #fff 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    &--colored {
      background: none;
      -webkit-text-fill-color: #{$red};
    }
  }

  &__map {
    width: 100%;
    max-width: 400px;
    margin: 100px auto 0;

    img {
      width: 100%;
    }
  }
}
</style>
