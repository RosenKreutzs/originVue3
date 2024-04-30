<template>
  <el-card id="lottie_box" class="lottie_box" ></el-card>
</template>

<script>
import * as anData from "@/assets/importPictures/book-paging.json"
import lottie from "lottie-web";//引入动效库
export default {
name: "tryIottie",
  data() {
    return {
      lottie: {}
    };
  },
  mounted() {
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("lottie_box"),
      renderer: "svg",
      loop: true, //循环播放
      autoplay: true, //自动播放
      /**
       * animationData和path二选一。
       * 1.animationData
       * animationData为本地路径的json，需要import * as anData from "@/XXX.json"
       * 注意：使用本地路径获取的data需要使用default参数。
       * 2.path
       * path可直接传入网络路径
       */
      animationData: anData.default,
      // path: "https://assets7.lottiefiles.com/packages/lf20_sF7uci.json"
    });
  }

}
</script>

<style scoped>
.lottie_box{
  width:40%;
  height: 40%;
  background-color: #343a40;
  border-color:#343a40 ;
}
</style>