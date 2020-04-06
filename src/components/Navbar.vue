<template>
  <nav
    class="navbar navbar-expand-xl p-0 fixed-top navDefault"
    :class="{ navActive }"
     @mouseenter="navMouseEnter"
     @mouseleave="navMouseLeave"
  >
 <a class="navbar-brand" href="#">
    <img src="https://i.imgur.com/YXX7oS3.png" width="30" height="30" 
    class="d-inline-block align-top ml-4" >
    好運租車
  </a>
     <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1" >
      <ul class="navbar-nav"> 
        <li class="nav-item">
          <a class="nav-link p-3 px-4" href="#" @click.prevent="goNewArrival">
            <!-- <span class="hvr-underline-from-left">首頁</span> -->
            <img src="https://i.imgur.com/YPDwhnV.png" >
          </a>
        </li> 
        <!-- 瀏覽器下車款選擇 -->
        <li class="nav-item d-none d-xl-block">
          <a
            id="brand"
            class="nav-link p-3 px-4"
            href="#"
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
          <!-- <i class="fal fa-user-circle"></i> -->
          <img src="https://i.imgur.com/yH8yeaP.png" >
        </router-link>
      </li>
      <!-- 購物車按鈕 -->
      <li class="nav-item">
        <router-link class="position-relative d-block py-3 px-4" to="/cart">
          <i class="fal fa-shopping-cart"></i>
          <p
            class="position-absolute text-center text-white bg-danger rounded-circle"
            style="top:10%; right:25%; font-size: 12px; min-width: 17px"
            v-if="this.$store.state.carts.carts.length"
          >
            {{ this.$store.state.carts.carts.length }}
          </p>
        </router-link>
      </li>

       

        
         <li class="nav-item">
          
         <div class="btn-group favorite">
          <button type="button" class="btn favorite-btn" data-toggle="dropdown">
            <i class="fas fa-heart fa-lg"></i>
            <span class="badge badge-pill badge-danger">{{ favoritesLength }}</span>
          </button>


        <div class="dropdown-menu dropdown-menu-right">
            <div class="pt-2 px-3">
              <h5 class="text-center">我的最愛</h5>
              <table class="table mb-2" style="min-width:200px">
      
             <tbody>
                 
              <tr class="favorite-list"
                  v-for="favorite in favorites" :key="favorite.id">
                    <td class="py-2" width="30">
                      <a href="#" class="text-danger favorite-list-delbtn"
                      @click.prevent="removeFavorite(favorite, false)">
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td class="py-2">
                      <router-link :to="`/productslist/${favorite.id}`" class="d-block">
                        {{ favorite.title }}
                      </router-link>
                    </td>
                  </tr>
                  <tr :class="{'d-none': favorites.length}">
                    <td class="text-center">我的最愛是空的</td>
                  </tr>


                </tbody>
              </table>

             <button class="btn btn-outline-danger btn-block"
               :class="{'d-none': !favorites.length}"
               data-toggle="modal" data-target="#delFavoriteModal">
                刪除全部
              </button>


              
            </div>
          </div>
        </div>
        </li>
      
          



    </ul>

    <div class="modal fade" id="delFavoriteModal" tabindex="-1" role="dialog"
     aria-labelledby="delFavoriteModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger text-light">
            <h5 class="modal-title" id="delFavoriteModalLabel">刪除 全部我的最愛</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否<strong class="text-danger">刪除 全部我的最愛</strong> (刪除後將無法回復)
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-outline-danger" data-dismiss="modal"
             @click.prevent="removeFavorite('', true)">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>












    <!-- 代理品牌清單 -->
    <div
      id="brand-list"
      class="position-absolute bg-white w-100"
      style="top: 58px; box-shadow: 0px 3px 3px 0px silver;"
      @mouseenter="brandMouseEnter"
      @mouseleave="brandMouseLeave"
    >
      <div class="container-fluid px-6 pt-5">
        <div class="row w-100">
          <div class="col-7">
            <div class="row w-100 mb-5">
              <div class="col-2">
                <h2 class="h4 text-center font-weight-bold m-0">car</h2>
                <router-link class="d-block text-center" to="/product">
                  <span class="hvr-pulse-shrink">  
                  <img  class src="img/304.png" width="100" />
                  </span>
                </router-link>
              </div>
              <div class="col-5 d-flex align-items-center">
                <a
                  class="d-block text-black p-3 px-4"
                  href="#"
                  v-for="(category,ind) in this.$store.state.brands.car"
                  :key="ind+'3'"
                  @click.prevent="changeCategory(category.name)"
                >
                  <span class="hvr-buzz">                 
                    <img :src="category.url" width="45px">
                  </span>
                </a>
              </div>
            </div>
            <div class="row w-100">
              <div class="col-2">
                <h2 class="h4 text-center font-weight-bold m-0">motorbike</h2>
                <a class="d-block text-center" href="#" @click="changeCategory('motorbike')">
                  <span class="hvr-pulse-shrink">
                  <img
                    src="img/305.png"
                    width="100"
                  />
                  </span>
                </a>
              </div>
              <div class="col-5 d-flex align-items-center">
                <a
                  class="d-block text-black p-3 px-4"
                  href="#"
                  v-for="(category,inde) in this.$store.state.brands.motorbike"
                  :key="inde+'4'"
                  @click.prevent="changeCategory(category.name)"
                >
                  <span class="hvr-buzz">
                  
                     <img :src="category.url" width="45px"> 
                    </span>
                </a>
              </div>
            </div>
          </div>
           <a
            class="col-5"
            style="background: url(img/303.jpg); background-size: cover; background-position: center center;"
            href="#"
            @click.prevent="changeCategory('car')"
          > 
            <p
              class="h1 text-white mt-2"
              style=" text-shadow: 2px 2px 8px black"
            >
             好運租車
            </p>  
          </a>
        </div>       
         <div class="row w-100 justify-content-center">
          <div class="col-1">
           <span class="hvr-pulse-shrink">
         <img src="https://i.imgur.com/vbkAgWd.png" > 
         </span>
          </div>
        </div> 
      </div>
    </div>

    
  </nav>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { gsap } from "gsap";
export default {
  data() {
    return {  
      navHeight: 0,
      navActive: false,
    };
  },
  computed:{
    getcar(){
      return this.$store.state.carts.carts.length
    },
  ...mapGetters('favoriteModules', ['favorites', 'favoritesLength']),

  }
   ,
  watch: {
    /** 監聽路由切換 navbar 樣式。 * */
    $route() {
      const vm = this;
      const { path } = this.$route;
      // 當路由發生變動時，將畫面滾動至頂部，但若是回首頁則不需要
      // * 也可以使用 router 的 scrollBehavior 方法
      if (path !== '/') {
         vm.$bus.$emit('goTop');
      }
      // 將 navbar 的 menu 關閉
       $('.navbar-collapse').collapse('hide');
      $('#brand-list').slideUp();

      // 判斷當前頁面路徑，調整 navbar 的 樣式
      if (path !== '/' && path !== '/product') {
        vm.navActive = true;
      } else {
        vm.navActive = false;
      }
    },

  getcar(){
    gsap.from(".fa-shopping-cart", 0.1, {
          scale: 8
        })
  }
  },
  methods: {
    // 視窗滾動或是改變路由則切換 navbar 樣式
    windowScroll() {
      const vm = this;
      const navTopHeight = Math.floor($('nav').offset().top);
      vm.navHeight = navTopHeight;
      const { path } = this.$route;
      // 當 navbar 距離 top 的距離大於 0 或等於 0 時，改變樣式
      if (vm.navHeight > 0) {
        vm.navActive = true;
        // 只有在 /# 與 /product 路由，滾動至最上層會有背景透明樣式
      } else if (vm.navHeight === 0 && (path === '/product' || path === '/')) {
        vm.navActive = false;
      
      }
    },
     navMouseEnter() {
      this.navActive = true;
    },
    navMouseLeave() {
      const navTopHeight = Math.floor($('nav').offset().top);
      const { path } = this.$route;
      if (navTopHeight === 0 && (path === '/product' || path === '/')) {
        this.navActive = false;
      }
    },

    // navbar 代理品牌的 hover 事件
    brandMouseEnter() {
      $('#brand-list')
        .stop()
        .slideDown(500);
    },
    brandMouseLeave() {
      $('#brand-list')
        .stop()
        .slideUp(300);
    },
    // 滾動至錨點
    goNewArrival() {
      const vm = this;
      // 點擊新品上市，滾動至錨點
      return vm.$route.path === '/'
        ? vm.scrollToAnchor('#new-arrival')
        : vm.$router.push('/').then(() => {
          vm.scrollToAnchor('#new-arrival');
        });
    },
    scrollToAnchor(anchor) {
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor).offset().top,
          },
          1000,
        );
    },
    // 決定 /product 顯示哪個產品分類
    changeCategory(selectedCategory) {
      const vm = this;
      vm.$store.dispatch('changeCategory', selectedCategory).then(() => {
        // 當前若不是 /product 路由，則轉址
        if (vm.$route.path !== '/product') {
          vm.$router.push('/product');
        }
        // 轉址後須將 menu 關閉
        $('.navbar-collapse').collapse('hide');
      
      });
    },

    removeFavorite(favorite, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: favorite, delall });
    },
    ...mapActions('favoriteModules', ['getFavorite']),













  },
  created() {
    window.addEventListener('scroll', this.windowScroll, false);
    this.$store.dispatch('getCarts');
    this.$store.dispatch('favoriteModules/getFavorite');


  },  
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/customMixins.scss";

// navbar 預設樣式
.navDefault {
  a,
  .navbar-nav a {
    color: white;
  }
  
  transition: all 0.5s;
}

// 當畫面滾動、或在非 /#、/product 路由時加入的黑字白底
.navActive {
  a,
  .nav-item a {
    color: black;
  }
  background: white;
  @include box-shadow;
}


#brand-list {
  display: none; 
  
  @include BS-xl {
    display: none;
  }
}

#brand-list-rwd {
  display: none;
}



// ================================================================================
.dropdown-menu {
  z-index: 9999;
}

 .favorite {
  float: right;
  margin-left: 0.25rem;
}

 .favorite-btn {
  float: right;
  position: relative;
  background-color: transparent;
  text-align: right;
  font-size: inherit;
  .badge {
    position: absolute;
    top: auto;
    bottom: 2px;
    right: -1px;
  }
}
.favorite-list {
  &:hover, &:active {
    background-color: red;
    text-decoration: underline;
  }
  .favorite-list-delbtn:hover, .favorite-list-delbtn:active {
    i {
      font-size: 1.25rem;
    }
  }
}

</style>
