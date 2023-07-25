<template>
    <div>
        <div class="container">
            <div class="row my-5">
                <div class="col-md-12 col-sm-12">
                    <div class="serviceBox green">
                        <img src="/image/slider1.jpg" alt="" class="card-image" />
                        <div class="p-3">
                            <div class="mb-3">
                                <ul class="inline-list">
                                    <li><img src="/image/user.png" alt="" /> John Cha</li>
                                    <li><img src="/image/calendar.png" alt="" /> 21-07-2023</li>
                                </ul>
                            </div>

                        </div>
                        <h3 class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p class="description">                            
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea impedit quam iste nostrum optio molestias. Fuga ad neque blanditiis perspiciatis facere! Repellat vitae maxime non velit iste sed reprehenderit sunt perferendis at? Ad, sapiente tempora. Similique iusto laborum repellendus maxime omnis dolorum, magnam laudantium suscipit animi corporis eius at praesentium quam accusamus. Sint placeat eius praesentium labore inventore, voluptatum sit, facilis et eum, commodi iste cumque veritatis nisi velit molestias quae illo fugiat asperiores fugit nobis magni minima! Soluta minus facilis delectus, ullam magni quibusdam maxime possimus quam quos, sint voluptas culpa doloremque, dolorem debitis quaerat atque dolore saepe.

                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea impedit quam iste nostrum optio molestias. Fuga ad neque blanditiis perspiciatis facere! Repellat vitae maxime non velit iste sed reprehenderit sunt perferendis at? Ad, sapiente tempora. Similique iusto laborum repellendus maxime omnis dolorum, magnam laudantium suscipit animi corporis eius at praesentium quam accusamus. Sint placeat eius praesentium labore inventore, voluptatum sit, facilis et eum, commodi iste cumque veritatis nisi velit molestias quae illo fugiat asperiores fugit nobis magni minima! Soluta minus facilis delectus, ullam magni quibusdam maxime possimus quam quos, sint voluptas culpa doloremque, dolorem debitis quaerat atque dolore saepe.
                            


                        </p>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.card-image {
    height: 400px;
    width: 100%;
    border-radius: 30px;
}

.inline-list {
    list-style: none;
    padding: 0;
    margin: 0;
    float: left;
}

.inline-list li {
    display: inline;
    margin-right: 15px;
    font-weight: bolder;
}

.inline-list li img {
    height: 18px;
    margin-bottom: 5px;
    margin-right: 5px;
}

.title {
    color: #000 !important;
    font-size: 22px;
    font-weight: 300;
    text-transform: capitalize;
    text-align: left;
    padding-left: 20px;
}

.description {
    color: #444;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    text-align: justify;
    padding-left: 20px;
}
.serviceBox {
    background: linear-gradient(-45deg, #d5d8dd, #fff);
    font-family: "Lato", sans-serif;
    text-align: center;
    padding: 25px;
    border-radius: 20px;
    margin: 5px 0 0 5px;
    border: 4px solid #fff;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #ff7905;
}

.serviceBox .service-icon img {
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

.serviceBox .description {
    color: #666;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
    margin: 0;
}

.serviceBox.green {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #1e97ec;
}

.serviceBox.green .title {
    color: #1e97ec;
    font-weight: bolder;
}

.serviceBox.black {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3), -5px -5px 0 5px #00262e;
}

.serviceBox.black .title {
    color: #00262e;
}

@media only screen and (max-width: 990px) {
    .serviceBox {
        margin: 0 0 30px;
    }
}</style>
  