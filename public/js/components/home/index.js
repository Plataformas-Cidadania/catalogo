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
        if (json) {
            //politicasPorAno();
            console.log[lista];
        }
    }, [lista]);

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
    };

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
    };

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
    };

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
    };

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
    };

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
    };

    //console.log('------', lista)

    const clickChart = (id, tipo) => {
        setDivSelected(id);
        setDivSelectedTipo(tipo);
    };

    const clickIcon = (id, tipo) => {
        setIcon(tipo);
    };

    return React.createElement(
        'div',
        { className: 'bg-lgt mt-5 mb-5' },
        React.createElement(
            'div',
            { className: 'container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-3 mt-5 mb-5' },
                    React.createElement(
                        'ul',
                        { className: 'menu-left' },
                        listaAtualizado ? listaAtualizado.map((item, key) => {
                            return React.createElement(
                                'li',
                                { className: "list-group-item-theme  cursor " + (divSelected === item.id ? 'menu-left-active' : ''), onClick: () => clickChart(item.id, item.tipo), key: 'menu' + item.id },
                                React.createElement(
                                    'a',
                                    { href: true },
                                    item.id,
                                    ' - ',
                                    item.titulo
                                )
                            );
                        }) : null
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-md-9 mt-5 mb-5' },
                    React.createElement(
                        'div',
                        { className: 'table-responsive mb-3' },
                        listaAtualizado ? listaAtualizado.map((item, index) => {
                            let selectedChart = "";
                            if (divSelectedTipo === "mix") {
                                selectedChart = React.createElement(MixedChart, { id: 'mix-chart' + item.id, series: item.series, labels: item.labels });
                            }
                            if (divSelectedTipo === "stacked") {
                                selectedChart = React.createElement(StackedChart, { id: 'stackedChart', series: item.series, labels: item.labels });
                            }
                            if (divSelectedTipo === "pie") {
                                selectedChart = React.createElement(PieChart, { id: 'stackedChart', series: item.series, labels: item.labels, width: 1000 });
                            }
                            return React.createElement(
                                'div',
                                { style: { display: divSelected === item.id ? '' : 'none' }, key: 'abas' + item.id },
                                React.createElement(
                                    'div',
                                    { style: { display: icon === 'chart' ? '' : 'none' } },
                                    selectedChart
                                ),
                                React.createElement(
                                    'div',
                                    { style: { display: icon === 'table' ? '' : 'none', overflow: 'auto' } },
                                    React.createElement(Tables, {
                                        series: item.series,
                                        labels: item.labels,
                                        index: index,
                                        tipo: item.tipo
                                    })
                                ),
                                React.createElement('br', null),
                                React.createElement('br', null),
                                React.createElement(
                                    'div',
                                    { onClick: () => clickIcon(item.id, 'table'), style: { display: icon === 'chart' ? '' : 'none' }, className: 'cursor' },
                                    React.createElement('i', { className: 'fas fa-table fa-2x' })
                                ),
                                React.createElement(
                                    'div',
                                    { onClick: () => clickIcon(item.id, 'chart'), style: { display: icon === 'table' ? '' : 'none' }, className: 'cursor' },
                                    React.createElement('i', { className: 'fas fa-chart-area fa-2x' })
                                ),
                                React.createElement(
                                    'div',
                                    { style: { textAlign: 'right' } },
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Fonte: '
                                    ),
                                    item.fonte
                                )
                            );
                        }) : null
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(Home, null), document.getElementById('home'));