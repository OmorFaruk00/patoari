<template>
  <div>
    <div class="">
      <!-- Footer -->

      <!-- <div class="footer-top">
        <div class="d-flex justify-content-between container">
          <div class="">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>logo</div>
        </div>
      </div> -->
      <div class="footer-body">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
              <h6 class="text-uppercase fw-bold">Company name</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>          

            <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr
                class="mb-4 mt-0 d-inline-block"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p>
                <NuxtLink class="usefull-link" to="/">HOME</NuxtLink>
              </p>
              <p>
                <NuxtLink class="usefull-link" to="/about">ABOUT US</NuxtLink>
              </p>
              <p>
                <NuxtLink class="usefull-link" to="/contact">CONTACT</NuxtLink>
              </p>
              <p>
                <NuxtLink class="usefull-link" to="/blog">BLOG</NuxtLink>
              </p>
            </div>            
            <div class="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">             
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr
                class="mb-4 mt-0 d-inline-block"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <p><img src="/image/home.png" alt="home" class="contact-icon"> New York, NY 10012, US</p>
              <p><img src="/image/gmail.png" alt="gmail" class="contact-icon"> info@example.com</p>
              <p><img src="/image/phone.png" alt="phone" class="contact-icon"> + 01 234 567 88</p>
              <p><img src="/image/print.png" alt="print" class="contact-icon">  + 01 234 567 89</p>
            </div>

            <div class="col-md-3 col-lg-3 col-xl-3 mb-4">
              <h6 class="text-uppercase fw-bold">FOLLOW US</h6>
              <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style="width: 60px; background-color: #7c4dff; height: 2px"
              />
              <div>
                <a href="#"><img src="/image/facebook.png" alt="" class="social-link"></a>
                <a href="#"><img src="/image/twitter.png" alt="" class="social-link"></a>
                <a href="#"><img src="/image/google.png" alt="" class="social-link"></a>
              </div>
              <div class="mt-3">
                <a href="#"><img src="/image/instagram.png" alt="" class="social-link"></a>
                <a href="#"><img src="/image/linkedin.png" alt="" class="social-link"></a>
                <a href="#"><img src="/image/github.png" alt="" class="social-link"></a>
              </div>
            </div>           
          </div>          
        </div>
      </div>     
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright@Omor Faruk        
      </div>     
    </div> 
  </div>
</template>
<style>
.footer-body {
  background: #ebeff3;
  padding-top: 25px;
}
.footer-top {
  background: rgb(57, 209, 144);
  padding: 10px;
}
.social-link{
  width: 50px;
  height: 50px;
  margin-right: 10px;
  transition: transform 0.3s ease-in-out;
}
.social-link:hover{
    transform: scale(1.1);
}
.contact-icon{
    height: 20px;
    margin-bottom: 6px;
}
.usefull-link{
    text-decoration: none;
    color: #000;
   
}

</style>
