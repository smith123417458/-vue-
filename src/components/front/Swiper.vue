<template>
  <div class="position-relative">
 <div class="banner">
      <div class="clouds">    
       <img src="../../assets/img/cloud1.png" style="--i:1;">
       <img src="../../assets/img/cloud2.png" style="--i:2;">
       <img src="../../assets/img/cloud3.png" style="--i:3;">
       <img src="../../assets/img/cloud4.png" style="--i:4;">
       <img src="../../assets/img/cloud5.png" style="--i:5;">   
      </div>

</div>


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
import { gsap } from "gsap";
export default {
  data() {
    return {  
    };
  },

 mounted() {
   gsap.from(".swiper-intro", 0.9, {
      delay: 0,
      opacity: 0,
      x: -1000,
    })
 }
 
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/customMixins.scss";

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
      width: 10em;
      white-space: nowrap;
      border-right: 2px solid transparent;
      animation: typing 3.5s steps(9, end);
      overflow: hidden;
      letter-spacing: 0;
    }
    @media (max-width: 470px) {
    .typing{
      width: 9em;
      }
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
// =====================================================
.banner{
  position: relative;
  width: 100%;
  height: 100vh;
  background:url(../../assets/img/401.jpg);
  background-size: cover;
  background-position: bottom;
   @include BS-xl {
      height: 50vh;
    }
}
.section{
  position: relative;
  padding:75px 100px;
}
.banner .clouds{
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height:100%;
  overflow: hidden;
}
.banner .clouds img{
  position:absolute;
  bottom:0;
  max-width: 100%;
  animation: animate calc(8s * var(--i))  linear infinite;

}

@keyframes animate{
0%{
  transform: translateX(-100%);
}
100%{
  transform: translateX(100%);
}
}


</style>
