'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarChart = (function (_React$Component) {
    _inherits(BarChart, _React$Component);

    function BarChart(props) {
        _classCallCheck(this, BarChart);

        _get(Object.getPrototypeOf(BarChart.prototype), 'constructor', this).call(this, props);
        console.log(props);
        this.state = {

            series: props.series,
            options: {
                colors: ['#31A853', '#FBBC09', '#E84335'],
                dataLabels: {
                    enabled: false
                },
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    stackType: '100%'
                },
                annotations: {
                    xaxis: [{
                        x: props.annotationsX,
                        borderColor: '#333333',
                        label: {
                            borderColor: '#000000',
                            style: {
                                color: '#fff',
                                background: '#333333'
                            },
                            text: 'Sua pontuação ' /*+props.annotationsX*/
                        }
                    }]
                },
                /*yaxis: [{
                  y: 'July',
                  y2: 'September',
                  label: {
                    text: 'Y annotation'
                  }
                }]*/
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                /*title: {
                  text: '100% Stacked Bar'
                },*/
                xaxis: {
                    categories: [''],
                    type: 'number',
                    tickAmount: undefined,
                    labels: {
                        show: false, //remove valores X
                        rotate: 0,
                        trim: true
                    }
                },
                tooltip: {
                    enabled: false, //remove passar mouse
                    y: {
                        formatter: function formatter(val) {
                            return val + "K";
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            }
        };
    }

    _createClass(BarChart, [{
        key: 'componentWillReceiveProps',
        ///////////////////////////

        value: function componentWillReceiveProps(props) {
            if (props.series !== undefined) {
                this.state = {
                    series: props.series,
                    options: {
                        annotations: {
                            xaxis: [{
                                x: props.annotationsX,
                                borderColor: '#333333',
                                label: {
                                    borderColor: '#000000',
                                    style: {
                                        color: '#fff',
                                        background: '#333333'
                                    },
                                    text: 'Sua pontuação '
                                }
                            }]
                        }
                    }
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var chart = null;
            if (this.state.series) {
                chart = React.createElement(ReactApexChart, { options: this.state.options, series: this.state.series, type: 'bar', width: this.props.width });
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: this.props.id },
                    chart
                ),
                React.createElement('div', { id: "html-dist-" + this.props.id })
            );
        }
    }]);

    return BarChart;
})(React.Component);