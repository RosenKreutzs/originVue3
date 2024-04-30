<template>
  <!--
  Header.vue文件是页面的一个组件(页面组件都放在components文件夹中)
  --><div class="bd-navbar" style="height: 75px;line-height: 50px;display: flex;background-color: #563d7c;width:100%">
  <div style="width: 100px;padding-right:20px;" @click="toLocation('idHead')"><img src="../../assets/importPictures/logon.png" style="margin: 15px;width: 50px" ></div>
  <div class="nav-link" @click="toLocation('idReason')">起因</div>
  <div class="nav-link" @click="toLocation('idCourse')">方式</div>
  <div class="nav-link" @click="toLocation('idFountion')">活动</div>
  <div class="nav-link" @click="toLocation('idAnalysis')">场所</div>
  <div class="nav-link" @click="toLocation('idOpinon')">看法</div>
<NowTime class="nav-link" style="margin-left:58%;margin-right: 1%"></NowTime>
  <Message class="nav-link" style="width: 3%; padding: 10px;" @click="$router.push('/Complaint')" />
  <User class="nav-link" style="width: 3%; padding: 10px;" @click="$router.push('/Login')"/>
</div>
</template>

<script>
import { Message,User } from '@element-plus/icons-vue'
import NowTime from "@/components/timeComponent/NowTime";
export default {
  name: "IntroduceHeader",
  data() {
    return {
      nickName:"",
      childNum:0
    }
  },
  components:{Message,User , NowTime},
  methods:{
    toLocation(idLocation){
  this.$emit('toLoction',idLocation);//组件IntroduceHeader使用父组件的方法toLoction并传参idLocation
}

  },
  created() {
  }
}
</script>

<style scoped>
.nav-link {
  padding-right: .5rem;
  padding-left: .5rem;
  padding-top: 10px;
  color: #cbbde2;
}
.bd-navbar {
  padding-right: .5rem;
  padding-left: .5rem;

}

</style>