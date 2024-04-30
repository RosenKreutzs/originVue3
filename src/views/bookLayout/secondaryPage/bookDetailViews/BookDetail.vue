<template>
  <div style="padding: 10px;display: flex">
    <BookRate style="width: 50%;"></BookRate>
    <BookForm style="width: 50%;"></BookForm>
  </div>

</template>

<script>
import BookForm from "@/views/bookLayout/secondaryPage/bookDetailViews/components/BookForm";
import BookRate from "@/views/bookLayout/secondaryPage/bookDetailViews/components/BookRate";


let editor;

export default {
  components:{
    BookForm,
    BookRate
  },
  data(){
    return{
      form:{},
      imageUrl:'',
      tableData:[

      ],
      details:{},
      vis:false
    }
  },
  created() {
    this.load()
  },
  mounted() {//只有页面元素都执行后才会执行mounted的代码
  },
  methods:{

    load(){
      console.log(sessionStorage.getItem("pageSwitch"))
      if (sessionStorage.getItem("pageSwitch")==1){
        sessionStorage.removeItem("pageSwitch")
        sessionStorage.setItem("pageSwitch",0)
        console.log(sessionStorage.getItem("pageSwitch"))
        history.go(0)
      }
    }



  }

}
</script>

