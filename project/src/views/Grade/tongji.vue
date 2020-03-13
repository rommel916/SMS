<template>
  <div>
    <Layout :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>成绩检测</BreadcrumbItem>
          <BreadcrumbItem>成绩统计</BreadcrumbItem>
          <div id="myChart" class="p-t-20 m-auto" style="width: 1000px;height:500px;"></div>
        </Breadcrumb>
        <Form></Form>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
    title: {
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['李三', '钟四', '赵思', '李芳', '郭琦', '白苟']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['测试一', '测试二', '测试三', '测试四', '测试五', '测试六']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '李三',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
         {
            name: '白苟',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '钟四',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '赵思',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '李芳',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '郭琦',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>