<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="main-timeline">
          <div class="timeline">
            <div class="timeline-content">
              <div class="timeline-icon">
                <img
                  src="/image/mission.png"
                  alt=""
                  class="mb-3"
                  height="80%"
                  width="80%"
                />
              </div>
              <h3 class="title">Our Mission</h3>
              <p class="description mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                suscipit provident pariatur explicabo, rerum consequuntur dolor,
                ab non tenetur harum praesentium velit natus nemo in unde
                obcaecati, ipsum eius consectetur aut nobis dolorum cupiditate
                iusto! Hic nesciunt quod eum velit quaerat! Temporibus officiis
                autem ducimus voluptatem amet odit cupiditate, ipsam fugit
                corporis ad recusandae quam placeat laborum laboriosam
                perspiciatis fuga doloremque repudiandae blanditiis harum culpa,
                id aperiam sequi optio
              </p>
            </div>
          </div>
          <div class="timeline">
            <div class="timeline-content">
              <div class="timeline-icon">
                <img
                  src="/image/vission.png"
                  class="mb-3"
                  alt=""
                  height="80%"
                  width="80%"
                />
              </div>
              <h3 class="title">Our Vission</h3>
              <p class="description mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                suscipit provident pariatur explicabo, rerum consequuntur dolor,
                ab non tenetur harum praesentium velit natus nemo in unde
                obcaecati, ipsum eius consectetur aut nobis dolorum cupiditate
                iusto! Hic nesciunt quod eum velit quaerat! Temporibus officiis
                autem ducimus voluptatem amet odit cupiditate, ipsam fugit
                corporis ad recusandae quam placeat laborum laboriosam
                perspiciatis fuga doloremque repudiandae blanditiis harum culpa,
                id aperiam sequi optio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-timeline {
  font-family: "Quicksand", sans-serif;
  position: relative;
}
.main-timeline:after {
  content: "";
  display: block;
  clear: both;
}
.main-timeline .timeline {
  width: 50%;
  padding: 35px 0 0 100px;
  margin: 0 0 20px 20px;
  float: right;
}
.main-timeline .timeline-content {
  color: #555;
  display: block;
  position: relative;
  text-decoration: none;
}
.main-timeline .timeline-icon {
  color: #2ec2fe;
  background-color: #fff;
  font-size: 50px;
  text-align: center;
  line-height: 90px;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 2px solid #e7e7e7;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset, 0 0 10px rgba(0, 0, 0, 0.5),
    0 0 0 10px #2ec2fe;
  position: absolute;
  left: -145px;
  top: -25px;
  z-index: 2;
}
.main-timeline .title {
  color: #fff !important;
  background-color: #2ec2fe;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 25px;
  margin: 0 0 5px;
  border-radius: 10px;
  position: relative;
}
.main-timeline .title:before,
.main-timeline .title:after {
  content: "";
  background-color: #fff;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transform: translateY(-50%);
  position: absolute;
  left: -9px;
  top: 50%;
}
.main-timeline .title:after {
  background-color: transparent;
  height: 3px;
  width: 55px;
  border-top: 9px dotted #2ec2fe;
  box-shadow: none;
  border-radius: 0;
  left: -68px;
}
.main-timeline .description {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0 0 0 10px;
  text-decoration: none;
}
.main-timeline .timeline:nth-child(even) {
  float: left;
  padding: 35px 100px 0 0;
  margin: 0 20px 20px 0;
}
.main-timeline .timeline:nth-child(even) .timeline-icon {
  left: auto;
  right: -144px;
}
.main-timeline .timeline:nth-child(even) .title:before {
  left: auto;
  right: -9px;
}
.main-timeline .timeline:nth-child(even) .title:after {
  left: auto;
  right: -68px;
}
.main-timeline .timeline:nth-child(4n + 2) .timeline-icon {
  color: #2399c1;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset, 0 0 10px rgba(0, 0, 0, 0.5),
    0 0 0 10px #2399c1;
}
.main-timeline .timeline:nth-child(4n + 2) .title {
  background-color: #2399c1;
}
.main-timeline .timeline:nth-child(4n + 2) .title:after {
  border-color: #2399c1;
}
.main-timeline .timeline:nth-child(4n + 3) .timeline-icon {
  color: #00c2ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset, 0 0 10px rgba(0, 0, 0, 0.5),
    0 0 0 10px #00c2ff;
}
.main-timeline .timeline:nth-child(4n + 3) .title {
  background-color: #00c2ff;
}
.main-timeline .timeline:nth-child(4n + 3) .title:after {
  border-color: #00c2ff;
}

@media screen and (max-width: 767px) {
  .main-timeline .timeline,
  .main-timeline .timeline:nth-child(even) {
    width: 100%;
    padding: 15px 0 0 10px;
    margin: 0 0 20px;
  }
  .main-timeline .timeline-icon,
  .main-timeline .timeline:nth-child(even) .timeline-icon {
    font-size: 30px;
    line-height: 48px;
    height: 50px;
    width: 50px;
    left: 0;
    top: -6px;
  }
  .main-timeline .title {
    padding-left: 70px;
  }
  .main-timeline .description {
    margin-left: 70px;
  }
  .main-timeline .title:before,
  .main-timeline .title:after {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .main-timeline .title {
    font-size: 18px;
  }
}
</style>
