<template>
  <div style="display: flex; flex-direction: column;">

    <!--  ablility-1-->
    <div class="banner-section">
      <div class="banner-area img-bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="banner-content">
                <h3 class="mb-20">上传数据</h3>
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
    <section class="blog-section pt-100" style="background-image: url('https://2023519tryoss.oss-cn-chengdu.aliyuncs.com/img/about/about-1/Blobs.png');height: 500px;background-size: cover;margin-top: 10% ">
      <div class="container" style="border: 5px dashed #409EFF;width: 70%;height: 350px;border-radius: 5%;background-color: rgba(255, 255, 255, 0.5);text-align: center; ">
<h3 style="margin-top: 8%">上 传 文 件</h3>
        <h5 style="margin-top: 2%">拖放要上传的文件</h5>
        <p style="margin-top: 2%">考虑压缩大型目录以加快上传速度</p>
        <p style="margin-top: 2%">或</p>
        <el-upload ref="upload" :action="filesUploadUrl" :on-success="filesUploadSuccess">
          <el-button type="primary" style="background-color: rgba(255, 255, 255, 0.5);border-radius: 30%;width: 90px;height: 40px;margin-top: 2%;color: #409EFF">点击上传</el-button>
        </el-upload>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "UploadData",
  data(){
    return{
      filesUploadUrl: "http://localhost:9090/files/upload",
    }},
  methods:{
    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },
  }
}
</script>

<style scoped>
.font_element {
  font-family: 'Lobster', cursive;
}
</style>