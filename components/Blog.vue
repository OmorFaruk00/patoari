<template>
  <div class="blog">
    <h2 class="text-center pb-5">Latest News</h2>
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-4 col-xl-4 px-5">
          <img src="/image/blog1.png" alt="" class="card-image" />
          <div class="p-3">
            <ul class="inline-list">
              <li><img src="/image/user.png" alt="" /> John Cha</li>
              <li><img src="/image/calendar.png" alt="" /> 21-07-2023</li>
            </ul>
            <h4 class="my-3">Blog Title</h4>
            <p class="text-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum,
              in pariatur recusandae libero hic quidem ex exercitationem
              sapiente? Iusto ea perferendis consequuntur doloremque
              dignissimos. Corporis numquam quasi atque tempore!
            </p>
            <div class="read-btn">
              <NuxtLink class="read-more" to="/blog"
                >Read More <img src="/image/arrow.png" alt="" class="icon"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-4 px-5">
          <img src="/image/blog2.jpeg" alt="" class="card-image" />
          <div class="p-3">
            <ul class="inline-list">
              <li><img src="/image/user.png" alt="" /> John Cha</li>
              <li><img src="/image/calendar.png" alt="" /> 21-07-2023</li>
            </ul>
            <h4 class="my-3">Blog Title</h4>
            <p class="text-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum,
              in pariatur recusandae libero hic quidem ex exercitationem
              sapiente? Iusto ea perferendis consequuntur doloremque
              dignissimos. Corporis numquam quasi atque tempore!
            </p>
            <div class="read-btn">
              <NuxtLink class="read-more" to="/blog"
                >Read More <img src="/image/arrow.png" alt="" class="icon"
              /></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-4 col-md-4 col-xl-4 px-5">
          <img src="/image/blog3.jpeg" alt="" class="card-image" />
          <div class="p-3">
            <ul class="inline-list">
              <li><img src="/image/user.png" alt="" /> John Cha</li>
              <li><img src="/image/calendar.png" alt="" /> 21-07-2023</li>
            </ul>
            <h4 class="my-3">Blog Title</h4>
            <p class="text-container">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eum,
              in pariatur recusandae libero hic quidem ex exercitationem
              sapiente? Iusto ea perferendis consequuntur doloremque
              dignissimos. Corporis numquam quasi atque tempore!
            </p>
            <div class="read-btn">
              <NuxtLink class="read-more" to="/blog"
                >Read More <img src="/image/arrow.png" alt="" class="icon"
              /></NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="see-btn">
        <NuxtLink class="see-more" to="/blog">
          See More
          <img src="/image/arrow.png" alt="" class="see-icon" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style scoped>
.blog {
  background: #fffcf2;
  padding: 70px 0px;
}
.card-image {
  height: 220px;
  width: 100%;
  border-radius: 30px;
}
.inline-list {
  list-style: none;
  padding: 0;
  margin: 0;
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
.text-container {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
}
.read-more {
  padding: 10px 0px;
  color: #000;
  text-decoration: none;
}
.icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}
.read-more:hover .icon {
  transform: translateX(5px);
}
.read-more:hover {
  color: #1e97ec !important;
}

.see-btn {
  text-align: center;
}

.see-more {
  display: inline-block;
  padding: 10px 30px;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 40px;
  font-size: 20px;
  border: 1px solid #000;
  transition: transform 0.3s ease-in-out;
}

.see-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: transform 0.3s ease-in-out;
}

.see-btn:hover .see-more {
  transform: scale(1.1);
}

.see-btn:hover .see-icon {
  transform: scale(1.1);
}
</style>
