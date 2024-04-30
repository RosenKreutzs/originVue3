<template>
  <div >
    <div id='main2' style='width:100%; height:100%;margin-left: 3%'></div>
    <h4 style="text-align: center;margin: auto;padding-top: 0.5%;color: #563d7c">读者年龄比例</h4>
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
  name: "DigitalReadingAgeRatingEchart",
  data(){
    return{

    }
  },
  methods:{
    HomeYear(){
      request.get("/api/echarts/echart_DigitalReadingAgeRating").then(res=>{
       var  ageRangeRate = []
        for (let i=0;i<res.data.length;i=1+i){
          ageRangeRate.push({"value":res.data[i].rate,"name":res.data[i].ageRange})
        }
        var chartDom = document.getElementById('main2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: ageRangeRate,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
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