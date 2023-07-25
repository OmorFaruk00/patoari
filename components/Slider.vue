<template>   
        <div class="">
            <div id="sliderCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators" style="margin: 10px">
                    <button type="button" data-bs-target="#sliderCarousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#sliderCarousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#sliderCarousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="image/slider11.jpg" class="d-block w-100" alt="slider1" height="600px" />
                        <div class="carousel-caption">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptas, illum vel excepturi veritatis deleniti sint
                                exercitationem ipsa voluptatibus !
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="image/slider22.jpg" class="d-block w-100" alt="slider2" height="600px" />
                        <div class="carousel-caption">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptas, illum vel excepturi veritatis deleniti sint
                                exercitationem ipsa voluptatibus !
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="image/slider33.jpg" class="d-block w-100" alt="slider1" height="600px" />
                        <div class="carousel-caption">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptas, illum vel excepturi veritatis deleniti sint
                                exercitationem ipsa voluptatibus !
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#sliderCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#sliderCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
</template>
<style scoped>
.carousel-indicators button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ccc;
    margin: 0px 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
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
