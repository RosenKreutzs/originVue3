<template>
  <div class="ebook">
    <div class="read-wrapper">
      <div id="bookRender"></div>
      <div class="mask"  >
        <div class="left" @click="prevPage" style="margin-left: 30%;color: #409EFF">上一页</div>
        <div class="center"></div>
        <div class="right" @click="nextPage" style="color: #409EFF">下一页</div>
      </div>
    </div>
  </div>
</template>

<script>
import Epub from 'epubjs'
const bookUrl = "/static/1.epub"
export default {
  name: 'TryEpub',
  data(){
    return{
      book:'',
      rendition:''
    }
  },
  methods:{
    showEpub(){
      console.log(bookUrl)
      this.book = new Epub(bookUrl)
      this.rendition = this.book.renderTo('bookRender',{
        width:window.innerWidth+"-30%",
        height:window.innerHeight
      })
      this.rendition.display()
    },
    prevPage(){
      this.rendition.prev()
    },
    nextPage(){
      this.rendition.next()
    }
  },
  mounted(){
    this.showEpub()
  }
};
</script>

<style scoped lang="scss" rel='stylesheet/scss'>
.ebook{
  position: relative;
  .read-wrapper{
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      width: 80%;
      height: 100%;
      margin-left: 2%;
      z-index: 10;
      .left{
        flex: 0 0 20%;
      }
      .center{
        flex: 1;
      }
      .right{
        flex: 0 0 20%;
      }
    }
  }
}

</style>
