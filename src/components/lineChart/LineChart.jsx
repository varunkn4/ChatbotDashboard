import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class LineChart extends Component {
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
        var timeAxis=[];
        var countValue=[];
        var i;
        for(i in data)
        {
            timeAxis.push(i);
            countValue.push(data[i]);
        }
        const {
            loading,
            option = {
                xAxis: {
                    //name: 'Hours',
                    nameTextStyle: {
                    fontSize: 12
                    },
                    type: 'category',
                    data:timeAxis,
                    axisLabel:{
                        fontSize:10                    
                    },
                },
                yAxis: {
                    name: 'Count',
                    nameTextStyle: {
                        fontSize: 12
                    },
                    type: 'value'
                },
                tooltip: {
                    trigger: 'axis'
                },
                grid: {
                    top: "40px",
                    height: "200px"
                },
                series: [{
                    data:countValue,
                    type: 'line',
                    itemStyle: {
                        color: "#F25F5C"
                    }
                }]
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
export default LineChart;