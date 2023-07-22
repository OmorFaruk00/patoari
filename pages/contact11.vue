<template>
    <div class="contact">
        <div class="container">
            <h2 class="text-center mb-5">Contact Us</h2>

            <div class="row">
                <div class="col-md-7 col-xl-7 col-sm-12">
                    <h6 class="text-uppercase fw-bold">GET IN TOUCH</h6>
                    <hr class="mb-4 mt-0 d-inline-block mx-auto"
                        style="width: 60px; background-color: #7c4dff; height: 2px" />
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
                        style="width: 60px; background-color: #7c4dff; height: 2px" />
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
</template>
<style scoped>
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
}
.btn-contact:hover{
    background: #000 !important;
}
</style>
