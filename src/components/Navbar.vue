<template>

<div>

  <nav
    class="navbar navbar-expand-xl p-0 fixed-top navDefault"
    :class="{ navActive }"
    @mouseenter="navMouseEnter"
    @mouseleave="navMouseLeave"
  >
    <a class="navbar-brand" href="#">
      <img
        src="../assets/img/r02.png"
        width="30"
        height="30"
        class="d-inline-block  align-top ml-4 "
      />
      <span id='mark' class="ml-2">好運租車</span>
    </a>
    <div class="collapse navbar-collapse ml-xl-6 order-2 order-xl-1">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link p-3 px-4 logo1" href="#" @click.prevent="goNewArrival">
            <!-- <span class="hvr-underline-from-left">首頁</span> -->
            <img src="../assets/img/homepage.png" />
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
      <li class="nav-item logo2">
        <router-link class=" d-block py-3 px-4" to="/signin">
          <img src="../assets/img/log-in.png" />
        </router-link>
      </li>
      <!-- 購物車按鈕 -->
      <li class="nav-item logo3">
        <router-link class="position-relative d-block py-3 px-4" to="/cart">
          <img id="cart" src="../assets/img/cart.png" >
          <p
            class="position-absolute text-center text-white bg-danger rounded-circle"
            style="top:10%; right:25%; font-size: 12px; min-width: 17px"
            v-if="this.$store.state.carts.carts.length"
          >{{ this.$store.state.carts.carts.length }}</p>
        </router-link>
      </li>

      <li class="nav-item logo4">
        <div class="btn-group favorite d-xl-block py-1 ">
          <button type="button" class="btn favorite-btn" data-toggle="dropdown">
            <img src="../assets/img/heart.png" />
            <span class="badge badge-pill badge-success">{{ favoritesLength }}</span>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <div class="pt-2 px-3">
              <h5 class="text-center">我的最愛</h5>
              <table class="table mb-2" style="min-width:200px">
                <tbody>
                  <tr class="favorite-list" v-for="favorite in favorites" :key="favorite.id">
                    <td class="py-2" width="30">
                      <a
                        href="#"
                        class="text-danger favorite-list-delbtn"
                        id='word'
                        @click.prevent="removeFavorite(favorite, false)"
                      >
                        <i class="fas fa-times"></i>
                      </a>
                    </td>
                    <td class="py-2">
                      <router-link
                        :to="`/productslist/${favorite.id}`"
                        class="d-block"
                         id='word'
                      >{{ favorite.title }}</router-link>
                    </td>
                  </tr>
                  <tr :class="{'d-none': favorites.length}">
                    <td class="text-center">我的最愛是空的</td>
                  </tr>
                </tbody>
              </table>

              <button
                class="btn btn-outline-danger btn-block"
                :class="{'d-none': !favorites.length}"
                data-toggle="modal"
                data-target="#delFavoriteModal"
              >刪除全部</button>
            </div>
          </div>
        </div>
      </li>
    </ul>

    

    <!-- 車款選擇 -->
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
                    <img class src="img/304.png" width="100" />
                  </span>
                </router-link>
              </div>
              <div class="col-5 d-flex align-items-center">
                <a
                  class="d-block text-black p-3 px-4 logoAll"
                  href="#"
                  v-for="(category,ind) in this.$store.state.brands.car"
                  :key="ind+'3'"
                  @click.prevent="changeCategory(category.name)"
                >
                  <span class="hvr-buzz">
                    <img :src="category.url" width="45px" />
                  </span>
                </a>
              </div>
            </div>
            <div class="row w-100">
              <div class="col-2">
                <h2 class="h4 text-center font-weight-bold m-0">motorbike</h2>
                <a class="d-block text-center" href="#" @click="changeCategory('motorbike')">
                  <span class="hvr-pulse-shrink">
                    <img src="img/305.png" width="100" />
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
                    <img :src="category.url" width="45px" />
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
            <p class="h1 text-white mt-2" style=" text-shadow: 2px 2px 8px black">好運租車</p>
          </a>
        </div>
        <div class="row w-100 justify-content-center">
          <div class="col-1">
            <span class="hvr-pulse-shrink">
              <img src="https://i.imgur.com/vbkAgWd.png" />
            </span>
          </div>
        </div>
      </div>
    </div>



  </nav>


   <div class="modal fade" id="delFavoriteModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header bg-danger text-light">
            <h5 class="modal-title" id="delFavoriteModalLabel">刪除 全部我的最愛</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否
            <strong class="text-danger">刪除 全部我的最愛</strong> (刪除後將無法回復)
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button
              type="button"
              class="btn btn-outline-danger"
              data-dismiss="modal"
              @click.prevent="removeFavorite('favorites', true)"
            >確認刪除</button>
          </div>
        </div>
      </div>
    </div>



  </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { gsap } from "gsap";
export default {
  data() {
    return {
      navHeight: 0,
      navActive: false
    };
  },
  computed: {
    getcar() {
      return this.$store.state.carts.carts.length;
    },
    ...mapGetters("favoriteModules", ["favorites", "favoritesLength"])
  },
  watch: {
    $route() {
      const vm = this;
      const { path } = this.$route;
      // 當路由發生變動時，將畫面滾動至頂部，但若是回首頁則不需要
      if (path !== "/") {
        vm.$bus.$emit("goTop");
      }
     
      $("#brand-list").slideUp();

      if (path !== "/" && path !== "/product") {
        vm.navActive = true;
      } else {
        vm.navActive = false;
      }
    },

    getcar() {
      gsap.from("#cart", 0.9, {
        scale: 8
      });
    }

  },
  methods: {
    windowScroll() {
      const vm = this;
      const navTopHeight = Math.floor($("nav").offset().top);
      vm.navHeight = navTopHeight;
      const { path } = this.$route;
      if (vm.navHeight > 0) {
        vm.navActive = true;
      } else if (vm.navHeight === 0 && (path === "/product" || path === "/")) {
        vm.navActive = false;
      }
    },
    navMouseEnter() {
      this.navActive = true;
    },
    navMouseLeave() {
      const navTopHeight = Math.floor($("nav").offset().top);
      const { path } = this.$route;
      if (navTopHeight === 0 && (path === "/product" || path === "/")) {
        this.navActive = false;
      }
    },

    brandMouseEnter() {
      $("#brand-list")
        .stop()
        .slideDown(500);

        //   gsap.from(".logoAll", 1, {
        //   delay: 0.2,
        //   opacity: 0,
        //   x: -1,
        //  })
        
    },
    brandMouseLeave() {
      $("#brand-list")
        .stop()
        .slideUp(300);
    },
    changeCategory(selectedCategory) {
      const vm = this;
      vm.$store.dispatch("changeCategory", selectedCategory).then(() => {
        if (vm.$route.path !== "/product") {
          vm.$router.push("/product");
        }
   
      });
    },

    removeFavorite(favorite, delall) {
      this.$store.dispatch("favoriteModules/removeFavorite", {
        favoriteItem: favorite,
        delall
      });
    },
    ...mapActions("favoriteModules", ["getFavorite"])
  },
  created() {
    window.addEventListener("scroll", this.windowScroll, false);
    this.$store.dispatch("getCarts");
    this.$store.dispatch("favoriteModules/getFavorite");
  },

mounted() {
   gsap.from(".logo1", 1, {
      delay: 1.0,
      opacity: 0,
      x: -500,
    })

 gsap.from(".logo2", 2, {
      delay: 1.5,
      opacity: 0,
      x: -900,
    })

gsap.from(".logo3", 2, {
      delay: 2.0,
      opacity: 0,
      x: -1200,
    })
    gsap.from(".logo4", 2, {
      delay: 2.5,
      opacity: 0,
      x: -1400,
    })
 }




 



};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/customMixins.scss";

// navbar 預設樣式

.navbar-nav{
  flex-direction: row;
}
.navDefault {
  a,
  .navbar-nav a {
    color: white;
  }
  transition: all 0.5s;
}

// 當畫面滾動、或在非首頁、/product 路由時為黑字白底
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

@media (max-width:501px) {
  #mark{
    display: none;
  }
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
#word{ color:black 
 }

.favorite-list {
  &:hover,
  &:active {
    background-color: rgb(0, 98, 255);
    text-decoration: underline;
    
  }
  .favorite-list-delbtn:hover,
  .favorite-list-delbtn:active {
    i {
      font-size: 1.25rem;
    }
  }
}
</style>
