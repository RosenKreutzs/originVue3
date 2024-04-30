<template>
  <div >
    <div id='HomePie' style='width:200px; height:300px'></div>
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
  name: "HomePieEchart",
  data(){
    HomePieData:[]
  },
  methods:{
    HomePieYear(){
      request.get("/phytoplankton/selectAdsPertination").then(res=>{
        var chartDom = document.getElementById('HomePie');
        var myChart = echarts.init(chartDom);
        // 指定图表的配置项和数据
        var option = {
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: res.data[0].pertinationNumber, name: res.data[0].pertination },
                { value: res.data[1].pertinationNumber, name: res.data[1].pertination },
              ]
            }
          ]
        };

        option && myChart.setOption(option);
      })
    },

  },
  mounted() {
    this.HomePieYear()
  },

}
</script>

<style>

</style>