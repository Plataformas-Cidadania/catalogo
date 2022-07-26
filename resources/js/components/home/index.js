const Home = () => {

    const { useEffect, useState } = React;

    const [lista, setLista] = useState([]);
    const [listaAtualizado, setListaAtualizado] = useState([]);
    const [json, setJson] = useState(false);
    const [divSelected, setDivSelected] = useState(1);
    const [divSelectedTipo, setDivSelectedTipo] = useState("mix");

    const [icon, setIcon] = useState('chart');

    useEffect(() => {
        //listaData()
        frequenciaPoliticaPorTipo();
    }, []);

    useEffect(() => {
        if(json){
            //politicasPorAno();
            console.log[lista];
        }
    }, [lista])

    /*const listaData = async () => {
        try {
            const result = await axios.get('json/analise.json');
            setJson(true);
            setLista(result.data);
            politicasPorAno()
        } catch (error) {
            console.log(error);
        }
    }*/

    const frequenciaPoliticaPorTipo = async () => {
        //console.log('frequenciaPoliticaPorTipo');
        setJson(false);
        try {
            const result = await axios.get('api/metricas/frequencia_politica_por_tipo');
            let newLista = lista;
            newLista[0] = result.data;
            //console.log('frequencia_politica_por_tipo', result.data);
            setJson(true);
            setListaAtualizado(newLista);
            politicasPorAno();
        } catch (error) {
            console.log(error);
        }
    }

    const politicasPorAno = async () => {
        //console.log('politicasPorAno');

        setJson(false);
        try {
            const result = await axios.get('api/metricas/politicas_por_ano');
            let newLista = lista;
            newLista[1] = result.data;
            setJson(true);
            setListaAtualizado(newLista);
            frequenciaPoliticaPorInstrumento();
        } catch (error) {
            console.log(error);
        }
    }

    const frequenciaPoliticaPorInstrumento = async () => {
        //console.log('frequenciaPoliticaPorInstrumento');

        setJson(false);
        try {
            const result = await axios.get('api/metricas/frequencia_politica_por_instrumento');
            let newLista = lista;
            newLista[2] = result.data;
            setJson(true);
            setListaAtualizado(newLista);
            frequenciaPoliticaPorPublicoAlvo();
        } catch (error) {
            console.log(error);
        }
    }



    const frequenciaPoliticaPorPublicoAlvo = async () => {
        //console.log('frequenciaPoliticaPorPublicoAlvo');

        setJson(false);
        try {
            const result = await axios.get('api/metricas/frequencia_politica_por_publico_alvo');
            let newLista = lista;
            newLista[3] = result.data;
            setJson(true);
            setListaAtualizado(newLista);
            frequenciaPoliticaPorGrandeArea();
        } catch (error) {
            console.log(error);
        }
    }

    const frequenciaPoliticaPorGrandeArea = async () => {
        //console.log('frequenciaPoliticaPorGrandeArea');

        setJson(false);
        try {
            const result = await axios.get('api/metricas/frequencia_politica_por_grande_area');
            let newLista = lista;
            newLista[4] = result.data;
            setJson(true);
            setListaAtualizado(newLista);
            frequenciaPoliticaPorCategoria();
        } catch (error) {
            console.log(error);
        }
    }

    const frequenciaPoliticaPorCategoria = async () => {
        //console.log('frequenciaPoliticaPorCategoria');

        setJson(false);
        try {
            const result = await axios.get('api/metricas/frequencia_politica_por_area');
            let newLista = lista;
            newLista[5] = result.data;
            setJson(true);
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
