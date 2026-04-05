<template>
  <div class="hero">
    <div class="hero__wrapper">
      <h3 class="hero__title">Wedding day</h3>
      <h1 class="hero__description">
        <span>Konstantyn</span> <span>+</span> <span class="right">Elyzaveta</span>
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('~/assets/imgs/hero.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @include respond-to('tablet') {
    height: 1030px;
    background-image: url('~/assets/imgs/hero-mobile.webp');
    background-position: 0 -20px;
  }

  @include respond-to('mobile') {
    height: 730px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1240px;
    height: 900px;
    padding: 350px 16px 100px;

    @include respond-to('tablet') {
      padding-top: 550px;
    }

    @include respond-to('mobile') {
      padding-top: 350px;
    }
  }

  &__title {
    font-weight: 500;
    color: $red;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 10px;
    transform: scaleY(1.5);
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
    margin-top: 150px;
    font-family: $font-family-additional;
    color: $red;
    text-transform: none;
    rotate: -12deg;

    @include respond-to('mobile') {
      margin-top: 100px;
    }

    span {
      text-align: center;

      &.right {
        margin-left: 100px;

        @include respond-to('mobile') {
          margin-left: 50px;
        }
      }
    }
  }
}
</style>
