<template>
  <div >
    <h1>浮游生物种类与数量的按年变化</h1>
    <div id='SeaPerOne' style='width:100%; height:300px'></div>
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
  name: "SeaPerOneEchart",
  data(){
    KindFourData:[]
  },
  methods:{
    SeaPerOne(){
        // for (let i=0;i<res.data.length;i++){//res.data.length
        //   this.KindYearData.push({value:res.data[i].phytoplanktonNumber,name:res.data[i].scientificName})
        // }
        // 基于准备好的dom，初始化echarts实例
        var chartDom = document.getElementById('SeaPerOne');
        var myChart = echarts.init(chartDom);
        var option;
      var app = {};
        // 指定图表的配置项和数据
      const categories = (function () {
        let now = new Date();
        let res = [];
        let len = 10;
        while (len--) {
          res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
          now = new Date(+now - 2000);
        }
        return res;
      })();
      const categories2 = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(10 - len - 1);
        }
        return res;
      })();
      const data = (function () {
        let res = [];
        let len = 10;
        while (len--) {
          res.push(Math.round(Math.random() * 1000));
        }
        return res;
      })();
      const data2 = (function () {
        let res = [];
        let len = 0;
        while (len < 10) {
          res.push(+(Math.random() * 10 + 5).toFixed(1));
          len++;
        }
        return res;
      })();
      option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: categories
          },
          {
            type: 'category',
            boundaryGap: true,
            data: categories2
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '多少种浮游生物/个',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: '总共浮游生物数量/kg',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: '多少种浮游生物',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data
          },
          {
            name: '总共浮游生物数量',
            type: 'line',
            data: data2
          }
        ]
      };
      app.count = 11;
      setInterval(function () {
        let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
        data.shift();
        data.push(Math.round(Math.random() * 1000));
        data2.shift();
        data2.push(+(Math.random() * 10 + 5).toFixed(1));
        categories.shift();
        categories.push(axisData);
        categories2.shift();
        categories2.push(app.count++);
        myChart.setOption({
          xAxis: [
            {
              data: categories
            },
            {
              data: categories2
            }
          ],
          series: [
            {
              data: data
            },
            {
              data: data2
            }
          ]
        });
      }, 2100);

      option && myChart.setOption(option);

    },

  },
  mounted() {
    this.SeaPerOne()
  },

}
</script>

<style>

</style>