const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true);
    const [filters, setFilters] = useState({});
    const [filtersJson, setFiltersJson] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [backupFilters, setBackupFilters] = useState({});
    const [tipoConsulta, setTipoConsulta] = useState(1); // 1 - Básica | 2 - Avançada
    //Para informar ao usuário que deve clicar em pesquisar filtros no caso de consulta avançada
    const [textoPoliticaAlterado, setTextPoliticaAlterado] = useState(false);
    const [politicas, setPoliticas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingExportar, setLoadingExportar] = useState(false);
    const [disabledAplicarFiltros, setDisabledAplicarFiltros] = useState(true);
    const [showMessageFiltroPolitica, setShowMessageFiltroPolitica] = useState(false);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [perPage, setPerpage] = useState(30);

    const labelsFilters = {
        politica: 'Política',
        ano: 'Período',
        grande_area: 'Grande Área',
        area: 'Área',
        categoria: 'Categoria',
        orgao: 'Órgão',
        publico_alvo: 'Público Alvo',
        tipo_politica: 'Tipo de Política'
    };

    const options = [{ value: 'chocolate', label: 'Chocolate' }, { value: 'strawberry', label: 'Strawberry' }, { value: 'vanilla', label: 'Vanilla' }];

    useEffect(() => {
        //Quando troca para consulta básica
        if (tipoConsulta === 1) {
            let newFilters = filters;
            delete newFilters.ano;
            delete newFilters.grande_area;
            delete newFilters.area;
            delete newFilters.categoria;
            delete newFilters.orgao;
            delete newFilters.publico_alvo;
            delete newFilters.tipo_politica;
            setFilters(newFilters);
            //Remove política do backup para não trocar o que for digitado na básica ao voltar pra consulta avançada
            let newBackupFilters = backupFilters;
            delete newBackupFilters.politica;
            setBackupFilters(newBackupFilters);
            return;
        }
        //Quando o usuário volta pra consulta avançada então pega os filtros do backup com exceção de política
        if (tipoConsulta === 2) {
            let newFilters = backupFilters;
            if (filters.politica) {
                newFilters.politica = filters.politica;
            }
            //setBackupFilters(newBackupFilters);
            setFilters(newFilters);
        }
    }, [tipoConsulta]);

    useEffect(() => {
        if (tipoConsulta === 1) {
            setAppliedFilters(filters);
            return;
        }
        setDisabledAplicarFiltros(false);

        //Faz um backup dos filtros anteriores (exceto política) para retornar caso o usuário volte pra consulta avançada
        let newBackupFilters = filters;
        setBackupFilters(newBackupFilters);

        //verifica se existe backupFilters para mostrar a mensagem de que precisa aplicar os filtros para os filtros serem aplicados
        if (Object.keys(backupFilters).length > 0) {
            setShowMessageFiltroPolitica(true);
        }
    }, [filters]);

    useEffect(() => {
        setTextPoliticaAlterado(false);
        setPage(0);
        list();
    }, [appliedFilters]);

    useEffect(() => {
        list();
    }, [page]);

    const addFilter = item => {
        let newFilters = filters;
        newFilters[item.filter] = item.value;
        setFilters(newFilters);
        console.log(newFilters);
    };

    const removeFilter = filter => {
        let newFilters = filters;
        //console.log(filter);
        delete newFilters[filter];
        //console.log('removeFilter', newFilters);
        setFilters(newFilters);
    };

    const prepareFilters = () => {
        let politica = appliedFilters.politica ? appliedFilters.politica : "";
        let ano = appliedFilters.ano ? { "inicio": appliedFilters.ano.inicio, "fim": appliedFilters.ano.fim } : null;
        let grande_area = [];
        if (appliedFilters.grande_area) {
            grande_area = appliedFilters.grande_area.map(item => item.id);
        }
        let area = [];
        if (appliedFilters.area) {
            area = appliedFilters.area.map(item => item.id);
        }
        let categoria = [];
        if (appliedFilters.categoria) {
            categoria = appliedFilters.categoria.map(item => item.id);
        }
        let orgao = [];
        if (appliedFilters.orgao) {
            orgao = appliedFilters.orgao.map(item => item.id);
        }
        let tipo_politica = [];
        if (appliedFilters.tipo_politica) {
            tipo_politica = appliedFilters.tipo_politica.map(item => item.id);
        }
        let publico_alvo = [];
        if (appliedFilters.publico_alvo) {
            publico_alvo = appliedFilters.publico_alvo.map(item => item.id);
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

    const list = async () => {
        setLoading(true);
        setShowMessageFiltroPolitica(false);
        setDisabledAplicarFiltros(true);

        //console.log(appliedFilters);

        let filtros = prepareFilters();

        const result = await axios.post('api/politica/buscaAvancada', filtros);

        let newPoliticas = result.data.data;
        newPoliticas = newPoliticas.splice(0, 30);
        setPoliticas(newPoliticas);

        setTotal(result.data.total);

        setLoading(false);
    };

    const exportar = async () => {
        setLoadingExportar(true);

        let filtros = prepareFilters();

        const result = await axios.post('api/politica/exportarBuscaAvancada', filtros);

        /* Make CSV downloadable */
        let downloadLink = document.createElement("a");
        let fileData = ['\ufeff' + result.data];

        let blobObject = new Blob(fileData, {
            type: "text/csv;charset=utf-8;"
        });

        let url = URL.createObjectURL(blobObject);
        downloadLink.href = url;
        downloadLink.download = "politicas.csv";

        /* Actually download CSV */
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        setLoadingExportar(false);
    };

    return React.createElement(
        'div',
        { onClick: () => setCloseSearch(true) },
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
                        onClick: () => setTipoConsulta(2)
                    },
                    'Consulta Avan\xE7ada'
                ),
                React.createElement(
                    'button',
                    {
                        className: 'btn btn-sm btn-primary',
                        style: { display: tipoConsulta === 2 ? '' : 'none', marginTop: '5px' },
                        onClick: () => setTipoConsulta(1)
                    },
                    'Consulta B\xE1sica'
                ),
                React.createElement(
                    'div',
                    { className: 'text-center text-info' },
                    React.createElement(
                        'span',
                        { style: { display: showMessageFiltroPolitica ? '' : 'none' } },
                        '\xA0\xA0Clique em ',
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
                        onClick: () => setAppliedFilters(filters),
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
                        Object.entries(appliedFilters).map((item, key) => {
                            return React.createElement(
                                'div',
                                { key: 'filter' + key, className: 'col-md-4 col-sm-6 col-xs-12' },
                                React.createElement(
                                    'strong',
                                    null,
                                    labelsFilters[item[0]],
                                    ': '
                                ),
                                '\xA0',
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
                                ) : item[1].map((value, index) => {
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
                        { className: 'btn btn-primary', onClick: () => exportar() },
                        React.createElement('i', { className: 'fa fa-file-csv' }),
                        ' Exportar pesquisa'
                    ) : React.createElement(
                        'button',
                        { className: 'btn btn-primary', disabled: true },
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