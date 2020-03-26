<template>
  <nav class="navbar navbar-expand-xl p-0 fixed-top navDefault"
    :class="{ navActive }" @mouseenter="navMouseEnter" @mouseleave="navMouseLeave" >



     <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1" >
      <ul class="navbar-nav"> 
        <li class="nav-item">
          <a class="nav-link p-3 px-4" href="#" @click.prevent="goNewArrival">
            <span >新品上市
          </a>
        </li> 

        <!-- 瀏覽器下車款選擇 -->
        <li class="nav-item d-none d-xl-block">
          <a id="brand" class="nav-link p-3 px-4"
            @mouseenter="brandMouseEnter"
            @mouseleave="brandMouseLeave"
            @click="changeCategory('car')"
          >
            <span class="align-middle">車款選擇</span>
          </a>
        </li>
      </ul>
    </div>


    <!-- 會員登入 -->
    <ul class="navbar-nav mr-xl-6 order-1 order-xl-2">
      <li class="nav-item">
        <router-link class="d-none d-xl-block py-3 px-4" to="/signin">
      </li>


      <!-- 購物車按鈕 -->
      <li class="nav-item">
        <router-link class="position-relative d-block py-3 px-4" to="/cart">
        
          <p class="position-absolute  rounded-circle" >
            {{ this.$store.state.carts.carts.length }}
         
      </li>
    </ul>


    
    <!-- 代理品牌清單 -->
    <div id="brand-list"class="position-absolute  w-100"
        @mouseenter="brandMouseEnter" @mouseleave="brandMouseLeave"
    >
     
</template>

