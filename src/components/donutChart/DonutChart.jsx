import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class DonutChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: {},
          loading: false,
          
        };
      }    
      render() {
        const data= this.props.data;
        const donutDataValues = data && Object.entries(data).map(item => ({ name: item[0], value: item[1]}));
        const {
            loading,
            option = {
                tooltip: {
                    title: 'test',
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    show: true,
                    top: '20px'
                },                
                series: [
                    {   
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                             }                        
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: donutDataValues,
                        center: ['50%','60%']
                    }
                ],              
                color: ['#F25F5C','#FFE066', '#247BA0', '#70C1B3']   
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
export default DonutChart;