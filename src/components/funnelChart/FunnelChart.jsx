import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class FunnelChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: {},
          loading: false,
          
        };
      }    
      render() {
        var data = this.props.data;
        const dataValue = data && Object.entries(data).map(item => ({ name: item[0], value: item[1]}));
        const {
            loading,
            option = {
                calculable: true,                
                series: [
                    {
                        type:'funnel',
                        left: 0,
                        top: 20,
                        bottom: 20,
                        width: '100%',
                        min: 0,
                        max: 100,
                        minSize: '0%',
                        maxSize: '100%',
                        sort: 'descending',
                        gap: 2,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: "{b} \n ({c})"
                            },
                            emphasis: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                length: 10,
                                lineStyle: {
                                    width: 1,
                                    type: 'solid'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        },
                        data: dataValue
                    }
                ],
                color: ['#F25F5C', '#70C1B3', '#247BA0'],
                tooltip: {
                    trigger: 'axis'
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
export default FunnelChart;