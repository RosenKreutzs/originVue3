<template>

<!--  <div style="z-index: 1;">-->
<!--    <section class="clients-logo-section pt-100 pb-100">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="section-title text-center mb-60">-->
<!--              <h3>Co-created by</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="row">-->
<!--          <div class="col-lg-12">-->
<!--            <div class="client-logo wow fadeInUp" data-wow-delay=".2s">-->
<!--              <img src="@/assets/img/clients/brands.svg" alt="" class="w-100">-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </section>-->
<!--  </div>-->



  <div style="z-index: 1;margin-top: 10%">
    <footer class="footer footer-style-4 footer-dark">
      <div class="container">
        <div class="widget-wrapper">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="footer-widget">
                <div class="logo">
                  <a href="#0"> <img src="@/assets/img/logo/logo.svg" alt=""> </a>
                </div>
                <p class="desc">以更为简单，更为容易理解的方式，让人们认识与运用看似神乎其神的人工智能。 以更通俗易懂的方式，解放前所未有的创造力!</p>
                <ul class="socials">
                  <li> <a href="#0"> <i class="lni lni-facebook-filled"></i> </a> </li>
                  <li> <a href="#0"> <i class="lni lni-twitter-filled"></i> </a> </li>
                  <li> <a href="#0"> <i class="lni lni-instagram-filled"></i> </a> </li>
                  <li> <a href="#0"> <i class="lni lni-linkedin-original"></i> </a> </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-2 offset-xl-1 col-lg-2 col-md-6 col-sm-6">
              <div class="footer-widget">
                <h6>服务</h6>
                <ul class="links">
                  <li> <a href="#0">单模估计</a> </li>
                  <li> <a href="#0">算法教程</a> </li>
                  <li> <a href="#0">多模估计</a> </li>
                  <li> <a href="/BlogPage">管理文件</a> </li>
                  <li> <a href="/Login">登录/注册</a> </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footer-widget">
                <h6>模型</h6>
                <ul class="links">
                  <li> <a href="#0">监督学习</a> </li>
                  <li> <a href="#0">非监督学习</a> </li>
                  <li> <a href="#0">自监督学习</a> </li>
                  <li> <a href="#0">强化学习</a> </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6">
              <div class="footer-widget">
                <h6>前 往 论 坛</h6>
                <ul class="download-app">
                  <li>
                    <a href="https://ai.stackexchange.com/">
                      <span class="icon"><i class="lni lni-play-store"></i></span>
                      <span class="text">论坛1 <b>AI Stack Exchange</b> </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://ai.stackexchange.com/">
                      <span class="icon"><i class="lni lni-play-store"></i></span>
                      <span class="text">论坛2 <b>AI Hub</b> </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>
<script>
import { Fold,Upload} from '@element-plus/icons-vue'
let userStr=sessionStorage.getItem("user")||"{}"
let user=JSON.parse(userStr)
export default {
  components:{
    Fold,
Upload
  },
  name: "Header",
  data() {
    return {
      nickName:""
    }
  },
  created() {
    console.log(user)
    this.nickName=user.nickName
  }
}
</script>

<style>
.el-input__wrapper {
  border: none !important;
  box-shadow: none !important;
  background:none !important;
}
.el-input__inner {
  border: none !important;
  box-shadow: none !important;
}
.el-select {
  --el-select-input-focus-border-color: transparent;
}

</style>