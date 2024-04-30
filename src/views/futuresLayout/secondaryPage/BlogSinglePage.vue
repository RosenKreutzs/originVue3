<template>
<div style="display: flex; flex-direction: column;">

  <!--  ablility-1-->
  <div class="banner-section">
    <div class="banner-area img-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <h3 class="mb-20">Blog Single Page</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  ablility-2-->
  <section class="blog-section pt-100">
    <div class="container">

      <div class="single-blog-wrapper">
        <div class="row">
          <!-- col-lg-8 left side -->
          <div class="col-xl-8 col-lg-7">
            <div class="left-wrapper">
              <!-- blog-content-wrapper -->
              <div class="blog-content-wrapper">
                <div class="image mb-35">
                  <img src="@/assets/img/blog/single-blog/single-blog-1.jpg" alt="">
                </div>
                <div class="content">
                  <h4 class="mb-25">Morbi et sagittis dui, sed fermentum ante. Pellentesque molestie sit amet dolor vel euismod.</h4>
                  <p class="mb-25">Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in. Soluta voluptatum in deserunt consequatur facere natus sunt facilis neque rem dicta! Cum sequi recusandae incidunt rerum ullam nostrum magni, suscipit, nesciunt ab quibusdam tempore exercitationem quisquam dolorem unde sed facilis quod voluptate esse cupiditate.</p>
                  <div class="quotation">
                    <i class="lni lni-quotation"></i>
                    <p>Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in. Soluta voluptatum i.</p>
                  </div>
                  <p>Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in. Soluta voluptatum in deserunt consequatur facere natus sunt facilis neque rem dicta!</p>
                </div>
              </div>
              <!-- comment-wrapper  -->
              <div class="comment-wrapper">
                <!-- title  -->
                <div class="title">
                  <h6>20 Comments</h6>

                  <div class="share">
                    <ul class="socials">
                      <li>Share</li>
                      <li> <a href="#0"> <i class="lni lni-facebook-filled"></i> </a> </li>
                      <li> <a href="#0"> <i class="lni lni-twitter-filled"></i> </a> </li>
                      <li> <a href="#0"> <i class="lni lni-linkedin-original"></i> </a> </li>
                    </ul>
                  </div>
                </div>
                <!-- comment-item-wrapper  -->
                <div class="comment-item-wrapper">
                  <div class="comment-item">
                    <div class="image">
                      <img src="assets/img/blog/single-blog/comment-1.png" alt="">
                    </div>
                    <div class="content">
                      <div class="info">
                        <div class="left">
                          <h6>John Doe</h6>
                          <p>4 Hours Ago</p>
                        </div>
                        <div class="right">
                          <a href="#0" class="reply-button"> <i class="lni lni-reply"></i> Reply </a>
                        </div>
                      </div>
                      <div class="text">
                        <p>Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in.</p>
                      </div>
                    </div>
                  </div>
                  <div class="comment-item reply-comment">
                    <div class="image">
                      <img src="@/assets/img/blog/single-blog/comment-1.png" alt="">
                    </div>
                    <div class="content">
                      <div class="info">
                        <div class="left">
                          <h6>John Doe</h6>
                          <p>4 Hours Ago</p>
                        </div>
                        <div class="right">
                          <a href="#0" class="reply-button"> <i class="lni lni-reply"></i> Reply </a>
                        </div>
                      </div>
                      <div class="text">
                        <p>Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in.</p>
                      </div>
                    </div>
                  </div>
                  <div class="comment-item">
                    <div class="image">
                      <img src="@/assets/img/blog/single-blog/comment-1.png" alt="">
                    </div>
                    <div class="content">
                      <div class="info">
                        <div class="left">
                          <h6>John Doe</h6>
                          <p>4 Hours Ago</p>
                        </div>
                        <div class="right">
                          <a href="#0" class="reply-button"> <i class="lni lni-reply"></i> Reply </a>
                        </div>
                      </div>
                      <div class="text">
                        <p>Cum sequi recusandae incidunt rerum Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea corrupti, maiores at rerum repellat in.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- comment-form-wrapper  -->
                <div class="comment-form-wrapper mb-70">
                  <h4 class="mb-40">Leave a comment</h4>
                  <form action="#" method="#">
                    <div class="row">
                      <div class="col-xl-6">
                        <div class="single-input">
                          <label for="comment-name">Name</label>
                          <input type="text" id="comment-name" name="comment-name" placeholder="Name">
                          <i class="lni lni-user"></i>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="single-input">
                          <label for="comment-name">Email</label>
                          <input type="email" id="comment-email" name="comment-email" placeholder="Email">
                          <i class="lni lni-envelope"></i>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="single-input">
                          <label for="comment-message">Message</label>
                          <textarea name="comment-message" id="comment-message" rows="5" placeholder="Type Message"></textarea>
                          <i class="lni lni-pencil-alt"></i>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="form-button text-right">
                          <button class="button radius-10">Submit <i class="lni lni-telegram-original"></i> </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- col-lg-4 right side -->
          <div class="col-xl-4 col-lg-5">
            <aside class="right-wrapper">
              <!-- search box -->
              <div class="sidebar-box search-box">
                <form action="#">
                  <input type="text" name="search" id="search" placeholder="Search">
                  <button> <i class="lni lni-search-alt"></i> </button>
                </form>
              </div>
              <!-- category box -->
              <div class="sidebar-box category-box">
                <h4>Categories</h4>
                <ul>
                  <li><a href="#0"> <span>Web Design</span> <span>(20)</span> </a></li>
                  <li><a href="#0"> <span>UI/UX Design</span> <span>(10)</span> </a></li>
                  <li><a href="#0"> <span>Mobile App Design</span> <span>(05)</span> </a></li>
                  <li><a href="#0"> <span>Branding Design</span> <span>(12)</span> </a></li>
                  <li><a href="#0"> <span>Product Design</span> <span>(14)</span> </a></li>
                  <li><a href="#0"> <span>Web Development</span> <span>(20)</span> </a></li>
                  <li><a href="#0"> <span>PHP Development</span> <span>(20)</span> </a></li>
                  <li><a href="#0"> <span>Javascript Design</span> <span>(20)</span> </a></li>
                  <li><a href="#0"> <span>Html/Css Design</span> <span>(20)</span> </a></li>
                </ul>
              </div>
              <!-- recent-blog box -->
              <div class="sidebar-box recent-blog-box">
                <h4>Recent Blog</h4>
                <ul>
                  <li>
                    <div class="image">
                      <a href="#0"> <img src="@/assets/img/blog/single-blog/recent-blog-1.jpg" alt=""> </a>
                    </div>
                    <div class="content">
                      <h6><a href="#0">The Bank Marketing Strategies</a></h6>
                      <p>October 12, 2020</p>
                    </div>
                  </li>
                  <li>
                    <div class="image">
                      <a href="#0"> <img src="@/assets/img/blog/single-blog/recent-blog-2.jpg" alt=""> </a>
                    </div>
                    <div class="content">
                      <h6><a href="#0">The Bank Marketing Strategies</a></h6>
                      <p>October 12, 2020</p>
                    </div>
                  </li>
                  <li>
                    <div class="image">
                      <a href="#0"> <img src="@/assets/img/blog/single-blog/recent-blog-3.jpg" alt=""> </a>
                    </div>
                    <div class="content">
                      <h6><a href="#0">The Bank Marketing Strategies</a></h6>
                      <p>October 12, 2020</p>
                    </div>
                  </li>
                  <li>
                    <div class="image">
                      <a href="#0"> <img src="@/assets/img/blog/single-blog/recent-blog-4.jpg" alt=""> </a>
                    </div>
                    <div class="content">
                      <h6><a href="#0">The Bank Marketing Strategies</a></h6>
                      <p>October 12, 2020</p>
                    </div>
                  </li>
                </ul>
              </div>

              <!-- tags box -->
              <div class="sidebar-box tags-box">
                <h4>Popular Tag</h4>
                <ul>
                  <li><a href="#0" class="button button-sm border-button radius-30">Web Design</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Web Development</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Mobile App</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Business Analysis</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Business Consulted</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Seo</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Landing page</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>

    </div>
  </section>
</div>

</template>

<script>
export default {
  data() {
    return {
      shape1Svg:require("@/assets/img/hero/hero-1/shape-1.svg"),
      shape2Svg:require("@/assets/img/hero/hero-1/shape-2.svg"),
      shape3Svg:require("@/assets/img/hero/hero-1/shape-3.svg"),
      shape4Svg:require("@/assets/img/hero/hero-1/shape-4.svg"),
      heroImgSvg:require("@/assets/img/hero/hero-1/hero-img.svg"),

    };
  },
  mounted() {

  },
  methods: {

  }
};
</script>

<style>
.shapes .shape {
  position: absolute;
  z-index: -1;
}
.shapes .shape.shape-1 {
  right: 0;
  /*bottom: 0;*/
  /*height: 100%;*/
  width: 50%;
}
.shapes .shape.shape-2 {
  top: 200px;
  left: 49%;
}
.shapes .shape.shape-3 {
  left: 15%;
  /*bottom: 120px;*/
  margin-top: 30%;
}
.shapes .shape.shape-4 {
  left: 0;
  /*bottom: 5%;*/
  margin-top: 40%;

}
.hero{
  margin-top: 20%;
  z-index: 1;
  display: flex;
}
.hero-content-wrapper h2 {
  font-size: 63px;
  line-height: 58px;
}
.hero-content-wrapper p {
  font-weight: 500;
  margin-bottom: 50px;
  margin-top: 5%;
}
.radius-50 {
  border-radius: 50px;
}
.button-lg {
  height: 64px;
}
.button {
  height: 44px;
  font-size: 18px;
  font-weight: 500;
  box-sizing: border-box;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #2F80ED;
  color: #ffffff;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
  padding: 0 25px;
  overflow: hidden;
}
a {
  text-decoration: none;
  transition: all 0.3s ease-out 0s;
}
.hero-content-wrapper{
  margin-left: 5%;
}
.single-feature .icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #2F80ED;
  color: #ffffff;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: -60px;
}
.mb-60{
  margin-left: 30%;
  width: 45%;
  margin-top: 5%;
}
.mb-15{
  margin-left: 5%;
}
.row {
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(var(--bs-gutter-y) * -1);
  margin-right: calc(var(--bs-gutter-x)/ -2);
  margin-left: calc(var(--bs-gutter-x)/ -2);
}
.ability2 .col-md-6{
  box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.3), -5px 0 5px -5px rgba(0, 0, 0, 0.3), 0 5px 5px -5px rgba(0, 0, 0, 0.3);
  width: 28%;
  height: 150px;
  margin-left: 2%;
  margin-top: 10%;
  border-radius: 10%; /* 设置所有四个角为10px的圆角 */

}
.icon{
  margin-left: 2%;
}
.single-feature .content{
  margin: 5%;
}
.single-feature .content h5{
  margin-left: 2%;
}
</style>
