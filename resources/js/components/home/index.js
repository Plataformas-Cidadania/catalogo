const Home = () => {

    const { useEffect, useState } = React;

    useEffect(() => {
        listData()
    }, []);

    const [list, setList] = useState([]);
    const [divSelected, setDivSelected] = useState(0);


    const listData = async () => {
        try {
            const result = await axios.get('json/analise.json');
            setList(result.data);
        } catch (error) {
            console.log(error);
        }
    }

    const clickChart = (id) => {
        setDivSelected(id);
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
                                        return <li className={"list-group-item-theme  cursor " + (divSelected === key ? 'menu-left-active' : '')} onClick={() => clickChart(key)}>
                                            <a href>{item.titulo}</a>
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
                                    return <div style={{display: divSelected === index ? 'none' : ''}}><MixedChart id={'mix-chart'+index}  series={item.series} labels={item.labels}/></div>
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
