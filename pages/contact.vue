<template >
    <div>
        
        <div class="container">
    <div class="row my-5">
       
        <div class="col-md-12 col-sm-12">
            <div class="serviceBox green">
                <div class="service-icon">
                    <span><img src="/image/contact.png" alt=""  ></span>
                </div>
                <h2 class="title">Contact US</h2>
                <hr
              class="mb-5 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #1e97ec; height: 3px"
            />

                <div class="row">
                <div class="col-md-7 col-xl-7 col-sm-12">
                    <h6 class="text-uppercase fw-bold">GET IN TOUCH</h6>
                    <hr class="mb-4 mt-0 d-inline-block mx-auto"
                        style="width: 60px; background-color: #1E97EC; height: 2px" />
                    <p>
                        Feel free to contact us if you need any assistance, any help or
                        another question.
                    </p>

                    <form action="#" class="contact-form">
                        <div class="row">
                            <div class="col-6">
                                <input type="text" class="form-control rounded border-gray mb-3 form-input" id="name"
                                    placeholder="Name" required />
                            </div>
                            <div class="col-6">
                                <input type="email" class="form-control rounded border-gray mb-3 form-input"
                                    placeholder="Email" required />
                            </div>
                        </div>
                        <div class="">
                            <input type="text" class="form-control rounded border-gray mb-3 form-input"
                                placeholder="Subject" required />
                        </div>
                        <div>
                            <textarea id="message" class="form-control rounded border-gray mb-3 form-text-area" rows="5"
                                cols="30" placeholder="Message" required></textarea>
                        </div>
                        <div >
                            <button class="btn-contact">Send</button>
                            
                        </div>
                    </form>
                </div>
                <div class="col-md-5 col-xl-5 col-sm-12">
                    <h6 class="text-uppercase fw-bold">CONTACT INFO</h6>
                    <hr class="mb-4 mt-0 d-inline-block mx-auto"
                        style="width: 60px; background-color: #1E97EC; height: 2px" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat..
                    </p>

                    <table class="custom-table">
                        <tr>
                            <td width="130px">
                                <img src="/image/map.png" alt="home" class="contact-icon" /><strong>Address</strong>
                            </td>
                            <td>: #2021 Lorem Ipsum</td>
                        </tr>
                        <tr>
                            <td width="130px">
                                <img src="/image/phone.png" alt="home" class="contact-icon" /><strong>Phone</strong>
                            </td>
                            <td>:(+91) 9000-12345</td>
                        </tr>
                        <tr>
                            <td width="130px">
                                <img src="/image/gmail.png" alt="home" class="contact-icon" /><strong>Email</strong>
                            </td>
                            <td>: mail@example.com</td>
                        </tr>
                        <tr>
                            <td width="130px">
                                <img src="/image/phone.png" alt="home" class="contact-icon" /><strong>Web</strong>
                            </td>
                            <td>: www.example.com</td>
                        </tr>
                    </table>
                </div>
            </div>
                
            </div>
        </div>
    </div>
</div>
        
    </div>
    
</template>
<style scoped>
.serviceBox{
    background: linear-gradient(-45deg, #d5d8dd, #fff);
    font-family: 'Lato', sans-serif;
    text-align: center;
    padding: 25px;
    border-radius: 20px;
    margin: 5px 0 0 5px;
    border: 4px solid #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #ff7905;
}
.serviceBox .service-icon img{
    color: #333;
    background: linear-gradient(to right bottom, #d5d8dd, #fff);
    font-size: 55px;
    line-height: 116px;
    width: 120px;
    height: 120px;
    margin: 0 auto 30px;
    border-radius: 50%;
    border: 5px solid #fff;
}
.serviceBox .description{
    color: #666;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    margin: 0;
}
.serviceBox.green{ box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #1E97EC; }
.serviceBox.green .title{ color: #1E97EC;font-weight: bolder; }
.serviceBox.black{ box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #00262E; }
.serviceBox.black .title{ color: #00262E; }
@media only screen and (max-width: 990px){
    .serviceBox{ margin: 0 0 30px; }
}
.contact {
    /* background: #fffcf2; */
    padding: 70px 0px;
}

.contact-icon {
    height: 18px;
    margin-bottom: 6px;
    margin-right: 10px;
}

.custom-table th,
.custom-table td {
    padding: 10px;
    text-align: left;
    line-height: 1.5;
}
.btn-contact{
    background: #1E97EC !important;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-weight: bolder;
    float:left;
}
.btn-contact:hover{
    background: #000 !important;
}
.form-control {
    background: #E8EAED;
}

</style>