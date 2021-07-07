<template>
  <div class="slider-mini">
    <Slider
      class="slider-wrapper"
      v-model="sliderValue"
      :autoplay="true"
      :interval="5000"
      :speed="1000"
    >
      <SliderItem
        v-for="(slide, index) in sliders"
        :key="index"
      >
        <a :href="slide.link">
          <img :src="slide.image" alt="">
        </a>
      </SliderItem>
    </Slider>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider';

export default {
  components: {
    Slider,
    SliderItem,
  },
  data() {
    return {
      sliderValue: 0,
      sliders: [
        {
          // eslint-disable-next-line global-require
          image: require('../../assets/img/banner_eight.jpg'),
          link: '/eight',
        },
        {
          // eslint-disable-next-line global-require
          image: require('../../assets/img/banner_lovepoem.jpg'),
          link: '/lovepoem',
        },
        {
          // eslint-disable-next-line global-require
          image: require('../../assets/img/banner_thepresent.jpg'),
          link: 'the-present',
        },
      ],
    };
  },

};
</script>

<style lang="scss">
.slider-wrapper {
  width: 280px !important;
  height: 74px !important;

  .slider-btn {
    display: none;
  }

  .slider-indicators-center {
    bottom: 10px !important;
    span {
      width: 8px !important;
      height: 8px !important;
    }
    span + span {
      margin-left: 5px;
    }

    .slider-indicator-active {
      background-color: var(--color-black);
    }
  }
}
</style>
