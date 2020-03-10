<template>
  <section
    id="followUs"
    class="follow d-flex align-items-center"
  >
    <div class="container">
      <h3 class="h5 text-center mb-3">
        <span class="font-weight-bold">Follow Us</span>
      </h3>
      <div class="row">
        <div class="col">
          <div class="follow-btn text-center d-flex justify-content-center">
            <a
              class="facebook d-block h3 p-3"
               href="https://google.com" 
              title="Facebook"
              v-scroll-reveal="{origin: 'top',delay: 2000}"
            >
             
              <img src="https://i.imgur.com/uTlC65S.png" width='35px'>
            </a>
            <a
              class="twitter d-block h3 p-3"
              href="https://google.com"
              title="Twitter"
              v-scroll-reveal="{origin: 'right',delay: 1500}"
            >
              
              <img src="https://i.imgur.com/aZ0EvAw.png" width="35px">
            </a>
            <a
              class="instagram d-block h3 p-3"
              href="https://google.com"
              title="Instagram"
              v-scroll-reveal="{origin: 'left',delay: 1000}"
            >
              
              <img src="https://i.imgur.com/heDlRrX.png" width="35px" >
            </a>
            <a
              class="youTube d-block h3 p-3"
              href="https://google.com"
              title="YouTube"
              v-scroll-reveal="{origin: 'top',delay: 500}"
            >
              
                <img src="https://i.imgur.com/WDC9RxE.png" width="35px" >
            </a>

            <a
              class="github d-block h3 p-3"
              href="https://google.com"
              title="Github"
              v-scroll-reveal="{origin: 'right',delay: 0}"
            >
            
              <img src="https://i.imgur.com/StPdd35.png" width="35px">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isHover: false,
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/customMixins.scss";
#followUs {
  height: 70vh;
  @include BS-xl {
    height: 30vh;
  }
}
</style>
