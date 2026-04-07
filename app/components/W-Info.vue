<template>
  <div class="info" :class="{ 'info--light': !showInfoBg }">
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

      <h2 class="info__title info__title--dress-code mobile">
        dress code dress code dress code dress code dress code dress code dress code dress code
        dress code dress code dress code dress code dress code dress code
      </h2>

      <h3 class="info__description">
        Ми дуже хочемо, щоб атмосфера свята була цілісною, тому просимо вас дотриматися нашого
        дрес-коду в такій палітрі:
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
const showInfoBg = inject<Ref<boolean>>('showInfoBg', ref(false))

const detailsList = [
  'Що дарувати? <br/> Будемо щиро раді вашому внеску в бюджет нашої родини — це допоможе нам здійснити нашу мрію.',
  'Просимо вас не дарувати нам квіти, адже ми не встигнемо насолодитися їхньою красою. Приємним компліментом для нас буде пляшка вина для нашої сімейної винотеки.',
  'Ми будемо вдячні, якщо ви утримаєтесь від вигуків «Гірко!». Адже поцілунок - це прояв почуттів, а не традиція, яка має бути «за розкладом».',
]
</script>

<style lang="scss" scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  color: $red;
  transition: color 0.8s ease;

  &--light {
    color: $white;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    padding: 100px 16px;
  }

  &__title {
    font-weight: 500;
    color: inherit;
    text-align: center;

    &--dress-code {
      display: block;
      margin: 160px 0 80px;
      font-family: $font-family-additional;
      line-height: 1.5;
      text-transform: lowercase;
      rotate: -12deg;

      @include respond-to('mobile') {
        display: none;
      }

      &.mobile {
        display: none;
        width: 800px;
        margin: 160px -100px 80px;
        line-height: 2;

        @include respond-to('mobile') {
          display: block;
        }
      }
    }
  }

  &__timing {
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    margin: 80px 0 160px;
    color: inherit;
    text-align: center;

    @include respond-to('mobile') {
      gap: 32px;
      margin: 40px 0 160px;
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
    }

    .item {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
      color: inherit;

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
