class PieChart extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            series: props.series,
            options: {
                chart: {
                    width: 380,
                    type: 'pie',
                },
                labels: props.labels,
                legend: {
                    position: 'right',
                    width: 550
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 380
                        },
                        legend: {
                            position: 'right'
                        }
                    }
                }],
                colors: [
                            "#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5", "#03A9F4", "#4CAF50", "#F9CE1D", "#FF9800",
                            "#33B2DF", "#546E7A", "#D4526E", "#13D8AA", "#A5978B", "#4ECDC4", "#C7F464", "#81D4FA", "#1B998B", "#FD6A6A",
                            "#2B908F", "#F9A3A4", "#90EE7E", "#FA4443", "#69D2E7", "#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D",
                            "#F9C80E", "#43BCCD"
                ],
                stroke: {
                    show: false,
                    width:0
                },

            },
        }
    }

    render() {
        let chart = null;
        if(this.state.series){
            chart = <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={this.props.width} />
        }
        return (
            <div>
                <div  id={this.props.id}>
                    {chart}
                </div>
                <div id={"html-dist-"+this.props.id}>
                </div>
            </div>
        );
    }
}
