<template>
  <div class="info">
    <div class="info__wrapper">
      <h1 class="info__title">Timing</h1>

      <div class="info__timing">
        <h3>
          <b>13:00</b> <br />
          ЗБІР ГОСТЕЙ
        </h3>

        <h3>
          <b>14:00</b> <br />
          ЦЕРЕМОНІЯ
        </h3>
      </div>

      <h1 class="info__title">Details</h1>

      <h3 class="info__description">
        Ми здогадуємося, що після отримання запрошення у вас можуть виникнути деякі запитання
      </h3>

      <div class="info__details">
        <div v-for="(item, index) in detailsList" :key="item" class="item">
          <h1 class="item__number">0{{ index + 1 }}</h1>
          <h4 class="item__text" v-html="item"></h4>
        </div>
      </div>

      <h1 class="info__title info__title--dress-code">
        dress code dress code dress code dress code dress code dress code
      </h1>

      <h3 class="info__description"
        >НАМ БУДЕ ДУЖЕ ПРИЄМНО, ЯКЩО ПРИ ВИБОРІ СВОГО ВБРАННЯ ВИ ДОТРИМАЄТЕСЯ НАШОЇ ПАЛІТРИ:
      </h3>

      <div class="info__dress-code">
        <img class="info__dress-code-img" src="~/assets/imgs/palette.webp" alt="palette" />
        <img class="info__dress-code-img" src="~/assets/imgs/men.webp" alt="men" />
        <img class="info__dress-code-img" src="~/assets/imgs/hah-woman.webp" alt="hah women" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const detailsList = [
  'Що дарувати? <br/> Як подарунок будемо раді вкладу до бюджету нашої родини. <br/> Він точно допоможе втілити нашу мрію у реальність!',
  'Просимо вас не дарувати нам квіти, адже ми не встигнемо насолодитися їхньою красою. Приємним компліментом для нас замість квітів буде пляшка вина для нашої сімейної винотеки.',
  'Ми будемо вдячні, якщо ви утримаєтесь від вигуків «Гірко!». Адже поцілунок - це прояв почуттів, а не традиція, яка має бути «за розкладом».',
]
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('~/assets/imgs/info.png');
  background-repeat: no-repeat;
  background-size: cover;

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    padding: 100px 16px;
  }

  &__title {
    font-weight: 500;
    color: $red;
    text-align: center;

    &--dress-code {
      margin: 160px 0 80px;
      font-family: $font-family-additional;
      line-height: 1;
      text-transform: lowercase;
      rotate: -12deg;

      @include respond-to('mobile') {
        margin: 80px -100px 40px;
      }
    }
  }

  &__timing {
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    margin: 80px 0 160px;
    color: $red;
    text-align: center;

    @include respond-to('mobile') {
      gap: 32px;
      margin: 40px 0 80px;
    }
  }

  &__description {
    margin-top: 80px;
    color: $red;
    text-align: center;

    @include respond-to('mobile') {
      margin-top: 40px;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin: 80px auto 0;

    @include respond-to('mobile') {
      gap: 24px;
      margin-top: 40px;
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      color: $red;

      &:nth-child(odd) .item__number {
        margin-left: auto;
      }
    }
  }

  &__dress-code {
    display: flex;
    flex-direction: column;
    gap: 48px;
    align-items: center;
    margin-top: 64px;

    @include respond-to('mobile') {
      gap: 24px;
      margin-top: 32px;
    }

    &-img {
      width: 100%;
      max-width: 600px;
    }
  }
}
</style>
