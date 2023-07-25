<template>
<div class="service">
    <div class="container py-5">
      <div class="text">
        <h2 class="text-center pb-5">Our Service</h2>
          
      </div>
    <div class="row">
        <div class="col-md-4 col-sm-12 pr-5">
            <div class="serviceBox">
                <div class="service-icon">
                    <img src="/image/service2.png" height="70%" width="70%" class="mb-2">
                </div>
                <h3 class="title">Service 1</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="serviceBox purple">
                <div class="service-icon">
                    <img src="/image/service2.png" height="70%" width="70%" class="mb-2">
                </div>
                <h3 class="title">Service 2</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-12">
            <div class="serviceBox blue">
                <div class="service-icon">
                    <img src="/image/service2.png" height="70%" width="70%" class="mb-2">
                </div>
                <h3 class="title">Service 3</h3>
                <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quaerat fugit quas veniam perferendis repudiandae sequi, dolore quisquam illum.

                </p>
            </div>
        </div>
    </div>
</div>
</div>
 
</template>



<style  scoped>

.service{
    background: #DBD9DA;
    padding-bottom: 50px;
}
.serviceBox{
    background: #fff;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    padding: 0px 25px 40px;
    margin: 20px 30px 0;
    border-radius: 20px;
    position: relative;
    transition: all 0.3s ease;
}
.serviceBox:hover{ box-shadow: 0 10px 10px rgba(0,0,0,0.2); }
.serviceBox:before,
.serviceBox:after{
    content: "";
    background: linear-gradient(to top,#008d86,#01a2a6);
    width: 10px;
    border-radius: 0 100px 100px 0;
    position: absolute;
    top: 110px;
    bottom: 35px;
    left: 0;
}
.serviceBox:after{
    border-radius: 100px 0 0 100px;
    left: auto;
    right: 0;
}
.serviceBox .service-icon{
    color: #fff;
    background: linear-gradient(-45deg,#008d86 49%,#01a2a6 50%);
    font-size: 45px;
    line-height: 92px;
    width: 120px;
    height: 120px;
    margin: 0 auto;
    border-radius: 100px;
    border: 15px solid #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transform: translateY(-20px);
    transition: all 0.3s ease;
}
.serviceBox:hover .service-icon i{
    transform: rotateX(360deg);
    transition: all 0.3s;
}
.serviceBox .title{
    color: #008d86;
    font-size: 17px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 10px;
}
.serviceBox .description{
    color: #444;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    text-align: justify;
    padding: 10px;
}
.serviceBox.purple:before,
.serviceBox.purple:after{ background: linear-gradient(to top,#8b33cc 49%,#a23adc); }
.serviceBox.purple .service-icon{ background:linear-gradient(-45deg,#8b33cc 49%,#a23adc 50%); }
.serviceBox.purple .title{ color: #8b33cc; }
.serviceBox.blue:before,
.serviceBox.blue:after{ background: linear-gradient(to top,#038bec 49%,#01aeee); }
.serviceBox.blue .service-icon{ background:linear-gradient(-45deg,#038bec 49%,#01aeee 50%); }
.serviceBox.blue .title{ color: #038bec; }
@media only screen and (max-width:990px){
    .serviceBox{ margin: 20px 0 50px; }
}


</style>