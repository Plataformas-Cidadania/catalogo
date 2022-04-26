const Home = () => {

    const { useEffect, useState } = React;

    useEffect(() => {
        listData()
    }, []);

    const [list, setList] = useState([]);
    const [divSelected, setDivSelected] = useState(1);
    const [divSelectedTipo, setDivSelectedTipo] = useState("mix");


    const listData = async () => {
        try {
            const result = await axios.get('json/analise.json');
            setList(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const clickChart = (id, tipo) => {
        setDivSelected(id);
        setDivSelectedTipo(tipo);
    }


    return (
        <div className="bg-lgt mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-5 mb-5" >
                        <ul className="menu-left">
                            {
                                list ?
                                    list.map((item, key) => {
                                        return <li className={"list-group-item-theme  cursor " + (divSelected === item.id ? 'menu-left-active' : '')} onClick={() => clickChart(item.id, item.tipo)} key={'menu'+item.id}>
                                            <a href>{item.id} - {item.titulo}</a>
                                        </li>
                                    })
                                    :
                                    null
                            }

                        </ul>
                    </div>
                    <div className="col-md-9 mt-5 mb-5" >
                        {
                            list ?
                                list.map((item, index) => {
                                        let selectedChart = "";
                                        if(divSelectedTipo==="mix"){
                                            selectedChart = <MixedChart id={'mix-chart'+item.id}  series={item.series} labels={item.labels}/>
                                        }
                                        if(divSelectedTipo==="stacked"){
                                            selectedChart = <StackedChart id={'stackedChart'}  series={item.series} labels={item.labels} />
                                        }
                                        if(divSelectedTipo==="pie"){
                                            selectedChart = <PieChart id={'stackedChart'}  series={item.series} labels={item.labels} width={500}/>
                                        }
                                    return (
                                        <div style={{display: divSelected === item.id ? '' : 'none'}} key={'abas'+item.id}>
                                            {selectedChart}
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                        {/*<MixedChart id='mix-chart1'  series={[{
                            name: 'TEAM A',
                            type: 'column',
                            data: [23, 11, 22, 27, 13, 22]
                        }, {
                            name: 'TEAM B',
                            type: 'area',
                            data: [44, 55, 41, 67, 22, 43]
                        }, {
                            name: 'TEAM C',
                            type: 'line',
                            data: [30, 25, 36, 30, 45, 35]
                        }]} labels={['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '05 Jan 2001']}/>*/}


                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Home />,
    document.getElementById('home')
);
