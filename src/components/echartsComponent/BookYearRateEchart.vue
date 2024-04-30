<template>
  <div >
    <h1>书籍评分年份变化图</h1>
    <div id='main' style='width:800px; height:300px'></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import * as echarts from 'echarts';
import request from "@/utils/request";
onMounted(
    () => {
      init()
    }
)
export default {
  name: "HomeEchart",
  data(){
      Year:[]
      HomePhytoplanktonNumber : []
      HomeWaterStrained : []
  },
  methods:{
    HomeYear(){
      request.get("/api/book/echart_rating").then(res=>{
        var rating_year=[]
        var rating_years=[]
        for (let i=0;i<res.data.length;i++){
          rating_year=[]
          rating_year.push(res.data[i].originalPublicationYear)
          rating_year.push(res.data[i].bookRatingYear)
          rating_years.push(rating_year)
        }
        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        var option;


        option = {
          xAxis: {},
          yAxis: {},
          series: [
            {
              symbolSize: 5,
              data:rating_years,
              type: 'scatter'
            }
          ]
        };

        option && myChart.setOption(option);

      })

    },

  },
  mounted() {
    this.HomeYear()
  },

}
</script>

<style>

</style>