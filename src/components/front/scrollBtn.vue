<template>
  <div>
    <button type="button" class="btn goTop" @click.prevent="backToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  data() {
    return {};
  },
  methods: {
    goTopButton() {
      const scrollPos = $(window).scrollTop();
      const height = $(window).height();
      if (scrollPos >= height) {
        $('.goTop').addClass('goTop-display');
      } else {
        $('.goTop').removeClass('goTop-display');
      }
    },
    backToTop() {
      $('html, body').animate({ scrollTop: 0 }, 600);
    },
  },
  created() {
    window.addEventListener('scroll', this.goTopButton);
  },
};
</script>

<style lang="scss" scoped>

.goTop {
    position: fixed;
    z-index: 100;
    right: 50px;
    bottom: 30px;
    opacity: 0;
    visibility: hidden;
    transition: all 1s;
    width: 50px;
    height: 50px;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    animation: morphing 5s infinite;
    // @include media-breakpoint-down(sm) {
    //   right: 20px;
    //   bottom: 70px;
    // }

    @media (max-width:700px ){
      .goTop{
        right: 20px;
        bottom: 70px;
      }
    }
    &-display {
      visibility: visible;
      opacity: 1;
    }
  }
  
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;
      box-shadow: 15px 15px 50px rgba(0, 0, 0, 0.2);
    }
    25% {
      border-radius: 58% 42% 75% 25%/76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67%/55% 27% 73% 45%;
      box-shadow: -10px -5px 50px rgba(0, 0, 0, 0.2);
    }
    75% {
      border-radius: 33% 67% 58% 42%/63% 68% 32% 37%;
    }
  }


</style>
