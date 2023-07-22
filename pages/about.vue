<template>
  <div>
    <div class="container">
      <div class="row my-5">
        <div class="col-md-12 col-sm-12">
          <div class="serviceBox green">
            <div class="service-icon">
              <span
                ><img src="/image/info.png" alt="" height="100%" width="100%"
              /></span>
            </div>
            <h2 class="title">About US</h2>
            <hr
              class="mb-4 mt-0 d-inline-block mx-auto"
              style="width: 60px; background-color: #1e97ec; height: 3px"
            />
            <p class="description mb-5">
              Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Qui
              quaerat fugit quas veniam perferendis repudiandae sequi, dolore
              quisquam illum. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Accusamus laborum culpa quisquam a esse
              reprehenderit voluptatibus eaque quam aliquid tempora nihil porro
              veniam optio sunt beatae, illo iusto excepturi magnam laboriosam
              corporis labore! Alias ex consequatur aperiam minus atque. Iure
              possimus accusamus corrupti praesentium aut reiciendis
              dignissimos. Id, alias harum? Autem, modi, iure doloremque
              accusantium possimus dignissimos voluptates esse corporis ipsum,
              sed et tenetur fugiat molestias. Error dolore, sed totam tempore
              soluta eaque explicabo quod corporis ratione expedita harum, iure
              quaerat alias, pariatur nemo quos laboriosam neque? Ea hic nulla
              incidunt quaerat quidem libero non, voluptas, eligendi ducimus
              quia vero excepturi nisi similique. Porro omnis est eos ducimus
              dolores exercitationem veniam, quibusdam doloribus a illum maxime
              praesentium unde quos quae laboriosam temporibus beatae id
              mollitia, necessitatibus soluta at dolor quisquam eligendi autem!
              Ipsa eligendi nobis quisquam inventore hic, reiciendis repellat
              porro maiores dignissimos dolorem eaque doloribus eius et
              consequuntur, optio quis exercitationem eum ut cupiditate, fuga
              esse facere pariatur animi tenetur? Veritatis labore totam,
              molestias sed alias accusantium repellendus soluta placeat natus
              rerum deleniti ab earum itaque dolores, explicabo consequatur
              eligendi? Aut quibusdam quisquam omnis inventore quos magnam ipsam
              perspiciatis enim mollitia laborum facere facilis perferendis
              deleniti sequi pariatur, at ullam ut quae maxime error quas
              dolorum ab doloribus. Quis possimus cum quos impedit, esse autem!
              Obcaecati expedita consequuntur exercitationem, a aliquam dolor
              sequi quod dolore ea numquam iste minima cupiditate quibusdam
              blanditiis harum culpa magni hic ipsam libero, perferendis labore
              molestiae eaque assumenda quo? Illo velit quod, libero dolore
              molestias magni! Ipsam, cum. Doloribus ad laudantium doloremque
              laboriosam! Adipisci quam sapiente corporis, exercitationem amet
              nostrum dolorum optio? Quibusdam voluptatibus ipsam libero magni,
              error animi culpa eius earum nobis deserunt quisquam impedit rem
              aperiam! Atque, voluptate mollitia consectetur expedita fugiat
              omnis natus quasi nemo dolor, recusandae repudiandae doloremque
              dolorem necessitatibus.
            </p>

            <Mission />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
}
</style>
