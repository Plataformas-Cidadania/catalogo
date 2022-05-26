const Home = () => {

    const { useEffect, useState } = React;

    const [lista, setLista] = useState([]);
    const [listaAtualizado, setListaAtualizado] = useState([]);
    const [json, setJson] = useState(false);
    const [divSelected, setDivSelected] = useState(1);
    const [divSelectedTipo, setDivSelectedTipo] = useState("mix");

    const [icon, setIcon] = useState('chart');

    useEffect(() => {
        listaData()
    }, []);

    useEffect(() => {
        if(json){
            politicasPorAno();
        }
    }, [lista])

    const listaData = async () => {
        try {
            const result = await axios.get('json/analise.json');
            setJson(true);
            setLista(result.data);
            //politicasPorAno()
        } catch (error) {
            console.log(error);
        }
    }

    const politicasPorAno = async () => {
        setJson(false);
        try {
            const result = await axios.get('api/metricas/politicas_por_ano');
            let newLista = lista;
            newLista[1] = result.data;
            setListaAtualizado(newLista);

        } catch (error) {
            console.log(error);
        }
    }

    //console.log('------', lista)

    const clickChart = (id, tipo) => {
        setDivSelected(id);
        setDivSelectedTipo(tipo);
    }

    const clickIcon = (id, tipo) => {
        setIcon(tipo)
    }


    return (
        <div className="bg-lgt mt-5 mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-5 mb-5" >
                        <ul className="menu-left">
                            {
                                listaAtualizado ?
                                    listaAtualizado.map((item, key) => {
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
                        <div className="table-responsive mb-3">
                        {
                            listaAtualizado ?
                                listaAtualizado.map((item, index) => {
                                        let selectedChart = "";
                                        if(divSelectedTipo==="mix"){
                                            selectedChart = <MixedChart id={'mix-chart'+item.id}  series={item.series} labels={item.labels}/>
                                        }
                                        if(divSelectedTipo==="stacked"){
                                            selectedChart = <StackedChart id={'stackedChart'}  series={item.series} labels={item.labels} />
                                        }
                                        if(divSelectedTipo==="pie"){
                                            selectedChart = <PieChart id={'stackedChart'}  series={item.series} labels={item.labels} width={1000}/>
                                        }
                                    return (
                                        <div style={{display: divSelected === item.id ? '' : 'none'}} key={'abas'+item.id}>

                                            <div style={{display: icon === 'chart' ? '' : 'none'}}>
                                                {selectedChart}
                                            </div>
                                            <div style={{display: (icon === 'table' ? '' : 'none'), overflow: 'auto'}}>
                                                <Tables
                                                    series={item.series}
                                                    labels={item.labels}
                                                    index={index}
                                                    tipo={item.tipo}
                                                />
                                            </div>


                                            <br/><br/>

                                            <div onClick={() => clickIcon(item.id, 'table')} style={{display: icon === 'chart' ? '' : 'none'}} className="cursor">
                                                <i className="fas fa-table fa-2x"/>
                                            </div>
                                            <div onClick={() => clickIcon(item.id, 'chart')} style={{display: icon === 'table' ? '' : 'none'}} className="cursor">
                                                <i className="fas fa-chart-area fa-2x"/>
                                            </div>

                                            <div style={{textAlign: 'right'}}><strong>Fonte: </strong>{item.fonte}</div>
                                        </div>
                                    )
                                })
                                :
                                null
                        }

                        </div>

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
