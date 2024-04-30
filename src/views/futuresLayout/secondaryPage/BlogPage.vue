<template>
<div style="display: flex; flex-direction: column;">

  <!--  ablility-1-->
  <div class="banner-section">
    <div class="banner-area img-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <h3 class="mb-20">管理文件</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">序列</a></li>
                  <li class="breadcrumb-item active" aria-current="page">图表</li>
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
              <div class="feature-style-6 bg-white pt-0 pb-60">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      <div class="image">
                        <a href="/UploadData"><img src="@/assets/img/feature/feature-6-1.svg" alt=""></a>
                      </div>
                      <div class="content">
                        <h5><a href="/UploadData">上 传 数 据</a></h5>
                        <p>上传数据时需要确保文件符合规定、内容安全、命名规范、网络稳定、隐私保护等方面的注意事项，以确保上传过程顺利、安全、有效</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      <div class="image">
                        <a href="/UploadModel"><img src="@/assets/img/feature/feature-6-1.svg" alt=""></a>
                      </div>
                      <div class="content">
                        <h5><a href="/UploadModel">上 传 模 型</a></h5>
                        <p>上传模型时需要确保文件符合规定、内容安全、命名规范、网络稳定、隐私保护等方面的注意事项，以确保上传过程顺利、安全、有效</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      <div class="image">
                        <a href="/LoadData"><img src="@/assets/img/feature/feature-6-3.svg" alt=""></a>
                      </div>
                      <div class="content">
                        <h5><a href="/LoadData">下 载 数 据</a></h5>
                        <p>在调整数据时，需要根据具体的分析目的和数据特点选择合适的方法和技术，确保调整后的数据能够满足分析需求，并提高数据分析的准确性和有效性。</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="single-feature">
                      <div class="image">
                        <a href="/ChangeData"><img src="@/assets/img/feature/feature-6-4.svg" alt=""></a>
                      </div>
                      <div class="content">
                        <h5><a href="/ChangeData">下 载 模 型</a></h5>
                        <p>在调整数据时，需要根据具体的分析目的和数据特点选择合适的方法和技术，确保调整后的数据能够满足分析需求，并提高数据分析的准确性和有效性。</p>
                      </div>
                    </div>
                  </div>
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
                <h4>常见问题</h4>
                <ul>
                  <li><a href="#0"> <span>超参数调优（parameter Tuning）</span>  </a></li>
                  <li><a href="#0"> <span>过拟合（Overfitting）</span>  </a></li>
                  <li><a href="#0"> <span>欠拟合（Underfitting）</span>  </a></li>
                  <li><a href="#0"> <span>数据不平衡（Imbalanced Data）</span>  </a></li>
                  <li><a href="#0"> <span>特征选择（Feature Selection）</span>  </a></li>
                  <li><a href="#0"> <span>解释性（Interpretability）</span>  </a></li>
                  <li><a href="#0"> <span>数据处理（Data Preprocessing</span></a></li>
                </ul>
              </div>

              <!-- tags box -->
              <div class="sidebar-box tags-box">
                <h4>流 行 模 型</h4>
                <ul>
                  <li><a href="#0" class="button button-sm border-button radius-30">DNN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">DQN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">GAN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Deep Forest</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">RNN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">CNN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Q-learning</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">LSTM</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">SVM</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">KNN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">FP-Growth</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">t-SNE</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Apriori</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">DBSCAN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">DDQN</a></li>
                  <li><a href="#0" class="button button-sm border-button radius-30">Actor-Critic</a></li>
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
