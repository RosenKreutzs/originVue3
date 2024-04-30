<template>
  <div >
    <div id='main1' style='width:100%; height:100%;'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">数字阅读比例</h4>
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
  name: "DigitalReadingRatingEchart",
  data(){
    return{
      DigitalReadStyle:[],
      RateYear2020 : [],
      RateYear2021: []
    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_DigitalReadingRating").then(res=>{
       var  DigitalReadStyle=[]
       var  RateYear2020 = []
        var  RateYear2021= []
        for (let i=0;i<res.data.length-1;i=2+i){
          DigitalReadStyle.push(res.data[i].digitalReadStyle)
          RateYear2021.push(res.data[i].rate)
          RateYear2020.push(res.data[i+1].rate)
        }
        var chartDom = document.getElementById('main1');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['2021', '2020']
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              // prettier-ignore
              data: DigitalReadStyle
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '2021',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
              },
              data: RateYear2021,
              markPoint: {
                data: [
                  { type: 'max', name: 'Max' },
                  { type: 'min', name: 'Min' }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: 'Avg' }]
              }
            },
            {
              name: '2020',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
              },
              data:RateYear2020,
              markPoint: {
                data: [
                  { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
                  { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: 'Avg' }]
              }
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