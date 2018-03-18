import React, {PureComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import ChartView from 'react-native-highcharts';
import PropTypes from 'prop-types';

import {window} from '../global/global.calculation';

class Chart extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const arr = this.props.data;
        let Highcharts = 'Highcharts';
        let conf = {
            // chart: {
            //     type: 'spline',
            //     animation: Highcharts.svg, // don't animate in old IE
            //     marginRight: 10,
            //     events: {
            //         load: function () {
            //             // set up the updating of the chart each second
            //             let series = this.series[0];
            //             setInterval(function () {
            //                 let x = (new Date()).getTime(), // current time
            //                     y = Math.random();
            //                 series.addPoint([x, y], true, true);
            //             }, 1000);
            //         }
            //     }
            // },
            title: {
                text: this.props.title
            },
            xAxis: {
                title: {
                    text: this.props.xAxisTitle
                },
                type: 'datetime',
                tickPixelInterval: 10000
            },
            yAxis: {
                title: {
                    text: this.props.yAxisTitle
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: [{
                name: 'Data',
                data: (function () {
                    if(!arr || !arr.length) {
                        return [];
                    }

                    let data = [];
                    for (let i = 1, len = arr.length; i <= len; i += 1) {
                        data.push({
                            x: new Date().getUTCMinutes() * i * 1000,
                            y: arr[len - i] | []
                        });
                    }

                    return data.reverse();
                }())
            }]
        };

        const options = {
            global: {
                useUTC: false
            },
            lang: {
                decimalPoint: ',',
                thousandsSep: '.'
            }
        };

        return (
            <View style={styles.container}>
                <ChartView style={{height: 300}} config={conf} options={options}></ChartView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: window.width * 0.75,
        height: 'auto',

    }
});

Chart.propTypes = {
    title: PropTypes.string,
    yAxisTitle: PropTypes.string,
    xAxisTitle: PropTypes.string
};

export {Chart};
