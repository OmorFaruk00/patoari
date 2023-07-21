<template>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(slide, index) in slides" :key="index" :class="['carousel-item', { active: index === 0 }]">
          <img :src="slide.image" class="d-block w-100" :alt="slide.alt" height="600px" />
          <div class="carousel-caption">
            <h3>{{ slide.title }}</h3>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          {
            image: '/image/slider1.jpg',
            alt: 'Image 1',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          },
          {
            image: '/image/slider2.jpg',
            alt: 'Image 2',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          },
          {
            image: '/image/slider3.jpg',
            alt: 'Image 3',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
          },
          // Add more slides as needed
        ],
      };
    },
  };
  </script>
  <style scoped>  
  .carousel-caption {
    opacity: 0;
    transform: translateY(100px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }  
  .carousel-item.active .carousel-caption {
    opacity: 1;
    transform: translateY(0);
  }
  </style>
  