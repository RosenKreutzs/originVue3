<template>
  <header class="header header-4" style="width: 100%;">
    <div class="navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" href="/HomePage">
                <img src="@/assets/img/logo/logo.svg" alt="Logo" />
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent4" aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent4" style="margin-left: 20%">
                <ul id="nav4" class="navbar-nav ms-auto">
                  <li class="nav-item" >
                    <a class="page-scroll active" href="#0"  data-bs-toggle="collapse" data-bs-target="#sub-nav" aria-controls="sub-nav"
                       aria-expanded="false" aria-label="Toggle navigation">单模估计
                      <div class="sub-nav-toggler">
                        <span> <i class="lni lni-chevron-down"></i> </span>
                      </div>
                    </a>
                    <ul class="sub-menu collapse" id="sub-nav">
                      <li><a href="index.html" class="active">特征工程</a></li>
                      <li><a href="index-2.html">构造模型</a></li>
                      <li><a href="index-3.html">模型预测</a></li>
                    </ul>
                  </li >
                  <li class="nav-item">
                    <a class="page-scroll" href="#0"  data-bs-toggle="collapse" data-bs-target="#sub-nav2" aria-controls="sub-nav2"
                       aria-expanded="false" aria-label="Toggle navigation">算法教程
                      <div class="sub-nav-toggler">
                        <span> <i class="lni lni-chevron-down"></i> </span>
                      </div>
                    </a>
                    <ul class="sub-menu collapse" id="sub-nav2">
                      <li><a href="about-page.html">非监督学习：Deep Forest</a></li>
                      <li><a href="team-page.html">监督学习：DNN</a></li>
                      <li><a href="blog.html">自监督学习：GAN</a></li>
                      <li><a href="single-blog.html">强化学习：DQN</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="about-page.html">多模估计/集成学习</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="/BlogPage">管理文件</a>
                  </li>
                  <li class="nav-item">
                    <router-link  class="page-scroll" to="/Login">登陆/注册</router-link >
                  </li>
                </ul>

              </div>
              <div class="header-search">
                <a href="#0"> <i class="lni lni-search-alt"></i> </a>
                <form action="#">
                  <input type="text" placeholder="Type for search...">
                </form>
              </div>
              <!-- navbar collapse -->
            </nav>
            <!-- navbar -->
          </div>
        </div>
        <!-- row -->
      </div>
      <!-- container -->
    </div>
    <!-- navbar area -->
  </header>
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