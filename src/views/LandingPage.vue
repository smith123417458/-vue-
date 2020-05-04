<template>
  <div>
    
    <Swiper />
       <scrollBtn />
    <Intro />

    
  <Time/>
 <Parallax />
 <News/>
   
  </div>

</template>

<script>
export default {
  methods: {
    goPage(selectedCategory) {
      this.$store.dispatch('changeCategory', selectedCategory);
      this.$router.push('/product');
    },
  },

  components: {

      Swiper: () => import('@/components/front/Swiper'),

      scrollBtn: () => import('@/components/front/scrollBtn'),

      Intro: () => import('@/components/front/Intro'),
  
     Parallax: () => import('@/components/front/Parallax'),

      News: () => import('@/components/front/News'),

      Time: () => import('@/components/front/Time'),

   
   
  },
};
</script>
