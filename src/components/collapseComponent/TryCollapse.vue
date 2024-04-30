
<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="bookDate[0]" name="1">
        <div>
          {{bookDetailDate1[0]}}
        </div>
        <p v-html="bookDetailDate2[0]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[1]" name="2">
        <div>
          {{bookDetailDate1[1]}}
        </div>
        <p v-html="bookDetailDate2[1]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[2]" name="3">
        <div>
          {{bookDetailDate1[2]}}
        </div>
        <p v-html="bookDetailDate2[2]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[3]" name="4">
        <div>
          {{bookDetailDate1[3]}}
        </div>
        <p v-html="bookDetailDate2[3]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[4]" name="5">
        <div>
          {{bookDetailDate1[4]}}
        </div>
        <p v-html="bookDetailDate2[4]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[5]" name="6">
        <div>
          {{bookDetailDate1[5]}}
        </div>
        <p v-html="bookDetailDate2[5]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[6]" name="7">
        <div>
          {{bookDetailDate1[6]}}
        </div>
        <p v-html="bookDetailDate2[6]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[7]" name="8">
        <div>
          {{bookDetailDate1[7]}}
        </div>
        <p v-html="bookDetailDate2[7]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[8]" name="9">
        <div>
          {{bookDetailDate1[8]}}
        </div>
        <p v-html="bookDetailDate2[8]">
        </p>
      </el-collapse-item>
      <el-collapse-item :title="bookDate[9]" name="10">
        <div>
          {{bookDetailDate1[9]}}
        </div>
        <p v-html="bookDetailDate2[9]">
        </p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>


<script>
import request from "@/utils/request";
import Person from "@/views/bookLayout/secondaryPage/Person";
export default {
  name: "TryCollapse",
  components: {Person},
  data(){
    return{
      bookDate:[],
      bookDetailDate1:[],
      bookDetailDate2:[]
}
}
,
  methods:{
    PersonDetail(){
      request.get("/goodbook/query?key=64a0601e8e3b447a2afbd726ba599188&catalog_id=246&rn=10&rn=10").then(res =>{
        console.log(res.result.data)
        for (let i=0;i<res.result.data.length;i=i+1){
          this.bookDate.push(res.result.data[i].title)
          this.bookDetailDate1.push(res.result.data[i].sub1)
          this.bookDetailDate2.push(res.result.data[i].sub2)
        }
          }
      )
    },
  },
  created() {
    this.PersonDetail()
  }
}
</script>

<style scoped>

</style>