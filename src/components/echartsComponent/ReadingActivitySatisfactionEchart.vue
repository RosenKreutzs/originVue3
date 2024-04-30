<template>
  <div >
    <div id='main6' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">阅读活动满意度</h4>
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
  name: "ReadingActivitySatisfactionEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_ReadingActivitySatisfaction").then(res=>{
        var  angleAxisDate = []
        var seriesDate=[]
        for (let i=0;i<res.data.length;i=1+i){
          angleAxisDate.push(res.data[i].satisfactionStyle)
          seriesDate.push(res.data[i].rate)
        }
        var chartDom = document.getElementById('main6');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          polar: {
            radius: [30, '80%']
          },
          radiusAxis: {
            max: 100
          },
          angleAxis: {
            type: 'category',
            data: angleAxisDate,
            startAngle: 75
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: seriesDate,
            coordinateSystem: 'polar',
            label: {
              show: true,
              position: 'middle',
              formatter: '{b}: {c}'
            }
          },
          animation: false
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