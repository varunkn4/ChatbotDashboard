import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class GaugeChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          style: {},
          loading: false,
          
        };
      }    
      render() {
        const {
            loading,
            option = {
                tooltip : {
                    formatter: "{a} <br/>{b} : {c}%"
                },
                series: [
                    {
                        name: 'Message Miss Rate',
                        type: 'gauge',
                        detail: {
                            show: false
                            //formatter:'{value}%'
                        },
                        // data: [{
                        //     value: 30, 
                        //     //name: '完成率'
                        // }],
                        data: [{
                            value: this.props.data
                        }],
                        // color: ['#F25F5C','#FFE066', '#247BA0']  
                        axisLine:{lineStyle:{color:[[.3,'#70C1B3'],[.7,'#247BA0'],[1,'#F25F5C']]}},
                    }
                ]                
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
export default GaugeChart;