<template>
  <div >
    <h1 >1980-1990与1990-1999的各海域水污染情况对比</h1>
    <div id='SeaPollution' style='width:100%; height:300px'></div>
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
  name: "SeaPollutionEchart",
  data(){
  },
  methods:{
    SeaPollution(){
      request.get("/phytoplankton/selectAdsPhytoplanktonDataset").then(res=>{
        var datas=res
        var SeaData=[]
        var topData=[]
        var bottomData=[]

        for (let i=0;i<res.data.length;i++){
          SeaData.push(res.data[i].datasetId)
        }
        SeaData = Array.from(new Set(SeaData))
        for(let i=0;i< SeaData.length;i++){
          for (let j=0;j<datas.data.length;j++){
            if(datas.data[j].datasetId==SeaData[i]){
            if(datas.data[j].timelength=="1980-1990 "){
            topData.push(datas.data[j].waterStrained)
            }
            if(datas.data[j].timelength=="1990-1999 "){
              bottomData.push(datas.data[j].waterStrained)
              }
            }

          }
        }
        var chartDom = document.getElementById('SeaPollution');
        var myChart = echarts.init(chartDom);
        var option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
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
            data: SeaData
          },
          series: [
            {
              name: '1980-1990',
              type: 'bar',
              data: topData
            },
            {
              name: '1990-1999',
              type: 'bar',
              data:bottomData
            }
          ]
        };
        myChart.setOption(option);
      })


    },

  },
  mounted() {
    this.SeaPollution()
  },

}
</script>

<style>

</style>