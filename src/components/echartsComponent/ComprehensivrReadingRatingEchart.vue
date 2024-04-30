<template>
  <div >
    <div id='main3' style='width:100%; height:100%;'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">综合阅读比例</h4>
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
  name: "ComprehensivrReadingRatingEchart",
  data(){
    return{
    }
  },
  methods:{
    HomeYear(){
      request.get('/api/echarts/echart_ComprehensivrReadingRating').then(res=>{
       var  ReadStyle=[]
       var  RateYear2020 = []
        var  RateYear2021= []
console.log(res.data)
        for (let i=0;i<res.data.length-1;i=2+i){
          ReadStyle.push(res.data[i].readStyle)
          RateYear2021.push(res.data[i].rate)
          RateYear2020.push(res.data[i+1].rate)
        }
        var chartDom = document.getElementById('main3');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ReadStyle
          },
          series: [
            {
              name: '2021',
              type: 'bar',
              data: RateYear2021
            },
            {
              name: '2020',
              type: 'bar',
              data: RateYear2020
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