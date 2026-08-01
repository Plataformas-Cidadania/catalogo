'use strict';

var _this = this;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Home = function Home() {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState([]);

    var _useState2 = _slicedToArray(_useState, 2);

    var lista = _useState2[0];
    var setLista = _useState2[1];

    var _useState3 = useState([]);

    var _useState32 = _slicedToArray(_useState3, 2);

    var listaAtualizado = _useState32[0];
    var setListaAtualizado = _useState32[1];

    var _useState4 = useState(false);

    var _useState42 = _slicedToArray(_useState4, 2);

    var json = _useState42[0];
    var setJson = _useState42[1];

    var _useState5 = useState(1);

    var _useState52 = _slicedToArray(_useState5, 2);

    var divSelected = _useState52[0];
    var setDivSelected = _useState52[1];

    var _useState6 = useState("mix");

    var _useState62 = _slicedToArray(_useState6, 2);

    var divSelectedTipo = _useState62[0];
    var setDivSelectedTipo = _useState62[1];

    var _useState7 = useState('chart');

    var _useState72 = _slicedToArray(_useState7, 2);

    var icon = _useState72[0];
    var setIcon = _useState72[1];

    useEffect(function () {
        //listaData()
        frequenciaPoliticaPorTipo();
    }, []);

    useEffect(function () {
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

    var frequenciaPoliticaPorTipo = function frequenciaPoliticaPorTipo() {
        var result, newLista;
        return regeneratorRuntime.async(function frequenciaPoliticaPorTipo$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('frequenciaPoliticaPorTipo');
                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/frequencia_politica_por_tipo'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[0] = result.data;
                    //console.log('frequencia_politica_por_tipo', result.data);
                    setJson(true);
                    setListaAtualizado(newLista);
                    politicasPorAno();
                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 12]]);
    };

    var politicasPorAno = function politicasPorAno() {
        var result, newLista;
        return regeneratorRuntime.async(function politicasPorAno$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('politicasPorAno');

                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/politicas_por_ano'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[1] = result.data;
                    setJson(true);
                    setListaAtualizado(newLista);
                    frequenciaPoliticaPorInstrumento();
                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 12]]);
    };

    var frequenciaPoliticaPorInstrumento = function frequenciaPoliticaPorInstrumento() {
        var result, newLista;
        return regeneratorRuntime.async(function frequenciaPoliticaPorInstrumento$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('frequenciaPoliticaPorInstrumento');

                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/frequencia_politica_por_instrumento'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[2] = result.data;
                    setJson(true);
                    setListaAtualizado(newLista);
                    frequenciaPoliticaPorPublicoAlvo();
                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 12]]);
    };

    var frequenciaPoliticaPorPublicoAlvo = function frequenciaPoliticaPorPublicoAlvo() {
        var result, newLista;
        return regeneratorRuntime.async(function frequenciaPoliticaPorPublicoAlvo$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('frequenciaPoliticaPorPublicoAlvo');

                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/frequencia_politica_por_publico_alvo'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[3] = result.data;
                    setJson(true);
                    setListaAtualizado(newLista);
                    frequenciaPoliticaPorGrandeArea();
                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 12]]);
    };

    var frequenciaPoliticaPorGrandeArea = function frequenciaPoliticaPorGrandeArea() {
        var result, newLista;
        return regeneratorRuntime.async(function frequenciaPoliticaPorGrandeArea$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('frequenciaPoliticaPorGrandeArea');

                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/frequencia_politica_por_grande_area'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[4] = result.data;
                    setJson(true);
                    setListaAtualizado(newLista);
                    frequenciaPoliticaPorCategoria();
                    context$2$0.next = 15;
                    break;

                case 12:
                    context$2$0.prev = 12;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 12]]);
    };

    var frequenciaPoliticaPorCategoria = function frequenciaPoliticaPorCategoria() {
        var result, newLista;
        return regeneratorRuntime.async(function frequenciaPoliticaPorCategoria$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    //console.log('frequenciaPoliticaPorCategoria');

                    setJson(false);
                    context$2$0.prev = 1;
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.get('api/metricas/frequencia_politica_por_area'));

                case 4:
                    result = context$2$0.sent;
                    newLista = lista;

                    newLista[5] = result.data;
                    setJson(true);
                    setListaAtualizado(newLista);

                    context$2$0.next = 14;
                    break;

                case 11:
                    context$2$0.prev = 11;
                    context$2$0.t0 = context$2$0['catch'](1);

                    console.log(context$2$0.t0);

                case 14:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this, [[1, 11]]);
    };

    //console.log('------', lista)

    var clickChart = function clickChart(id, tipo) {
        setDivSelected(id);
        setDivSelectedTipo(tipo);
    };

    var clickIcon = function clickIcon(id, tipo) {
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
                        listaAtualizado ? listaAtualizado.map(function (item, key) {
                            return React.createElement(
                                'li',
                                { className: "list-group-item-theme  cursor " + (divSelected === item.id ? 'menu-left-active' : ''), onClick: function () {
                                        return clickChart(item.id, item.tipo);
                                    }, key: 'menu' + item.id },
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
                        listaAtualizado ? listaAtualizado.map(function (item, index) {
                            var selectedChart = "";
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
                                    { onClick: function () {
                                            return clickIcon(item.id, 'table');
                                        }, style: { display: icon === 'chart' ? '' : 'none' }, className: 'cursor' },
                                    React.createElement('i', { className: 'fas fa-table fa-2x' })
                                ),
                                React.createElement(
                                    'div',
                                    { onClick: function () {
                                            return clickIcon(item.id, 'chart');
                                        }, style: { display: icon === 'table' ? '' : 'none' }, className: 'cursor' },
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