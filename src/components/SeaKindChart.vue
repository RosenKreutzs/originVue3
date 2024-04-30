<template>
  <div >
    <h1>不同海洋每年平均浮游生物总量和不同浮游生物的数量</h1>
    <div id='SeaKind' style='width:100%; height:300px'></div>
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
  name: "SeaKindEchart",
  data(){
    KindFourData:[]
  },
  methods:{
    SeaKind(){
        // for (let i=0;i<res.data.length;i++){//res.data.length
        //   this.KindYearData.push({value:res.data[i].phytoplanktonNumber,name:res.data[i].scientificName})
        // }
        // 基于准备好的dom，初始化echarts实例
      request.get("/phytoplankton/selectAdsKindDataset").then(res=>{
        var datas=res
        var seaData=[]
        var var0=[]
        var var1=[]
        var var2=[]
        var var3=[]
        var var4=[]
        for (let i=0;i<res.data.length;i++){
          seaData.push(res.data[i].datasetId)
        }
        seaData = Array.from(new Set(seaData))
        for(let i=0;i< seaData.length;i++){
          var0.push(0)
          var1.push(0)
          var2.push(0)
          var3.push(0)
          var4.push(0)
              for (let j=0;j<datas.data.length;j++){
                if(datas.data[j].datasetId==seaData[i]){
                  if(datas.data[j].scientificName=="Rhizosolenia stolterfothii - []"){
                    var0[i]=datas.data[j].dataNumber
                  }
                  if(datas.data[j].scientificName=="Rhizosolenia styliformis -[ ]-"){
                    var1[i]=datas.data[j].dataNumber
                  }
                  if(datas.data[j].scientificName=="Amphisolenia bidentata -[ ]-"){
                    var2[i]=datas.data[j].dataNumber
                  }
                  if(datas.data[j].scientificName=="Chaetoceros coarctatus -[ ]-"){
                    var3[i]=datas.data[j].dataNumber
                  }
                  if(datas.data[j].scientificName=="原生动物- []"){
                    var4[i]=datas.data[j].dataNumber
                  }
                }
              }
        }
        console.log(var0)
        console.log(var1)
        console.log(var2)
        console.log(var3)
        console.log(var4)
        var chartDom = document.getElementById('SeaKind');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
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
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: seaData
          },
          series: [
            {
              name: 'Rhizosolenia stolterfothii',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: var0
            },
            {
              name: 'Rhizosolenia styliformis',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: var1
            },
            {
              name: 'Amphisolenia bidentata',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: var2
            },
            {
              name: 'Chaetoceros coarctatus',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: var3
            },
            {
              name: '原生动物',
              type: 'bar',
              stack: 'total',
              label: {
                show: true
              },
              emphasis: {
                focus: 'series'
              },
              data: var4
            }
          ]
        };

        option && myChart.setOption(option);
      })


    },

  },
  mounted() {
    this.SeaKind()
  },

}
</script>

<style>

</style>