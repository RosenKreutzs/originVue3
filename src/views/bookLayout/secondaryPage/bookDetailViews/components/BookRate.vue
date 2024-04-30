<template>
<div >
  <div style="margin: auto;width: 100%">
    <el-image style="margin-left: 22%;width: 50%;height: 300px" :src=imageUrl></el-image>
  </div>
  <div style="margin: auto;width: 60%;">
    <h3>不同等级评分占比</h3>
     <el-progress :text-inside="true" :stroke-width="26" :percentage=ratings5></el-progress>
     <el-progress :text-inside="true" :stroke-width="26" :percentage=ratings4 color="#FF00B7FF"></el-progress>
     <el-progress :text-inside="true" :stroke-width="24" :percentage=ratings3 status="success"></el-progress>
     <el-progress :text-inside="true" :stroke-width="22" :percentage=ratings2 status="warning"></el-progress>
     <el-progress :text-inside="true" :stroke-width="20" :percentage=ratings1 status="exception"></el-progress>
  </div>
</div>
</template>

<script>
let bookStr=sessionStorage.getItem("book")||"{}"
let book=JSON.parse(bookStr)
export default {
  data() {
    return {
      imageUrl:'',
      ratings1:null,
      ratings2:null,
      ratings3:null,
      ratings4:null,
      ratings5:null,
      colors: ['#99A9BF', '#F7BA2A', '#ff00b7','#FF00B7FF']
    }
  },
  created() {
    this.load()

  },
  mounted() {//只有页面元素都执行后才会执行mounted的代码
  },
  methods:{

    load(){
 this.imageUrl=book.imageUrl
this.ratings1=Math.round(parseInt(book.ratings1)*100/parseInt(book.ratingsCount))
      this.ratings2=Math.round(parseInt(book.ratings2)*100/parseInt(book.ratingsCount))
      this.ratings3=Math.round(parseInt(book.ratings3)*100/parseInt(book.ratingsCount))
      this.ratings4=Math.round(parseInt(book.ratings4)*100/parseInt(book.ratingsCount))
      this.ratings5=Math.round(parseInt(book.ratings5)*100/parseInt(book.ratingsCount))


    }



  }
}
</script>