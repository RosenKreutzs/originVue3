<template>
  <div >
    <div id='main8' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;margin-left: 5%;color: #563d7c">阅读场所使用率</h4>
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
  name: "ReadingSpaceUtilizationRateEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get( "/api/echarts/echart_ReadingSpaceUtilizationRate").then(res=>{
        var  xAxisDate = [];
        var seriesDate=[];
        console.log(res)
        for (let i=0;i<res.data.length;i=1+i){
          xAxisDate.push({value:res.data[i].rate,name:res.data[i].readingPlace})

        }
        console.log(seriesDate)
        var chartDom = document.getElementById('main8');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}%'
          },
          toolbox: {
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          legend: {
            data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
          },
          series: [
            {
              name: 'Funnel',
              type: 'funnel',
              left: '10%',
              top: 60,
              bottom: 60,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'descending',
              gap: 2,
              label: {
                show: true,
                position: 'inside'
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: 'solid'
                }
              },
              itemStyle: {
                borderColor: '#fff',
                borderWidth: 1
              },
              emphasis: {
                label: {
                  fontSize: 20
                }
              },
              data: xAxisDate
            }
          ]
        };;

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