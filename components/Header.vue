<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div class="logo">
        <a class="navbar-brand" href="#">PATOARI</a>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        :class="['collapse', 'navbar-collapse', { show: isMenuOpen }]"
        ref="navbarMenu"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">HOME</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/about">ABOUT US</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/contact">CONTACT</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/blog">BLOG</NuxtLink>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/gallery">GALLERY</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  /* background: rgb(0, 255, 166) !important; */
        /* border-radius: 4px; */
  /* color: rgb(34, 148, 177) !important; */
  color: #35424e !important;
}

.nav-item {
  color: #000;
  font-weight: 700;
}
.navbar {
  background: #1E97EC;;
  /* background: rgb(235,239,243); */
  /* background: rgb(57,209,144); */
  /* background: rgb(100,82,206); */
}
.nav-link {
  /* color: #35424e; */
  color: #fff;
}
.nav-link:hover {
  color: #35424e;
}
.logo a{    
  text-transform: capitalize;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-style: italic;
   
}
.logo a:hover{
    color: #35424e;
}
</style>
