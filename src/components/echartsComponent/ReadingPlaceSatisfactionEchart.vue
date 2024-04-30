<template>
  <div >
    <div id='main7' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">阅读场所满意度</h4>
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
  name: "ReadingPlaceSatisfactionEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_ReadingPlaceSatisfaction").then(res=>{
        var  xAxisDate = [];
        var seriesDate=[];
        console.log(res)
        for (let i=0;i<res.data.length;i=1+i){
          xAxisDate.push(res.data[i].readingPlace)
          if (res.data[i].satisfactionRate =="社区阅读"){
            seriesDate.push({
              value:res.data[i].satisfactionRate ,
              itemStyle: {
                color: '#a90000'
              }
            })
          }else {seriesDate.push(res.data[i].satisfactionRate)}

        }
        console.log(seriesDate)
        var chartDom = document.getElementById('main7');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          xAxis: {
            type: 'category',
            data: xAxisDate
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: seriesDate,
              type: 'bar'
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

<style scoped>

</style>