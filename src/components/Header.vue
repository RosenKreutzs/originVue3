<template>
<div style="height: 60px;line-height: 50px;border-bottom: 1px solid #ccc;display: flex;background-color: #f3f3f4;">
  <div style="background:  #1AB394;width: 36px;height: 30px;border-radius: 3px;color: #ffffff;margin: 20px">
    <el-icon style="position: absolute;
      margin-left:  10px;
       margin-top: 7px;
"><Fold/></el-icon>
  </div>
  <div style="width: 200px;margin-top: 8px;padding-left:0px" class="inputDeep" >
    <el-input placeholder="Please input" ></el-input>
  </div>
  <div style="flex:1"></div>
  <div style="color:#999C9E;display: flex">
    <el-icon style="font-size: 22px;margin-top:15px;"><Upload /></el-icon>
    <div style="margin-left: 10px;margin-right: 40px">退出</div>
  </div>

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