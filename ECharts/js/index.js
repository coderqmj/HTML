// 1.成绩柱状图
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
// 2.学习进度柱状图
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
// 3.折线图1的制作
(function () {
  var yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  var myChart = echarts.init(document.querySelector('.line .chart'));
  option = {
    color: ['#e74c3c', '#f1c40f'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      // data: ['邮件营销', '联盟广告'],
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%'
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,// 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true // 包含刻度文字在内
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#4c9bfd',
          fontSize: 10
        }
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#4c9bfd',
          fontSize: 12
        }
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      },
      {
        name: '新增游客',
        type: 'line',
        smooth: true,
        stack: '总量',
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
      }

    ]
  };
  myChart.setOption(option)
  // 图标与屏幕自适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
  // 点击切换效果
  $(".line h2").on('click', 'a', function () {
    // alert(1)
    // console.log($(this).index())
    // 点击a之后根据索引号找到对应的yearData相关元素
    console.log(yearData[$(this).index()])
    var obj = yearData[$(this).index()]
    option.series[0].data = obj.data[0]
    option.series[1].data = obj.data[1]
    // 数据改变之后需要重新渲染
    myChart.setOption(option)
  })
})();
// 4.折线图2的制作
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'))
  option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      // data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
      textStyle: {
        fontSize: 12,
        color: "rgba(255,255,255,.5)"
      },
      // showContent: false
    },
    // 图标位置
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        // show: false,
        type: 'category',
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        boundaryGap: false,
        data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        smooth: true,
        type: 'line',
        // stack: '总量',
        symbol: "circle",
        showSymbol: false,
        symbolSize: 8,
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        areaStyle: {
          // 渐变色，只需要复制即可
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        lineStyle: {
          color: '#0184d5',
          width: 3
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 3
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // stack: '总量',
        areaStyle: {},
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
      }
    ]
  };
  myChart.setOption(option)
})();