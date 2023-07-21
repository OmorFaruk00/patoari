<template>
    <div>
      <!-- Place your common header/navigation here -->
      <Header />
  
      <!-- The Nuxt content will be rendered here -->
      <NuxtPage />
  
      <!-- Place your common footer here -->
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
  };
  </script>
  