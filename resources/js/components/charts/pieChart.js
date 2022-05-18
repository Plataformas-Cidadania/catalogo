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
                }]
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
