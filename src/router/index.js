import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [{
  path: '*',
  redirect: '/',
},
{
  path: '/',
  component: Home,
  children: [{
    path: '',
    component: () => import('@/views/LandingPage.vue'),
  },
  {
    path: 'product',
    component: () => import('@/components/Product.vue'),
  },
  {
    path: 'product/:productId',
    component: () => import('@/components/ProductItem.vue'),
  },
  {
    path: "signin",
    component: () => import('@/components/Login.vue'),
  },
  {
    path: "cardGame",
   component: () => import('@/components/front/cardGame.vue'),
   }
   ,
   {
    path: "pubgGame",
   component: () => import('@/components/pubgGame.vue'),
   }



,
  {
    path: 'cart',
    component: () => import('@/components/cart/Cart.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/cart/CartForm.vue'),
      },
      {
        path: 'checkout',
        component: () => import('@/components/cart/Checkout.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import('@/components/cart/CheckoutOrder.vue'),
      },
      
    ],
  },

  {
    path: "/admin",
    component: () => import('@/components/Dashboard.vue'),
    children: [
      {
        path: "products",
        component: () => import('@/components/back/DashProducts.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: "coupons",
        component: () => import('@/components/back/Coupon.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: "orders",
        component: () => import('@/components/back/DashOrders.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }


  
  
  ],
},


];

const router = new VueRouter({
  routes,
  
});

export default router;
