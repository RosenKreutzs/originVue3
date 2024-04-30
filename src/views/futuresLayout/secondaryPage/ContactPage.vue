<template>
<div style="display: flex; flex-direction: column;">

  <!--  ablility-1-->
  <div class="banner-section">
    <div class="banner-area img-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <h3 class="mb-20">Contact Page</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  ablility-2-->
  <section id="contact" class="contact-section contact-style-3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
          <div class="section-title text-center mb-50">
            <h3 class="mb-15">Get in touch</h3>
            <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="contact-form-wrapper">
            <form action="assets/php/contact.php" method="POST">
              <div class="row">
                <div class="col-md-6">
                  <div class="single-input">
                    <input type="text" id="name" name="name" class="form-input" placeholder="Name">
                    <i class="lni lni-user"></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-input">
                    <input type="email" id="email" name="email" class="form-input" placeholder="Email">
                    <i class="lni lni-envelope"></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-input">
                    <input type="text" id="number" name="number" class="form-input" placeholder="Number">
                    <i class="lni lni-phone"></i>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="single-input">
                    <input type="text" id="subject" name="subject" class="form-input" placeholder="Subject">
                    <i class="lni lni-text-format"></i>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="single-input">
                    <textarea name="message" id="message" class="form-input" placeholder="Message" rows="6"></textarea>
                    <i class="lni lni-comments-alt"></i>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-button">
                    <button type="submit" class="button"> <i class="lni lni-telegram-original"></i> Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>

        <div class="col-lg-4">
          <div class="left-wrapper">
            <div class="row">
              <div class="col-lg-12 col-md-6">
                <div class="single-item">
                  <div class="icon">
                    <i class="lni lni-phone"></i>
                  </div>
                  <div class="text">
                    <p>0045939863784</p>
                    <p>+004389478327</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6">
                <div class="single-item">
                  <div class="icon">
                    <i class="lni lni-envelope"></i>
                  </div>
                  <div class="text">
                    <p>yourmail@gmail.com</p>
                    <p>admin@yourwebsite.com</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6">
                <div class="single-item">
                  <div class="icon">
                    <i class="lni lni-map-marker"></i>
                  </div>
                  <div class="text">
                    <p>John's House, 13/5 Road, Sidny United State Of America</p>
                  </div>
                </div>
              </div>
            </div>

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
