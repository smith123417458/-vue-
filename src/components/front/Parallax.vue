<template>
  <section
    id="parallax"
    class="position-relative mb-5"
  >
   
  </section>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
 @import "../../assets/scss/customMixins.scss";

// 視差背景圖
#parallax {
  background: url(https://www.5230.com.tw/product_5230/upload/banner/15589240448wcgGC.jpg)
    fixed no-repeat;
  background-position: bottom bottom;
  background-size: cover;
  min-height: 500px;
  overflow: hidden;

  @include BS-xl {
    background-position: center center;
  }
}

</style>
