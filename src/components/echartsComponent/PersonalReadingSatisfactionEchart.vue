<template>
  <div >
    <div id='main4' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">个人阅读满意度</h4>
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
  name: "PersonalReadingSatisfactionEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_PersonalReadingSatisfaction").then(res=>{
        var  PersonRate = []
        for (let i=0;i<res.data.length;i=1+i){
          PersonRate.push({"value":res.data[i].rate,"name":res.data[i].satisfactionStyle})
        }
        var chartDom = document.getElementById('main4');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
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
                { value: 1048, name: '满意' },
                { value: 735, name: '一般' },
                { value: 580, name: '不满意' }
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