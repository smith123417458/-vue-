<template>
  <div class="container mt-5">
    
    <br />
     
     <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-light">
        <li class="breadcrumb-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/product">產品列表</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link :to="{path: '/product', query: {category: product.category}}"
           class="text-primary">{{ product.category }}</router-link>
        </li>
        <li class="breadcrumb-item active">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row mb-5">
      <div class="col-lg-6">
        <zoom-on-hover :img-normal="product.imageUrl" :scale="1.5"></zoom-on-hover>
      </div>
      <div class="col-lg-6 d-flex flex-column">
        <h2>{{ product.title }}</h2>

           <div class="h5 mt-4 mb-3"
            v-if="!product.price">NT{{ product.origin_price | currency }}</div>
            <div
              class="h6 text-secondary mt-4 bar"
              v-if="product.price"
            >原價 NT{{ product.origin_price | currency }}/天</div>
      
        <p class="h4 text-right text-danger" v-if="product.price">特價 NT {{ product.price | currency }}/天</p>

        <p class="border-bottom mb-5"></p>


        <p class="mb-5 font-weight-bold h4" style="line-height: 1.5">{{ product.description }}</p>

       <p class="mb-5  h6" style="line-height: 1.0" v-html="product.content"></p> 

        <div class="row justify-content-between">

           <select name class="form-control my-3" v-model="qty">
              <option value="0" selected disabled>請選擇天數</option>
              <option :value="num" v-for="num in 10" :key="num">租 {{num}} {{product.unit}}</option>
            </select>

            <router-link to="/coupongame" class="badge badge-warning float-right">
            折價卷適用
          </router-link>
          <button type="button" class="btn btn-outline-dark" @click="addToCart(product.id,$event)">
            加入購物車
          </button>
        <!-- ========================================================================================= -->
         <a href="#" class="btn btn-link p-0" :class="{'d-none': isFavorite}"
           @click.prevent="addFavorite(product)">
                <i class="fas fa-heart"></i> 收藏商品
              </a>
              <a href="#" class="btn btn-link p-0" :class="{'d-none': !isFavorite}"
               @click.prevent="removeFavorite(product, false)">
                <i class="fas fa-heart-broken"></i> 取消收藏
              </a>

             

           <div class="buybox" v-if='currentcar' :style="{backgroundImage: `url(${product.imageUrl})`}"></div>

          

           <img class="img-fluid mt-5" src="https://i.imgur.com/v8goziO.jpg" width="600px">
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Pariatur doloribus, laudantium hic perferendis necessitatibus dolorem ipsam
             </p>
            <img class="img-fluid" src="https://i.imgur.com/bLfekvQ.jpg" width="600px">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quibusdam rem sed vitae facilis modi maxime veniam similique eveniet.
            </p>
         
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { gsap } from "gsap";
export default {
  data() {
    return {
      product: {},
      qty: 1,
      currentcar:null,
      isFavorite: false,
    };
  },

computed: {
    ...mapGetters('favoriteModules', ['favorites']),
  },

  methods: {
    // 取得單一產品細節
    getProduct() {
      const vm = this;
      const apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${this.$route.params.productId}`;
      // vm.$store.dispatch('updateLoading', true);
      axios.get(apiUrl).then((response) => {
        vm.product = response.data.product;
        // vm.$store.dispatch('updateLoading', false);
      });


       vm.favorites.forEach((item) => {
            if (vm.product.id === item.id) {
              vm.isFavorite = true;
            }
       });




    },

    addFavorite(product) {
      this.$store.dispatch('favoriteModules/addToFavorite', product);
      this.isFavorite = true;
    },
    removeFavorite(productItem, delall) {
      this.$store.dispatch('favoriteModules/removeFavorite', { favoriteItem: productItem, delall });
      this.isFavorite = false;
    },







    addToCart(productId ,evt) {
      const vm = this;
      const apiUrl = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
      const cart = {
        product_id: productId,
        qty: vm.qty,
      };

      this.currentcar =productId
        this.$nextTick(() => {
            gsap.from(".buybox", 0.8, {
            left: $(evt.target).offset().left,
            top: $(evt.target).offset().top,
            opacity: 1,
            // ease: Power1.easeIn
          })

        })

      // vm.$store.dispatch('updateLoading', true);
      axios.post(apiUrl, { data: cart,})
        .then(() => {
          vm.$store.dispatch('getCarts');
          // vm.$store.dispatch('updateLoading', false); 
        });
    },
  },
  created() {

  this.productId = this.$route.params.productId;

    this.getProduct();
  },



  watch: {
    // 監聽 Layout.vue 我的最愛選單 當路由改變，頁面重新渲染
    $route() {
     this.productId = this.$route.params.productId;
      this.getProduct();
    },
  },












};
</script>

<style lang="scss" scoped>
.not-allowed {
  cursor: default;
}
.bar{
  text-decoration:line-through;
}
.buybox{
  position: fixed;
  top:64px;
  right:30px;
  height: 150px;
  width: 230px;
  background-size: cover;
  background-position: center center;
  opacity: 0;
  
}
.badge{
  font-size: 125%;
}

</style>
