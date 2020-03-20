<template>
  <div class="position-relative">
  
    <swiper
      id="swiper"
      :options="swiperOption"
    >
      <swiper-slide
        v-for="banner in banners"
        :key="banner"
      >
        <img 
        class 
        :src="banner"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper-intro p-2  d-sm-block position-absolute">

      <div class='bglay p-3'>
       <h1> <span>FUN假去那玩</span>
       <div class='typing'>我在<span class="word">好運租車</span>等你!</div>
       </h1>
      </div>

     
    </div>
    <div class="scroll-icon position-absolute d-none d-xl-block">
      <p class="m-0">Scroll</p>
      <p class="text-center"><i class="fal fa-chevron-circle-down faa-falling animated faa-fast"></i></p>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
 import '../../node_modules/swiper/css/swiper.css';

export default {
  data() {
    return {
     
      banners: [
            'img/401.jpg',
            'img/402.jpg',
            'img/403.jpg',
          //  'https://hotaicdn.azureedge.net/toyotaweb/CMS_2020021111245293E188B7.jpg',
        // 'https://images.zi.org.tw/incar/2019/06/27052146/1561584105-698381406bd400f3729c84322c86c226.jpg',
      //  ' https://hotaicdn.azureedge.net/toyotaweb/CMS_2020021111245211220201.jpg',
        // 'https://hotaicdn.azureedge.net/toyotaweb/BANNER_2019051013273645C4E06D.jpg',
        // 'https://www.lexus.com.tw/upload/bnr/201911/201911271404300871CF94.jpg',
          //  ' https://autos.yahoo.com.tw/y/r/w1200/iw/MMT/car/a3544f50dfd9b4ed49fba9b584c836a7_1200.jpg',
        // 'https://scdn.slashgear.com/wp-content/uploads/2020/01/lamborghini-aventador-svj-roadster-04-1280x720.jpg',
        // 'https://www.lexus.com.tw/upload/bnr/201911/201911271346423EDM26UD.jpg',
        // 'https://images.zi.org.tw/incar/2019/06/25004224/1561394543-559c900da5ac650ef192e03cf2390e28.jpg',
        // 'https://hotaicdn.azureedge.net/toyotaweb/BANNER_201907301648331L6QQ6O2.jpg',
        // 'https://tcar.tv/public/upimgs/carnews/Lamborghini/Press/2020/202001/6/SMALL_554586.jpg',
      //  ' https://autos.yahoo.com.tw/y/r/w1200/iw/MMT/car/f18e5e021173ed7441981402bd86219c_1200.jpg'
          
      ],
      swiperOption: {
        loop: true,
        speed: 1500,
        //autoplay為swiper3升級到swiper4格式寫法
        autoplay:{
          stopOnLastSlide:true,
        } ,
        autoplayDisableOnInteraction: false,
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },

};
</script>
<style lang="scss" scoped>
@import "../assets/scss/customMixins.scss";

#swiper {
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @include BS-xl {
      height: 50vh;
    }
  }
}
.swiper-intro {
  top: 30%;
  left: 38%;
  z-index: 10;
}

@media (max-width: 800px) {
  .swiper-intro {
  left: 25%;
}
}

@media (max-width: 500px) {
  .swiper-intro {
  left: 11%;
}
}

.scroll-icon {
  color: white;
  bottom: 5%;
  left: 50%;
  z-index: 10;
}
.bglay{
  background-color: rgba(255,255,255,.35);
  border-radius: 6px;
 
}
span{
  font-weight: 900;
}
h1 {
    color:white;
    background-color: rgba(0, 0, 0, 0.85);
    padding: 6px;
    border-radius: 10px;
    // width: 381px;
    min-height: 90px;
    max-height: 100%;

    div{
      line-height: 1.4;
    }
   
    .word{
      color: wheat;
      font-size: 50px;
    }
    @media (max-width: 500px) {
    .word{
      font-size: 30px;
    }

    }
    .typing {
      width: 9em;
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 3.5s steps(9, end);
      overflow: hidden;
      letter-spacing: 0;
    }
    @keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 9em;
      }
    }
  }

 @media (max-width: 500px) {
    h1{
      font-size: 30px; 
   }

 }



</style>
