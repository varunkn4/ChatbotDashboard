import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class PictorialChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: {},
          loading: false,
          
        };
      }    
      render() {
        var data=[];
        data = this.props.data;
        var key=[];
        var value=[];
        var i;
        for(i in data){        
            key.push(i);
            value.push(data[i]);
        }
        const {
            loading,
            option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'none'
                    },
                    formatter: function (params) {
                        return params[0].name + ': ' + params[0].value;
                    }
                },
                xAxis: {
                    //data: ['Intent1', 'Intent2', 'Intent3', 'Intent4', 'Intent5', 'Intent6', 'Intent7', 'Intent8' ],
                    data: key,
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {
                        textStyle: {
                            fontSize: 8,
                            color: '#247BA0'
                        }
                    }
                },
                yAxis: {
                    name: 'Count',
                    nameTextStyle: {
                        fontSize: 12
                    },
                    splitLine: {show: false},
                    axisTick: {show: false},
                    axisLine: {show: false},
                    axisLabel: {show: true}
                },
                color: ['#247BA0'],
                series: [{
                    type: 'pictorialBar',
                    barCategoryGap: '-100%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    itemStyle: {
                        normal: {
                            opacity: 0.7
                        },
                        emphasis: {
                            opacity: 1
                        },
                        color: "#247BA0"
                    },
                    //data: [90, 80, 70, 60, 50, 40, 30, 20]
                    data: value
                }],
                grid: {
                    height: '200px',
                    top: '40px',
                    width: '85%',
                    left: '50px'
                }
            }
        } = this.state;
        return (
          <div className="echarts">
            <div className="echart p-2">
              <ReactEcharts
                style={this.state.style}
                notMerge
                resizable
                loading={loading}
                option={option}
              />
            </div>
          </div>
        );
      }
    }
export default PictorialChart;