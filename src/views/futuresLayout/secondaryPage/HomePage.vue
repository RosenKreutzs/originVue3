<template>
<div style="display: flex; flex-direction: column;">

  <!--  ablility-1-->
  <div style="width:100%;z-index: 1;height: 850px">
    <div class="shapes">
      <img :src=shape1Svg alt="" class="shape shape-1">
      <img :src=shape2Svg alt="" class="shape shape-2">
      <img :src=shape3Svg alt="" class="shape shape-3">
      <img :src=shape4Svg alt="" class="shape shape-4">
    </div>
    <div class="hero">
      <div class="hero-content-wrapper">
        <h2>模 型 算 法 可 视 化 & BASE </h2>
        <p>以更为简单，更为容易理解的方式，让人们认识与运用看似神乎其神的人工智能。
          以更通俗易懂的方式，解放前所未有的创造力!</p>
        <router-link to="/Login" class="button button-lg radius-50" style="margin-left:10% ">Get Started</router-link>
      </div>
      <img :src=heroImgSvg style="height: 500px;margin-right: 30px" >

    </div>
  </div>

  <!--  ablility-2-->
  <div class="ability2" style="z-index: 1;">
    <div class="section-title text-center mb-60" >
      <h3 class="mb-15">创建你的第一个模型</h3>
      <p>我们将用Deep Forest Algorithm(一种无监督学习)，对包括黄金，石油等期货的价格进行预测，以此构建一个简易模型开启你的算法学习之途。</p>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6" style="margin-left: 8%">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-vector"></i>
          </div>
          <div class="content">
            <h5>特征工程</h5>
            <p>对原始数据进行处理、转换和提取，以创建新的特征或变换现有特征，从而提高模型的性能和效果的过程。</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" >
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-pallet"></i>
          </div>
          <div class="content">
            <h5>构造模型</h5>
            <p>根据问题的需求和数据的特点选择合适的算法，并利用训练数据对模型进行训练，以从数据中学习规律和模式。</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-stats-up"></i>
          </div>
          <div class="content">
            <h5>训练模型</h5>
            <p>模型通过观察训练数据中的模式和规律，调整自身的参数和权重，以使得模型能够对新的未知数据做出准确的预测或分类。</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6" style="margin-left: 8%">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-code-alt"></i>
          </div>
          <div class="content">
            <h5>模型评估</h5>
            <p>使用测试集对训练好的模型进行评估，比较模型的预测结果与真实标签之间的差异，评估模型的准确性和泛化能力。</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-lock"></i>
          </div>
          <div class="content">
            <h5>部署模型</h5>
            <p>将训练好的机器学习模型应用到实际生产环境中，以便对新的数据进行预测、分类或其他任务</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="single-feature">
          <div class="icon">
            <i class="lni lni-code"></i>
          </div>
          <div class="content">
            <h5>集成学习</h5>
            <p>使用多个不同的模型来进行预测或估计，然后结合它们的结果以获得更准确的预测结果</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  ablility-3-->
  <div style="z-index: 1;margin-top: 10%">

    <section id="about" class="about-section about-style-5" style="background-image: url('https://2023519tryoss.oss-cn-chengdu.aliyuncs.com/img/about/about-5/about-img.jpg')">
      <div class="container" >
        <div class="row">
          <div class="col-xl-6 col-lg-8 col-md-10">
            <div class="about-content-wrapper">
              <div class="section-title mb-30">
                <h3 class="mb-25">数 学 建 模 与 计算机模型的区别</h3>
                <p>数学建模更注重问题的数学表达和分析，强调数学模型的建立和求解方法；而计算机模型更注重问题的计算和模拟，使用计算机技术来模拟和解决实际问题。数学建模和计算机模型通常是相辅相成的，数学建模提供了问题的数学基础，而计算机模型则通过计算和模拟来验证和实现数学模型的解决方案。</p>
              </div>
              <a href="#0" class="button button-lg radius-10">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!--ability-5-->
  <div style="z-index: 1;margin-top: 10%">
    <section id="pricing" class="pricing-section pricing-style-2">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
            <div class="section-title text-center">
              <h3 style="margin-bottom: 5%">管理文件</h3>
              <p style="margin-bottom: 10%">管理文件是指对文件进行组织、存储、检索和维护的过程。有效的文件管理可以提高工作效率、降低错误率，并确保文件的安全性和可靠性。</p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-pricing">
              <div class="image">
                <img src="@/assets/img/pricing/pricing-1/pricing-1.svg" alt="">
              </div>
              <h6>File Upload</h6>
              <h4>上 传 文 件</h4>
              <ul>
                <li>可以将文件上传到云存储中</li>
                <li>无论使用哪种方式上传文件，都需要注意文件大小限制、网络稳定性以及文件安全性等问题</li>
              </ul>
              <a href="#0" class="button border-button radius-30">Get Started</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-pricing active">
              <div class="image">
                <img src="@/assets/img/pricing/pricing-1/pricing-2.svg" alt="">
              </div>
              <h6>Tuning File</h6>
              <h4>调 整 文 件</h4>
              <ul>
                <li>文件内容或格式进行修改编辑或整理</li>
                <li>根据具体的需求和文件类型，选择适合的工具和方法来进行文件调整，以确保文件内容和格式符合要求。</li>
              </ul>
              <a href="#0" class="button radius-30">Get Started</a>
            </div>
          </div>
          <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-pricing">
              <div class="image">
                <img src="@/assets/img/pricing/pricing-1/pricing-3.svg" alt="">
              </div>
              <h6>Download File</h6>
              <h4>下 载 文 件</h4>
              <ul>
                <li>遵守版权法律，不要下载非法文件</li>
                <li>确保设备有足够的存储空间来保存下载的文件。
                  在下载过程中保持网络连接稳定，以免下载中断或文件损坏</li>
              </ul>
              <a href="#0" class="button border-button radius-30">Get Started</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
  <!--  ablility-6-->
  <div style="z-index: 1;margin-top: 10%">
    <section class="team-section team-style-6">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xxl-5 col-xl-5 col-lg-7 col-md-10" style="padding-bottom: 10%">
            <div class="section-title text-center ">
              <h3 style="margin-bottom: 10%">机 器 学 习</h3>
              <p>机器学习是人工智能的一个分支，它涉及让计算机系统从数据中学习并改进性能，而无需明确地进行编程。</p>
            </div>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-xl-3 col-md-6 col-sm-10">
            <div class="single-team">
              <div class="image">
                <img src="@/assets/img/team/team-6/team-1.png" alt="">
              </div>
              <div class="info">
                <h6>无 监 督 学 习</h6>
                <p>Study without supervision</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-10">
            <div class="single-team">
              <div class="image">
                <img src="@/assets/img/team/team-6/team-2.png" alt="">
              </div>
              <div class="info">
                <h6>监 督 学 习</h6>
                <p> learning of
                  Supervising data </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-10">
            <div class="single-team">
              <div class="image">
                <img src="@/assets/img/team/team-6/team-3.png" alt="">
              </div>
              <div class="info">
                <h6>自 监 督 学 习</h6>
                <p>Supervise learning by yourself</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6 col-sm-10">
            <div class="single-team">
              <div class="image">
                <img src="@/assets/img/team/team-6/team-4.png" alt="">
              </div>
              <div class="info">
                <h6>强 化 学 习</h6>
                <p>deep reinforcement learning</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

  <!--  ablility-7-->
  <div style="z-index: 1;margin-top: 10%">
    <section id="testimonial" class="testimonial-section testimonial-style-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title text-center mb-60">
              <h3>评估模型的指标有?</h3>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="single-testimonial">
              <div class="content-wrapper">
                <div class="info">
                  <div class="image">
                    <img src="@/assets/img/testimonial/testimonial-4/testimonial-1.png" alt="">
                  </div>
                  <div class="text">
                    <h6>准确率</h6>
                    <p>Accuracy</p>
                  </div>
                </div>
                <div class="content">
                  <p>率是指模型正确预测的样本数量占总样本数量的比例。它是最常用的评估指标之一，特别适用于类别平衡的情况。</p>
                  <div class="quote">
                    <i class="lni lni-quotation"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="single-testimonial">
              <div class="content-wrapper">
                <div class="info">
                  <div class="image">
                    <img src="@/assets/img/testimonial/testimonial-4/testimonial-2.png" alt="">
                  </div>
                  <div class="text">
                    <h6>精确率</h6>
                    <p>Precision</p>
                  </div>
                </div>
                <div class="content">
                  <p>精确率是指模型预测为正例中真正为正例的比例，即真正例/(真正例+假正例)。精确率可以帮助我们了解模型在预测为正例时的准确性。</p>
                  <div class="quote">
                    <i class="lni lni-quotation"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-6">
            <div class="single-testimonial">
              <div class="content-wrapper">
                <div class="info">
                  <div class="image">
                    <img src="@/assets/img/testimonial/testimonial-4/testimonial-3.png" alt="">
                  </div>
                  <div class="text">
                    <h6>召回率</h6>
                    <p>Recall</p>
                  </div>
                </div>
                <div class="content">
                  <p>召回率是指真正为正例中被模型预测为正例的比例，即真正例/(真正例+假负例)。召回率可以帮助我们了解模型对于正例的覆盖程度。</p>
                  <div class="quote">
                    <i class="lni lni-quotation"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
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
