<template>
  <el-descriptions direction="vertical" :column="2" border>
    <el-descriptions-item label="书名">{{title}}</el-descriptions-item>
    <el-descriptions-item label="作者">{{authors}}</el-descriptions-item>
    <el-descriptions-item label="语言类型" >{{languageCode}}</el-descriptions-item>
    <el-descriptions-item label="出版日期">
      <el-tag size="small">{{originalPublicationYear}}</el-tag>
    </el-descriptions-item>
    <el-descriptions-item :span="2" label="总评分" >
      <el-rate
        disabled
        v-model="averageRating"
        :colors="colors" >
    </el-rate>
      <h3 style="display: inline">{{averageRating}}</h3>
    </el-descriptions-item>
    <el-descriptions-item label="isbn">{{isbn}}</el-descriptions-item>
    <el-descriptions-item label="页数">{{booksCount}}</el-descriptions-item>
    <el-descriptions-item label="评论人数">{{workRatingsCount}}</el-descriptions-item>
    <el-descriptions-item label="评分人数">{{ratingsCount }}</el-descriptions-item>
  </el-descriptions>

</template>

<script>
let bookStr=sessionStorage.getItem("book")||"{}"
let book=JSON.parse(bookStr)
export default {
  data() {
    return {
      averageRating: null,
      authors:null,
      title:null,
      languageCode:null,
      originalPublicationYear:null,
      isbn:null,
      booksCount:null,
      workRatingsCount:null,
      ratingsCount:null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  created() {

    this.load()
  },
  mounted() {//只有页面元素都执行后才会执行mounted的代码
  },
  methods:{

    load(){
      this.averageRating=book.averageRating
      this.authors=book.authors
      this.title=book.title
      this.languageCode=book.languageCode
      this.originalPublicationYear=book.originalPublicationYear
      this.isbn=book.isbn
      this.booksCount=book.booksCount
      this.workRatingsCount=book.workRatingsCount
      this.ratingsCount=book.ratingsCount

    }



  }
}
</script>