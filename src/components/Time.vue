<template>
<div>

  <div class="timeLine pt-3">
    <div class="container">

      <div class="row justify-content-center align-item-center">
        <div class="flagTime col-md-5 my-2 d-flex flex-column
                    justify-content-center align-items-center">
          <div class="flag mb-3 text-success">打靶小遊戲</div>
          <div class=" content text-center text-info mb-2">
            ｢遊戲規則｣<br>
            10秒內,得到180分以下,即可獲得七折優惠碼
          </div>
          
          <br>
          <!-- <div class="time text-primary">我要打靶</div> -->
             <router-link to="/pubgGame" class="btn btn-primary"> 立即開始 </router-link>  
        </div>
        <div class="picture col-md-6 mb-3">
          <div class="box"></div>
          <div class="carousel d-flex justify-content-center
                      align-items-center">
            <div class="swiper-container swiper-container2">
              <div class="swiper-wrapper">
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[0]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[1]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[2]})`,}"></div>
              </div>
              <div class="swiper-pagination "></div>
            </div>
          </div>
        </div>
      </div>

      <div class="row flex-row-reverse flex-row-reverse-expand
                  d-flex justify-content-center align-item-center" >
        <div class="flagTime col-md-5 my-2 d-flex flex-column
                    justify-content-center align-items-center">
          <div class="flag mb-3 text-success">抓牌小遊戲</div>
          <div class=" content text-center text-info mb-2">
            ｢遊戲規則｣<br>
            遊戲開始,電腦會指定牌的花色,接著進行洗牌後,請指出該花色牌的位置
            即可獲得五折優惠碼
          </div>
          <br>
          <!-- <div class="time text-primary">我要抓牌</div> -->
          <router-link to="/cardGame" class="btn btn-primary"> 立即開始 </router-link>  
        </div>
        <div class="picture col-md-6 mb-3">
          <div class="box"></div>
          <div class="carousel d-flex justify-content-center align-items-center">
            <div class="swiper-container swiper-container3">
              <div class="swiper-wrapper">
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[3]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[4]})`,}"></div>
                <div class="swiper-slide bgCover "
                    :style="{backgroundImage :`url(${imgUrl[5]})`,}"></div>
              </div>
              <div class="swiper-pagination "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';

export default {
  data() {
    return {
      imgUrl: [
        'img/2_1_1.jpg',
        'img/2_1_2.jpg',
        'img/2_1_3.jpg',
        'img/2_2_1.jpg',
        'img/2_2_2.jpg',
        'img/2_2_3.jpg',
        'img/2_3_1.jpg',
        'img/2_3_2.jpg',
        'img/2_3_3.jpg',
      ],
    };
  },
  mounted() {
    /* eslint-disable no-unused-vars */
    const swiper2 = new Swiper('.swiper-container2', {
      pagination: '.swiper-pagination',
    });
    /* eslint-disable no-unused-vars */
    const swiper3 = new Swiper('.swiper-container3', {
      pagination: '.swiper-pagination',
    });
    /* eslint-disable no-unused-vars */
    const swiper4 = new Swiper('.swiper-container4', {
      pagination: '.swiper-pagination',
    });
  },
};
</script>

<style scoped>
.timeLine .flagTime .flag{
  padding: 6px 10px;

  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;

  font-size: 1.25rem;

  white-space:nowrap;
  flex-shrink:0;
}
.timeLine .flagTime .time{

  background: white;

  font-size: 1rem;

  white-space:nowrap;
  flex-shrink:0;
}
.timeLine .flagTime .content{
  width:90%;
}

.timeLine .picture{
  height:400px;
  position:relative;
}
.timeLine .picture .box{
  width:90%;
  height:100%;
  position:absolute;
  top:0%;
  right:0%;

  background-color:gray;
}
.timeLine .flex-row-reverse-expand .box{
  left:0%;
}
.timeLine .picture .carousel{
  width:92%;
  height:92%;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);

  border:1px solid white;
  transition:0.5s;
}
.timeLine .picture .carousel:hover{
  border:1px solid gray;
}

.timeLine .swiper-container{
  width:98%;
  height:98%;
  background-color:white;
}

.bgCover{
  background-size: cover;
  background-position: center center;
}

@media screen and (max-width: 992px) {
  .timeLine .picture{
    height:300px;
   
   
  }
}

@media screen and (max-width: 767px) {
  .timeLine .picture{
    height:350px;
    position:relative;
      
  }
}

@media screen and (max-width: 480px) {
  .timeLine .picture{
    height:300px;
    position:relative;
    
  }
}
</style>
