<template>
  <div >
    <div id='main5' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">活动参与比例</h4>
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
  name: "ReadingParticipationRateEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_ReadingParticipationRate").then(res=>{
        var  indicatorDate = []
        var seriesDate=[]
        for (let i=0;i<res.data.length;i=1+i){
          indicatorDate.push({"name":res.data[i].moveName,"max":100})
          seriesDate.push(res.data[i].rate)
        }
        var chartDom = document.getElementById('main5');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          radar: {
            // shape: 'circle',
            indicator: indicatorDate
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: seriesDate,
                  name: 'Allocated Budget'
                }
              ]
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