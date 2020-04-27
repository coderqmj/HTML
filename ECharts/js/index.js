// 成绩柱状图
(function () {
  // 1.初始化
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定数据项
  var option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line'
        // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 图表的大小
    grid: {
      left: '0',
      right: '0',
      bottom: '4%',
      top: '10px',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['c++', 'java', '机算机网络', '操作系统', '组成原理', '数据结构', '软件工程'],
        // data: ['1', '2', '3', '4', '5', '6', '7'],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签相关
        axisLabel: {
          // show: false,
          color: 'rgba(255,255,255,.6)',
          fontSize: 12
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.6)',
          fontSize: '12'
        },
        axisLine: {
          // show: false
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        // 分割线
        splitLine: {
          lineStyle: 'rgba(255,255,255,,.1)'
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [72, 80, 77, 75, 92, 74, 77],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3.配置项给实例对象
  myChart.setOption(option);
  // 图标与屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
// 学习进度柱状图
(function () {
  var myColor = ['#3498db', '#e74c3c', '#f1c40f', '#2ecc71', '#e056fd'];
  var myChart = echarts.init(document.querySelector('.bar2 .chart'))
  option = {
    grid: {
      left: '22%',
      bottom: '10%',
      top: '10',
      // containLabel: true
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5", "CSS3", "JavaScript", "VUE", "Nodejs"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#fff"
        }
      },
      {
        show: false,
        data: [702, 350, 610, 793, 664],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: [70, 50, 50, 60, 80],
        // 第一组数字设为圆角
        itemStyle: {
          barBorderRadius: 20,
          // 可以通过函数设置每条柱子的颜色
          color: function (params) {
            // console.log(params)
            return myColor[params.dataIndex]
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        label: {
          show: true,
          position: 'inside',
          // {}会自动解析data数据 
          formatter: '{c}%'
        }
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        data: [100, 100, 100, 100, 100],
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 15,
        itemStyle: {
          color: 'none',
          borderColor: '#00c1de',
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };
  myChart.setOption(option)
  // 图标与屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();