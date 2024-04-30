<template>
  <div>
    <!-- 头部-->
    <Header1 style="z-index: 2;position: fixed;" /><!-- components文件夹中的组件，用的时候就导入然后用标签方式使用-->

      <!-- 内容区域-->
      <router-view style="flex: 1;z-index: 1" />
    <Bottom1></Bottom1>
  </div>
</template>

<script>
import Header1 from "@/components/headerComponent/Header1";
import Aside from "@/components/asideComponent/Aside";
import Bottom1 from "@/components/bottomComponent/Bottom1";
export default {
  name: "layout1",
  components:{
    Header1,/* Header是组件名，写了export default后，选中组件名按Alt+Enter生成 import Header from "@/components/Header";*/
    Aside,
    Bottom1
  }
}
</script>

