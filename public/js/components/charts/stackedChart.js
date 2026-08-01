'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StackedChart = (function (_React$Component) {
    _inherits(StackedChart, _React$Component);

    function StackedChart(props) {
        _classCallCheck(this, StackedChart);

        _get(Object.getPrototypeOf(StackedChart.prototype), 'constructor', this).call(this, props);
        console.log('props', props);
        this.state = {

            /*series: [{
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43]
            }, {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27]
            }, {
                name: 'PRODUCT C',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: 'PRODUCT D',
                data: [21, 7, 25, 13, 22, 8]
            }],*/
            series: props.series,
            options: {
                chart: {
                    id: props.id,
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10
                    }
                },
                xaxis: {
                    //type: 'datetime',
                    categories: props.labels
                },
                /*categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                    '01/05/2011 GMT', '01/06/2011 GMT'
                ],*/
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                },
                colors: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800", "#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B", "#4ECDC4", "#C7F464", "#81D4FA", "#1B998B", "#FD6A6A", "#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7", "#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D", "#F9C80E", "#43BCCD"]
            }

        };
    }

    _createClass(StackedChart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //console.log('aaaa');
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.state.series) {
                return;
            }
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { id: this.props.id },
                    React.createElement(ReactApexChart, { options: this.state.options, series: this.state.series, type: 'bar', height: '350' })
                ),
                React.createElement('div', { id: "html-dist-" + this.props.id })
            );
        }
    }]);

    return StackedChart;
})(React.Component);