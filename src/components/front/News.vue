<template>
<div>

  <div class="news bgCover"
      :style="{backgroundImage :`url(${imgUrl[newsActive]})` }">
    <div class="mask"></div>
    <div class="display bgCover"
        :style="{backgroundImage :`url(${imgUrl[newsActive]})`,}">
    </div>
    <div class="listBackground bg-white d-flex
                justify-content-end align-items-center">
      <div class="box"></div>
      <ul class="list bg-white d-flex flex-column align-items-start">
        <li @mouseenter="newsActive=0" @click.prevent="">
          <a href="#" class="m-1 bg-white d-flex justify-content-center
                             align-items-center">
            <div  class="date d-flex flex-column justify-content-center
                         align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===0}">
              <p>march</p>
              <h3 class="m-0">9</h3>
            </div>
            <div class="event  px-2  d-flex flex-column justify-content-center
                        align-items-start"
                :class="{'eventActive':newsActive===0}">
              <p>向醫護致敬，憑醫護工作證明享5折優惠。
              </p>
            </div>
          </a>
        </li>
        <li @mouseenter="newsActive=1" @click.prevent="">
          <a href="#" class=" m-1 bg-white d-flex justify-content-center
                              align-items-center">
            <div  class=" date d-flex flex-column justify-content-center
                          align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===1}">
              <p>march</p>
              <h3 class="m-0">21</h3>
            </div>
            <div class="event d-flex px-2 flex-column justify-content-center
                        align-items-start "
                :class="{'eventActive':newsActive===1}">
              <p>
                每日限時限量,機場接送只要$500元
              </p>
            </div>
          </a>
        </li>
        <li @mouseenter="newsActive=2" @click.prevent="">
          <a href="#" class=" m-1 bg-white d-flex justify-content-center
                              align-items-center">
            <div  class=" date d-flex flex-column justify-content-center
                        align-items-center flex-shrink-0"
                  :class="{'dateActive':newsActive===2}">
              <p>march</p>
              <h3 class="m-0">18</h3>
            </div>
            <div class="event px-2 d-flex flex-column justify-content-center
                        align-items-start "
                :class="{'eventActive':newsActive===2}">
              <p>
                包月暢行獨享駕,一車在手自在悠遊,
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      newshover: 'newsoneHover',
      newsActive: 0,
      imgUrl: [
        'img/1_1.jpg',
        'img/1_2.jpg',
        'img/1_3.jpg',
      ],
    };
  },
};
</script>

<style scoped>
.news{
  height:450px;
  position:relative;
}
.news .mask{
  width:100%;
  height:100%;

  position:absolute;
  left:0%;
  top:0%;
  background:rgba(255,255,255, 0.6);

}
.news .display{
  width:35%;
  height:90%;

  position:absolute;
  left:12.5%;
  top:0%;

  border-radius:0 0 2% 2%;
}
.news .listBackground{
  width:35%;
  height:90%;

  position:relative;
  left:52.5%;
  top:10%;
  border-radius:2% 2% 0 0 ;
}
.bgCover{
 background-size: cover;
 background-position: center center;
}

.news .listBackground .box{
  width:35%;
  height:95%;

  position:absolute;
  left: 2%;

  border:1px solid gray;
  z-index: 4;
}
.news .listBackground .list{
  width:95%;
  z-index: 5;
}

.news .listBackground .list a:hover{
  text-decoration: none;
}

.news .list .date{
  width: 3.75rem;
  height: 3.75rem;
  color:gray;
  box-shadow: 1px 1px 2px gray
}
.news .list .date p{
  font-size: 1rem;
}
.news .list .date h3{
  font-size: 1.75rem;
}

.news .list .event{
  color: black;
}
.news .list .event p{
  font-size: 1rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height:1.25rem;
}

.dateActive {
  background-color: gray;
  transition: 0.5s;
}
.dateActive p,.dateActive h3{
  color:white;
}
.eventActive{
  text-decoration: underline;
  transition: 0.5s;
}
.eventActive p{
  color: gray
}

@media screen and (max-width: 992px) {
  .news{
    height:400px;
    position:relative;
  }
}
@media screen and (max-width: 767px) {
  .news{
    height:350px;

    margin-bottom: 350px;
  }
  .news .display{
    width:50%;
    height:85%;

    position:absolute;
    left:25%;
    top:0%;
  }
  .news .listBackground{
    width:100%;
    height:100%;

    position:relative;
    top:100%;
    left:0%;
  }
  .news .listBackground .box{
    width:60%;
  }
}
@media screen and (max-width: 480px) {
  .news{
    height:300px;
    margin-bottom: 300px;
  }
}
</style>
