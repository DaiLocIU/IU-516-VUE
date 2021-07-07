<template>
  <div class="middle-header">
    <div class="middle-header-wrapper">
      <SliderMini />
      <h1>
        <img class="banner_madeedam" :src="require('../../assets/img/madeedam.jpg')" alt="">
      </h1>
      <SearchWrapper />
    </div>
  </div>
</template>

<script>
import SliderMini from './SliderMini.vue';
import SearchWrapper from './SearchWrapper.vue';

export default {
  components: {
    SearchWrapper,
    SliderMini,
  },
  name: 'MiddleInHeader.vue',
};
</script>

<style lang="scss" scoped>
.middle-header {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .middle-header-wrapper {
    width: 100%;
    max-width: 1200px;
    padding-inline: 10px;
    padding-block: 25px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .banner_madeedam {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      height: 90px;
      width: 300px;
    }
  }
}
</style>
