、<template>
  <div style="padding: 10px;">
    <PictureTurn></PictureTurn>
    <TryCollapse></TryCollapse>
  </div>
</template>

<script>


let userStr=sessionStorage.getItem("user")||"{}"
let user=JSON.parse(userStr)
import PictureTurn from "@/components/slideshowComponent/PictureTurn";
import HomeEchart from "@/components/echartsComponent/BookYearRateEchart";
import TryCollapse from "@/components/collapseComponent/TryCollapse.vue";

let editor;

export default {
  name: 'News',
  components:{
    PictureTurn,
    HomeEchart,
    TryCollapse
  },
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
    }
  },
  created() {

    this.load()
  },
  mounted() {//只有页面元素都执行后才会执行mounted的代码
  },
  methods:{
    load(){

    },


  }

}
</script>

