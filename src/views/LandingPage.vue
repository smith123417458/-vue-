<template>
  <div>
    
    <Swiper />

    <Intro />

    
  <Time/>
 <Parallax />
 <News/>
    <Event />
     <FollowUs />
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

      Swiper: () => import('@/components/Swiper'),

      Intro: () => import('@/components/Intro'),
  
     Parallax: () => import('@/components/Parallax'),

      News: () => import('@/components/News'),

      Time: () => import('@/components/Time'),

   
   
  },
};
</script>
