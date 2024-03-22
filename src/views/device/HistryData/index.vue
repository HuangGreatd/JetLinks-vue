<template>
  <div class="watch" ref="EcharRef" style="width: 320px; height: 400px"></div>
  <button @click="handleUpdateChart">Refresh Chart</button>
</template>

<script lang="ts" setup>
import {EChartsOption} from "echarts";
import {getHistryData} from '@/api/device/instance';
import * as echarts from "echarts";
import {ref, onMounted} from 'vue';
import {DeviceQueryData} from "@/views/device/HistryData/typings";

const EcharRef = ref<HTMLElement | null>(null)

const data: DeviceQueryData = {
  deviceId: "1770054075937800192",
  time: '2024-3',
  properties: ['X'],
  rangeTime: "1",
  countSize: 60
}

// 创建一个方法来初始化和更新图表
const initChart = async () => {
  const res = await getHistryData("1770052195358687232", data);
  let xAxisData =null;
  let yAxisData = null;
  if (res.message === 'success'){
    xAxisData=res.result.data[0].xaxisData;
    yAxisData =res.result.data[0].seriesData[0].data
  }


  if (EcharRef.value) {
    const myChart = echarts.init(EcharRef.value);
    const options: EChartsOption = {
      xAxis: {
        type: 'category',
        data: xAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: {
        data: yAxisData,
        type: 'line'
      }
    };
    myChart.setOption(options);
  }
}

// 在 onMounted 钩子函数中调用 initChart 函数
onMounted(initChart);

// 当点击按钮时也调用 initChart 函数
const handleUpdateChart = () => {
  initChart();
};
</script>

<style lang="less" scoped>

</style>