<template>
  <el-carousel :interval="4000" type="card" height="350px">
    <el-carousel-item v-for="item in 6" :key="item">
      <el-image :src=imageUrlData[item-1] style="width: 100%;height: 100%" @click="tobook(item)"></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
import request from "@/utils/request";

let userStr=sessionStorage.getItem("user")||"{}"
let user=JSON.parse(userStr)
export default {
  components:{},
data(){
  return{
    form:{},
    dialogVisible:false,
    search:'',
    currentPage:1,
    total:0,
    pageSize:10,
    CQS:"新增",
    tableData:[

    ],
    details:{},
    vis:false,
    imageUrlData:[]
  }
},
created() {
  this.load()
},
mounted() {//只有页面元素都执行后才会执行mounted的代码
},
methods:{
  load(){
    request.get("/api/book/result",{params: {
        id:user.id
      }}).then(res => {
      this.tableData=res.data
      for(let i=0;i<this.tableData.length;i++){
        this.imageUrlData.push(this.tableData[i].imageUrl)
      }

    })
  },
  tobook(item){
    sessionStorage.removeItem("book");
    sessionStorage.setItem("book", JSON.stringify(this.tableData[item-1]))  // 缓存用户信息
    sessionStorage.setItem("pageSwitch", 1)
    console.log(this.tableData[item-1])
    this.$router.push("/BookDetail")

  }

}}
</script>
