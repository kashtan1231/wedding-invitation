<template>
  <div class="place">
    <div class="place__wrapper">
      <h3 class="place__text">
        <span>Дорогі!</span>
        <span>
          Ви — не просто друзі.<br />Ви — частина нашої історії: наших щирих розмов до світанку,
          сміху, тепла й підтримки в найважливіші моменти.
        </span>
        <span>
          Сьогодні ми створюємо нову історію — нашу сім’ю. <br />
          І нам по-справжньому важливо, щоб ви були поруч у цей день.
        </span>
        <span>
          З радістю запрошуємо вас розділити з нами момент, який стане одним із найцінніших у нашому
          житті.
        </span>
      </h3>

      <h1 class="place__date">
        02.07.2026 <img src="~/assets/imgs/heart.png" class="place__date-heart" alt="heart" />
      </h1>

      <h4 class="place__location">
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
.place {
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

  @include respond-to('mobile') {
    // background-position: center;
  }

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
  }

  &__date {
    position: relative;
    margin-top: 204px;
    font-family: $font-family-additional;
    text-align: center;

    &-heart {
      position: absolute;
      top: 50%;
      left: 50%;
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
