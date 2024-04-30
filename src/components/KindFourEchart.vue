<template>
  <div >
    <h1>四种浮游生物的水污染每年情况</h1>
    <div id='KindFour' style='width:100%; height:300px'></div>
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
  name: "KindFourEchart",
  data(){
return{    YearData:[],
  oneData:['Foraminiferida '],
  twoData:['放射虫类'],
  threeData:['这种spp。'],
  fourData:['Chaetoceros (phaeoceros) spp.'],
  chartData: [
    ['年份', '2012', '2013', '2014', '2015', '2016', '2017'],
    ['Foraminiferida ', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
    ['放射虫类', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
    ['这种spp。', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
    ['Chaetoceros (phaeoceros) spp.', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
  ]}
  },
  methods:{
    KindFour(){
      request.get("/phytoplankton/selectAdsKindFourYear").then(res=>{
        const starts=res
        this.YearData=[]
        for (let i=0;i<res.data.length;i++){//res.data.length
          this.YearData.push(res.data[i].year)
        }
        const result = Array.from(new Set(this.YearData))
        result.unshift('年份')
        this.YearData=result
        for(let i=1;i<this.YearData.length;i++){
          this.oneData.push(0)
          this.twoData.push(0)
          this.threeData.push(0)
          this.fourData.push(0)
          for (let j=0;j<res.data.length;j++){
            if (starts.data[j].year== this.YearData[i]) {
              if(starts.data[j].scientificName == 'Foraminiferida '){
              this.oneData[i]=starts.data[j].waterStrained
            }
              if(starts.data[j].scientificName == '放射虫类'){
                this.twoData[i]=starts.data[j].waterStrained
              }
              if(starts.data[j].scientificName == '这种spp。'){
                this.threeData[i]=starts.data[j].waterStrained
              }
              if(starts.data[j].scientificName == 'Chaetoceros (phaeoceros) spp.'){
                this.fourData[i]=starts.data[j].waterStrained
              }

            }
          }
        }
        const a=[]
        a.push(this.YearData)
        a.push(this.oneData)
        a.push(this.twoData)
        a.push(this.threeData)
        a.push(this.fourData)
        // 基于准备好的dom，初始化echarts实例
        var chartDom = document.getElementById('KindFour');
        var myChart = echarts.init(chartDom);
        var option;
        // 指定图表的配置项和数据
        setTimeout(function () {
          option = {
            legend: {},
            tooltip: {
              trigger: 'axis',
              showContent: false
            },
            dataset: {
              source:a
            },
            xAxis: { type: 'category' },
            yAxis: { gridIndex: 0 },
            grid: { top: '55%' },
            series: [
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row',
                emphasis: { focus: 'series' }
              },
              {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                emphasis: {
                  focus: 'self'
                },
                label: {
                  formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                  itemName: 'product',
                  value: '2012',
                  tooltip: '2012'
                }
              }
            ]
          };
          myChart.on('updateAxisPointer', function (event) {
            const xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
              const dimension = xAxisInfo.value + 1;
              myChart.setOption({
                series: {
                  id: 'pie',
                  label: {
                    formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                  },
                  encode: {
                    value: dimension,
                    tooltip: dimension
                  }
                }
              });
            }
          });
          myChart.setOption(option);

        });
      })

    },

  },
  mounted() {
    this.KindFour()
  },

}
</script>

<style>

</style>