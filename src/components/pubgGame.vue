<template>
<body>
     <div>
    
   </div> 
   <div class="target">
    <div class="cir1" data-label="5"></div>
    <div class="cir2" data-label="4"></div>
    <div class="cir3" data-label="3"></div>
    <div class="cir4" data-label="2"></div>
     <div class="cir5" data-label="1"></div>
    </div>

    <div class="infos">
   <audio id="audio" src="img/sound.wav" autostart="false"></audio>
   <h1 class="mouseText"></h1>
    <h1 class="countbox">經過了x秒</h1>
    <h1 class="score">打靶分數: 0</h1>
    <h3 class="explain">重新開始 按R鍵 , <br>簡單模式按 K鍵                   
   </h3>
   </div>

 <div id="bg">
  <div class="ticket">
    <div class="datas">
      <a class="link">
        <div class="ribbon">
          <div class="label">LIMITED</div>
        </div>
        <span>優惠券</span>
        <strong>8折</strong>
        <em id="open">點我打開</em>
      </a>
    </div>
    <a id="ok" class="button">收合</a>
  </div>
  <div class="ticket-in">
    <div class="content">
      <div class="pass">
        <h1>慶祝好運租車開幕</h1>
      </div>
      <span style="color: violet;">優惠碼</span>
      <em>17458</em>
    </div>
  </div>
</div>


   

  </body>
</template>


<script>

export default{   
created() {
document

 $("#bg").hide();


  var score = 0

  $("[class^='cir']").click(function () {
    let add = $(this).attr('data-label')
    console.log(add)
    score += parseInt(add * 10)
    updateGame()
  })

  $(window).keydown(function (evt) {
    if (evt.key == "r") {
      resetGame()
    }
    if (evt.key == "k") {
      $(".target").toggleClass("movinge")
    }
  })
  var sec=1;
  var timer = setInterval(function(){
  $(".countbox").text("經過了:"+sec+"秒");
  sec=sec+1;
  },1000);


  function updateGame() {
    $(".score").text("Score: " + score)

    var audio =document.getElementById('audio');
  audio.play();
    if(score>180 & sec<5 ){
    
      $("#bg").fadeIn(300);
    
      clearInterval(timer)
    }
  }

  $("#ok").click(function(){
		$("#bg").fadeOut(300);
	});

  function resetGame() {
    score = 0
    updateGame()
    $(".target").removeClass("moving")
    $(".spot").remove()
  }

  $(window).mousemove(function (evt) {
    $(".mouseText").text(` 箭頭的座標(${evt.pageX},${evt.pageY})`)
   
  })

  $(".cir1").click(function (evt) {
    var spot = $("<div class=spot></div>")
    spot.css("left", evt.pageX +40- $(this).offset().left+"px")
      .css("top", evt.pageY +40- $(this).offset().top+"px")
    $(this).append(spot)
    console.log(spot)
  })

  $('#open').click(function(){
  $('.ticket-in').toggleClass('active')})

}
,




 }




</script>

<style scoped>
 

 #bg{
   display: none;
 }
  body {
   
    background-image: url(https://i.imgur.com/nTYSTCp.jpg); 
    margin: 0;
    width: 100%;
    height: 100vh;
    background-image: cover;
    background-position: center center;
  }

     @media(max-width: 900px){
   body{
    background-image: url(https://i.imgur.com/ROUzKqe.jpg); 
   }
  }   
  
   .target {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  [class^="cir"] {
    width: 500px;
    height: 500px;
    border-radius: 25%;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s;
    cursor: pointer;
   cursor:url(https://i.imgur.com/mnhjhE2.png),pointer; 
  }

  [class^="cir"].cir1 {
    width: 100px;
    height: 100px;
    z-index: 5;
  }

  [class^="cir"].cir2 {
    width: 200px;
    height: 200px;
    z-index: 4;
  }

  [class^="cir"].cir3 {
    width: 300px;
    height: 300px;
    z-index: 3;
  }

  [class^="cir"].cir4 {
    width: 400px;
    height: 400px;
    z-index: 2;
  }

  [class^="cir"].cir5 {
    width: 500px;
    height: 500px;
    z-index: 1;
    border: 10px solid orange;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
  }

  [class^="cir"]:nth-child(2n+1) {
    background-color:olivedrab;
  }

  [class^="cir"]:active {
    transition: 0s;
    filter: brightness(20%);
  }

  [class^="cir"]:before {
    content: attr(data-label);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    top: 20px;
  }

  .target.movinge {
    animation: movinge 1s infinite alternate;
  }

  


  @keyframes movinge {
    0% {
      transform: translate(-200px, -100px);
    }
    30% {
      transform: translate(-100px, 100px);
    }

    60% {
      transform: translate(100px, 000px);
    }

    100% {
      transform: translate(200px, 100px);
    }
  }

  .infos {
    position: fixed;
    left: 50px;
    top: 75px;
    /* z-index: 10; */
   }

  .infos h1,
  .infos h3 {
    margin: 0;
  } 

   .infos h1 {
    font-size: 50px;
    color:black
  }
  @media(max-width: 900px){
    .infos h1 {
    font-size: 24px;
  }
  }

  .infos h3 {
     opacity: 0.4; 
    color: white;
    font-size: 34px;
  }

  @media(max-width: 900px){
    .infos h3 {
    font-size: 18px;
  }
  }
  .spot {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.4);
     z-index: 50; 
  }
a, a.link {
  display: block;
  padding: 33px 0 0 0;
  color: #313131;
  text-decoration: none;
  cursor: pointer;
}
.ticket {
position: relative;
display: table;
width: 450px;
height: 228px;
margin: 50px auto 0 auto;
padding-bottom: 57px;
background: #F4F4F4;
text-align: center;
z-index: 10;
}
@media (max-width: 1050px){    
  .ticket{
    display:none;
  }
} 
 .ticket::before {
  content:"";
  position: absolute;
  top: 54.5%;
  left: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid #a52958;
}
.ticket::after {
  content:"";
  position: absolute;
  top: 54.5%;
  right: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #185661;
}
.ribbon {
position: absolute;
display: block;
top: -4px;
right: -4px;
width: 110px;
height: 110px;
overflow: hidden;
}
.ribbon .label {
position: relative;
display: block;
left: -10px;
top: 23px;
width: 158px;
padding: 10px 0;
font-size: 15px;
text-align: center;
color: #fff;
background-color: #e85e68;
box-shadow: 0px 0px 4px rgba(0,0,0,0.3);
transform: rotate(45deg) translate3d(0,0,0);
}
.label:before, .label:after {
content: '';
position: absolute;
bottom: -4px;
border-top: 4px solid #a71c26;
border-left: 4px solid transparent;
border-right: 4px solid transparent;
}
.label:before {
left: 0;
}
.label:after {
right: 0;
}
span {
  display: block;
  font-size: 29px;
  color: #540c5d;
}
strong {
  display: block;
  font-size: 85px;
  color: #a52958;
  margin: 0 0 10px 0;
}
em {
  display: block;
  font-size: 29px;
  font-style: normal;
  color: #86db78;
  border-top: 2px dashed rgba(0,0,0,.1);
  padding: 10px 0;
}
.button {
  display: block;
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 57px;
  padding: 0;
  line-height: 58px;
  text-align: center;
  border-radius: 0;
  background-color: #86db78;
}
#button::before {
  content:"";
  position: absolute;
  top: -10px;
  left: calc(50% - 20px);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 10px solid #86db78;
}
.ticket-in {
  width: 450px;
  height: 280px;
  position: absolute;
  background: #a52958;
  top: 77px;
   left: calc(50% - 280px); 
  
  transition: left 2s;
}
@media (max-width: 1050px){
  .ticket-in{
    left: calc(50% - 237px);
  }
}
.ticket-in.active {
left: calc(50% - 585px);  
 transition: left 1.5s;
}
.content {
  height: 260px;
  margin: 8px;
  border: 2px dashed #e0c68e;
  border-radius: 10px;
}
.content h1 {
  font-size: 29px;
  color: #4c483b;
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: 'Berkshire Swash', cursive;
}
.pass {
  display: block;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 420px;
  height: 57px;
  margin: 15px 0 0 15px; 
  padding: 0;
  line-height: 58px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background: #eadbb8;
  border: 1px solid #82113c;
}

.pass::before {
  content:"";
  position: absolute;
  bottom: -10px;
  left: calc(50% - 20px);
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 10px solid #eadbb8;
}

.content span {
  margin: 85px 0 0 0;
  text-align: center;
  color: #82113c;
}

.content em {
  border: none;
  text-align: center;
  font-size: 89px;
  color: #eadbb8;
  text-shadow: 1px 1px 0 rgba(0,0,0,.7);
}
  

</style>




