<template>
  <div id="wangeditor">
    <div ref="toolbar" class="toolbar"></div>
      <div ref="toolbar" class="editorbar"></div>
    <el-button @click="onClick">上传</el-button>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "EditorTry",
data(){
    return{
      content:"",
      editor: null,
  }
},created() {

  },
  mounted(){
    this.editor = new E(this.$refs.toolbar, this.$refs.editor);//获取组件并构造编辑器
    this.editor.config.uploadImgServer = "http://localhost:9090/files/editor/upload"//用来本地上传照片的
    this.editor.config.uploadFileName = "file"  // 设置上传参数名称
    this.editor.create();
    // 创建富文本实例
    this.editor.config.onchange= html => {
      this.content = html;
    };
// }
  },
  methods:{
    onClick(){
      console.log(this.content)
    },//this.dialogVisible=true是add函数触发时，改变变量

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>