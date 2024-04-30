<template>
  <!--
  Header.vue文件是页面的一个组件(页面组件都放在components文件夹中)
  --><div class="bd-navbar" style="height: 75px;line-height: 50px;display: flex;background-color: #563d7c;width:100%">
    <div style="width: 200px;padding-left: 2%;font-weight: bold;color:blue ;">
      <el-avatar style="margin-top: 8%;" @click="$router.push('/Person')" src="https://ts1.cn.mm.bing.net/th/id/R-C.33436fa72e43ba180f469fbb23b60983?rik=sODcl%2fOiQOLMxQ&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20130715%2f20130715113700-1193379300.jpg&ehk=2C8T5%2fRBfe7WibZcyhgAreNunCzWP2Fk973f3EvrftE%3d&risl=&pid=ImgRaw&r=0"/>
    </div>
    <div style="flex:1"></div>
    <div style="width: 100px">
      <img :src=backHead style="width: 30%;margin-top: 20%;margin-left:40% " @click="quitTo">
    </div>
  </div>
</template>

<script>


let userStr=sessionStorage.getItem("user")||"{}"
let user=JSON.parse(userStr)
export default {
  name: "Header",
  data() {
    return {
      backHead:require("@/assets/importPictures/backHead.svg"),
    }
  },
  methods:{
    quitTo(){
      sessionStorage.setItem("user", null)
      this.$router.push("/")
    }
  },
  created() {
    console.log(user)
    this.nickName=user.nickName
  }
}
</script>

<style scoped>
.bd-navbar {
  padding-right: .5rem;
  padding-left: .5rem;

}
</style>