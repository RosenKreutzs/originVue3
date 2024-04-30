<template xmlns="http://www.w3.org/1999/html">
  <div style="width: 220px;height: 100%;background-color:#2f4050">
  <el-row class="tac">
    <el-col :span="12">
      <div style="width: 100%;
        overflow: hidden;padding: 33px 25px">
        <div style="width: 170px;height: 122.13px;display: inline">
        <el-avatar :size="80">
          <img
              src="../assets/user.jpg"
          />
        </el-avatar>
          <div style="padding-top: 20px">
            <font style="margin-left: 10px;" color="#DFE4ED">用户名</font>
          </div>

          <el-dropdown>
        <span class="el-dropdown-link" style="width: 100px;margin-left: 10px;padding-top: 20px;color: #8095a8">
          个人信息<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">地区</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  手机号
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">电子邮件</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#a7b1c2"
            style="width: 220px;"
            :default-active="path"
            router
        >

          <el-sub-menu index="1">
            <template #title >
              <el-icon > <Menu/></el-icon>
            <span>总结性图表</span>
            </template>
            <el-menu-item index="/Home" >浮游生物数量与水污染</el-menu-item>
            <el-menu-item index="/KindFour" >四种浮游生物的水污染</el-menu-item>
            <el-menu-item index="/KindNumber" >不同浮游生物数量分布</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="/book">
            <el-icon><SwitchFilled /></el-icon>
            浮游生物鸟群模型
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title >
              <el-icon><Histogram /></el-icon>
              <span>详细数据图表</span>
            </template>
            <el-menu-item index="/SeaSix" >不同海洋情况</el-menu-item>
            <el-menu-item index="/SeaPer" >水污染重点因素</el-menu-item>
          </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
  </div>
</template>
<script>
import { Menu,Histogram,SwitchFilled} from '@element-plus/icons-vue'
export default {
  components:{
    Menu,
    Histogram,
    SwitchFilled
  },
  name:"Aside",
  data(){
    path:this.$route.path
    user:{}
  },
  created() {
    let userStr=sessionStorage.getItem("user")||"{}"
    this.user=JSON.parse(userStr)
  }

}
</script>
<style scoped>

</style>