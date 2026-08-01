'use strict';

var _this = this;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Consulta = function Consulta() {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState(true);

    var _useState2 = _slicedToArray(_useState, 2);

    var closeSearch = _useState2[0];
    var setCloseSearch = _useState2[1];

    var _useState3 = useState({});

    var _useState32 = _slicedToArray(_useState3, 2);

    var filters = _useState32[0];
    var setFilters = _useState32[1];

    var _useState4 = useState({});

    var _useState42 = _slicedToArray(_useState4, 2);

    var filtersJson = _useState42[0];
    var setFiltersJson = _useState42[1];

    var _useState5 = useState({});

    var _useState52 = _slicedToArray(_useState5, 2);

    var appliedFilters = _useState52[0];
    var setAppliedFilters = _useState52[1];

    var _useState6 = useState({});

    var _useState62 = _slicedToArray(_useState6, 2);

    var backupFilters = _useState62[0];
    var setBackupFilters = _useState62[1];

    var _useState7 = useState(1);

    var _useState72 = _slicedToArray(_useState7, 2);

    var tipoConsulta = _useState72[0];
    var setTipoConsulta = _useState72[1];
    // 1 - Básica | 2 - Avançada
    //Para informar ao usuário que deve clicar em pesquisar filtros no caso de consulta avançada

    var _useState8 = useState(false);

    var _useState82 = _slicedToArray(_useState8, 2);

    var textoPoliticaAlterado = _useState82[0];
    var setTextPoliticaAlterado = _useState82[1];

    var _useState9 = useState([]);

    var _useState92 = _slicedToArray(_useState9, 2);

    var politicas = _useState92[0];
    var setPoliticas = _useState92[1];

    var _useState10 = useState(false);

    var _useState102 = _slicedToArray(_useState10, 2);

    var loading = _useState102[0];
    var setLoading = _useState102[1];

    var _useState11 = useState(false);

    var _useState112 = _slicedToArray(_useState11, 2);

    var loadingExportar = _useState112[0];
    var setLoadingExportar = _useState112[1];

    var _useState12 = useState(false);

    var _useState122 = _slicedToArray(_useState12, 2);

    var loadingExportar2 = _useState122[0];
    var setLoadingExportar2 = _useState122[1];

    var _useState13 = useState(true);

    var _useState132 = _slicedToArray(_useState13, 2);

    var disabledAplicarFiltros = _useState132[0];
    var setDisabledAplicarFiltros = _useState132[1];

    var _useState14 = useState(false);

    var _useState142 = _slicedToArray(_useState14, 2);

    var showMessageFiltroPolitica = _useState142[0];
    var setShowMessageFiltroPolitica = _useState142[1];

    var _useState15 = useState(0);

    var _useState152 = _slicedToArray(_useState15, 2);

    var total = _useState152[0];
    var setTotal = _useState152[1];

    var _useState16 = useState(0);

    var _useState162 = _slicedToArray(_useState16, 2);

    var page = _useState162[0];
    var setPage = _useState162[1];

    var _useState17 = useState(30);

    var _useState172 = _slicedToArray(_useState17, 2);

    var perPage = _useState172[0];
    var setPerpage = _useState172[1];

    var labelsFilters = {
        politica: 'Política',
        ano: 'Período',
        grande_area: 'Grande Área',
        area: 'Área',
        categoria: 'Categoria',
        orgao: 'Órgão',
        publico_alvo: 'Público Alvo',
        tipo_politica: 'Tipo de Política'
    };

    var options = [{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' }, { value: 'vanilla', label: 'Vanilla' }];

    useEffect(function () {
        //Quando troca para consulta básica
        if (tipoConsulta === 1) {
            var newFilters = _extends({}, filters);
            delete newFilters.ano;
            delete newFilters.grande_area;
            delete newFilters.area;
            delete newFilters.categoria;
            delete newFilters.orgao;
            delete newFilters.publico_alvo;
            delete newFilters.tipo_politica;
            setFilters(newFilters);
            //Remove política do backup para não trocar o que for digitado na básica ao voltar pra consulta avançada
            var newBackupFilters = _extends({}, backupFilters);
            delete newBackupFilters.politica;
            setBackupFilters(newBackupFilters);
            return;
        }
        //Quando o usuário volta pra consulta avançada então pega os filtros do backup com exceção de política
        if (tipoConsulta === 2) {
            var newFilters = _extends({}, backupFilters);
            if (filters.politica) {
                newFilters.politica = filters.politica;
            }
            //setBackupFilters(newBackupFilters);
            setFilters(newFilters);
        }
    }, [tipoConsulta]);

    useEffect(function () {
        if (tipoConsulta === 1) {
            setAppliedFilters(filters);
            return;
        }
        setDisabledAplicarFiltros(false);

        //Faz um backup dos filtros anteriores (exceto política) para retornar caso o usuário volte pra consulta avançada
        var newBackupFilters = _extends({}, filters);
        setBackupFilters(newBackupFilters);

        //verifica se existe backupFilters para mostrar a mensagem de que precisa aplicar os filtros para os filtros serem aplicados
        if (Object.keys(backupFilters).length > 0) {
            setShowMessageFiltroPolitica(true);
        }
    }, [filters]);

    useEffect(function () {
        setTextPoliticaAlterado(false);
        setPage(0);
        list();
    }, [appliedFilters]);

    useEffect(function () {
        list();
    }, [page]);

    var addFilter = function addFilter(item) {
        var newFilters = _extends({}, filters);
        newFilters[item.filter] = item.value;
        setFilters(newFilters);
        console.log('newFilters', newFilters);
    };

    var removeFilter = function removeFilter(filter) {
        var newFilters = _extends({}, filters);
        //console.log(filter);
        delete newFilters[filter];
        //console.log('removeFilter', newFilters);
        setFilters(newFilters);
    };

    var prepareFilters = function prepareFilters() {
        var politica = appliedFilters.politica ? appliedFilters.politica : "";
        var ano = appliedFilters.ano ? { "inicio": appliedFilters.ano.inicio, "fim": appliedFilters.ano.fim } : null;
        var grande_area = [];
        if (appliedFilters.grande_area) {
            grande_area = appliedFilters.grande_area.map(function (item) {
                return item.id;
            });
        }
        var area = [];
        if (appliedFilters.area) {
            area = appliedFilters.area.map(function (item) {
                return item.id;
            });
        }
        var categoria = [];
        if (appliedFilters.categoria) {
            categoria = appliedFilters.categoria.map(function (item) {
                return item.id;
            });
        }
        var orgao = [];
        if (appliedFilters.orgao) {
            orgao = appliedFilters.orgao.map(function (item) {
                return item.id;
            });
        }
        var tipo_politica = [];
        if (appliedFilters.tipo_politica) {
            tipo_politica = appliedFilters.tipo_politica.map(function (item) {
                return item.id;
            });
        }
        var publico_alvo = [];
        if (appliedFilters.publico_alvo) {
            publico_alvo = appliedFilters.publico_alvo.map(function (item) {
                return item.id;
            });
        }

        return {
            "politica": politica,
            "ano": ano,
            "grande_area": grande_area,
            "area": area,
            "categoria": categoria,
            "orgao": orgao,
            "tipo_politica": tipo_politica,
            "publico_alvo": publico_alvo,
            "page": page + 1
        };
    };

    var list = function list() {
        var filtros, result, newPoliticas;
        return regeneratorRuntime.async(function list$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    setLoading(true);
                    setShowMessageFiltroPolitica(false);
                    setDisabledAplicarFiltros(true);

                    //console.log(appliedFilters);

                    filtros = prepareFilters();
                    context$2$0.next = 6;
                    return regeneratorRuntime.awrap(axios.post('api/politica/buscaAvancada', filtros));

                case 6:
                    result = context$2$0.sent;
                    newPoliticas = result.data.data;

                    newPoliticas = newPoliticas.splice(0, 30);
                    setPoliticas(newPoliticas);

                    setTotal(result.data.total);

                    setLoading(false);

                case 12:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    var exportar = function exportar() {
        var filtros, result, downloadLink, fileData, blobObject, url;
        return regeneratorRuntime.async(function exportar$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    setLoadingExportar(true);

                    filtros = prepareFilters();
                    context$2$0.next = 4;
                    return regeneratorRuntime.awrap(axios.post('api/politica/exportarBuscaAvancada', filtros));

                case 4:
                    result = context$2$0.sent;
                    downloadLink = document.createElement("a");
                    fileData = ['﻿' + result.data];
                    blobObject = new Blob(fileData, {
                        type: "text/csv;charset=utf-8;"
                    });
                    url = URL.createObjectURL(blobObject);

                    downloadLink.href = url;
                    downloadLink.download = "politicas.csv";

                    /* Actually download CSV */
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    setLoadingExportar(false);

                case 15:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    var exportarAll = function exportarAll() {
        var result, downloadLink, fileData, blobObject, url;
        return regeneratorRuntime.async(function exportarAll$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    setLoadingExportar2(true);

                    context$2$0.next = 3;
                    return regeneratorRuntime.awrap(axios.get('api/politica/export/all'));

                case 3:
                    result = context$2$0.sent;
                    downloadLink = document.createElement("a");
                    fileData = ['﻿' + result.data];
                    blobObject = new Blob(fileData, {
                        type: "text/csv;charset=utf-8;"
                    });
                    url = URL.createObjectURL(blobObject);

                    downloadLink.href = url;
                    downloadLink.download = "politicas-base.csv";

                    /* Actually download CSV */
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                    document.body.removeChild(downloadLink);

                    setLoadingExportar2(false);

                case 14:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    return React.createElement(
        'div',
        { onClick: function () {
                return setCloseSearch(true);
            } },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-12 col-xs-12' },
                React.createElement(Politica, { addFilter: addFilter, removeFilter: removeFilter }),
                React.createElement(
                    'div',
                    {
                        className: 'text-warning',
                        style: {
                            display: tipoConsulta === 2 && textoPoliticaAlterado ? '' : 'none'
                        }
                    },
                    'Clique em aplicar filtros ou pressione enter para pesquisar'
                ),
                React.createElement(
                    'button',
                    {
                        className: 'btn btn-sm btn-primary',
                        style: { display: tipoConsulta === 1 ? '' : 'none', marginTop: '5px' },
                        onClick: function () {
                            return setTipoConsulta(2);
                        }
                    },
                    'Consulta Avançada'
                ),
                React.createElement(
                    'button',
                    {
                        className: 'btn btn-sm btn-primary',
                        style: { display: tipoConsulta === 2 ? '' : 'none', marginTop: '5px' },
                        onClick: function () {
                            return setTipoConsulta(1);
                        }
                    },
                    'Consulta Básica'
                ),
                React.createElement(
                    'div',
                    { className: 'text-center text-info' },
                    React.createElement(
                        'span',
                        { style: { display: showMessageFiltroPolitica ? '' : 'none' } },
                        '  Clique em ',
                        React.createElement(
                            'strong',
                            null,
                            'Aplicar filtros'
                        ),
                        ' para pesquisar'
                    )
                ),
                React.createElement('br', null)
            )
        ),
        React.createElement(
            'div',
            { className: 'row', style: { display: tipoConsulta === 2 ? '' : 'none' } },
            React.createElement(
                'div',
                { className: 'col-md-12 col-xs-12' },
                React.createElement(Ano, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(GrandeArea, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(Area, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(Categoria, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(Orgao, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(Publico, { addFilter: addFilter, removeFilter: removeFilter })
            ),
            React.createElement(
                'div',
                { className: 'col-md-4 col-xs-12' },
                React.createElement(Tipo, { addFilter: addFilter, removeFilter: removeFilter })
            )
        ),
        React.createElement(
            'div',
            { className: 'row', style: { display: tipoConsulta === 2 ? '' : 'none' } },
            React.createElement(
                'div',
                { className: 'col-12 text-center' },
                React.createElement('br', null),
                React.createElement(
                    'button',
                    {
                        className: 'btn btn-primary btn-lg',
                        onClick: function () {
                            return setAppliedFilters(filters);
                        },
                        disabled: disabledAplicarFiltros
                    },
                    'Aplicar Filtros'
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'row', style: { display: Object.entries(appliedFilters).length > 0 ? '' : 'none' } },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { style: { padding: '10px', backgroundColor: '#f6f6f6' } },
                    React.createElement(
                        'strong',
                        null,
                        'Filtros aplicados: '
                    ),
                    React.createElement('br', null),
                    React.createElement('br', null),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        Object.entries(appliedFilters).map(function (item, key) {
                            return React.createElement(
                                'div',
                                { key: 'filter' + key, className: 'col-md-4 col-sm-6 col-xs-12' },
                                React.createElement(
                                    'strong',
                                    null,
                                    labelsFilters[item[0]],
                                    ': '
                                ),
                                ' ',
                                item[0] === 'politica' ? React.createElement(
                                    'span',
                                    null,
                                    item[1]
                                ) : item[0] === 'ano' ? React.createElement(
                                    'span',
                                    null,
                                    item[1].inicio,
                                    ' - ',
                                    item[1].fim
                                ) : item[1].map(function (value, index) {
                                    return React.createElement(
                                        'span',
                                        { key: 'value' + index },
                                        value.nome,
                                        index < item[1].length - 1 ? ',' : '',
                                        ' '
                                    );
                                })
                            );
                        })
                    )
                )
            )
        ),
        React.createElement('br', null),
        politicas.length > 0 ? React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement(
                    'div',
                    { style: { textAlign: 'right' } },
                    !loadingExportar ? React.createElement(
                        'button',
                        { className: 'btn btn-primary', onClick: function () {
                                return exportar();
                            } },
                        React.createElement('i', { className: 'fa fa-file-csv' }),
                        ' Exportar pesquisa'
                    ) : React.createElement(
                        'button',
                        { className: 'btn btn-primary', disabled: true },
                        React.createElement('i', { className: 'fa fa-spinner fa-spin' }),
                        ' Processando'
                    ),
                    !loadingExportar2 ? React.createElement(
                        'button',
                        { className: 'btn btn-success text-white', style: { marginLeft: '10px' }, onClick: function () {
                                return exportarAll();
                            } },
                        React.createElement('i', { className: 'fa fa-file-csv' }),
                        ' Exportar base'
                    ) : React.createElement(
                        'button',
                        { className: 'btn btn-success text-white', disabled: true },
                        React.createElement('i', { className: 'fa fa-spinner fa-spin' }),
                        ' Processando'
                    )
                )
            )
        ) : null,
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement(List, { items: politicas, loading: loading })
            )
        ),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement(Paginate, {
                    setPage: setPage,
                    total: total,
                    page: page,
                    perPage: perPage
                })
            )
        )
    );
};

ReactDOM.render(React.createElement(Consulta, null), document.getElementById('consulta'));

/* Make CSV downloadable */