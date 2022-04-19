const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true)
    const [filters, setFilters] = useState({});
    const [filtersJson, setFiltersJson] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [backupFilters, setBackupFilters] = useState({});
    const [tipoConsulta, setTipoConsulta] = useState(1);// 1 - Básica | 2 - Avançada

    const labelsFilters = {
        politica: 'Política',
        ano: 'Período',
        grande_area: 'Grande Área',
        area: 'Área',
        categoria: 'Categoria',
        orgao: 'Órgão',
        publico_alvo: 'Público Alvo',
        tipo_politica: 'Tipo de Política'
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    useEffect(() => {
        //Quando troca para consulta básica
        if(tipoConsulta === 1){
            let newFilters = {...filters};
            delete newFilters.ano;
            delete newFilters.grande_area;
            delete newFilters.area;
            delete newFilters.categoria;
            delete newFilters.orgao;
            delete newFilters.publico_alvo;
            delete newFilters.tipo_politica;
            setFilters(newFilters);
            //Faz um backup dos filtros anterires para retornar caso o usuário volte pra consulta avançada
            setBackupFilters(filters);
            return;
        }
        //Quando o usuário volta pra consulta avançada então pega os filtros do backup com exceção de política
        if(tipoConsulta === 2){
            let newBackupFilters = {...backupFilters};
            if(filters.politica){
                newBackupFilters.politica = filters.politica;
            }
            setBackupFilters(newBackupFilters);
            setFilters(newBackupFilters);
        }
    }, [tipoConsulta]);

    useEffect(() => {
        if(tipoConsulta === 1){
            setAppliedFilters(filters);
        }
    }, [filters]);

    const addFilter = (item) => {
        let newFilters = {...filters};
        newFilters[item.filter] = item.value;
        setFilters(newFilters);
        console.log(newFilters);
    }

    const removeFilter = (item) => {
        let newFilters = {...filters};
        delete newFilters[item.filter];
        setFilters(newFilters);
        console.log(newFilters);
    }

    const list = async () => {
        console.log('list politicas');
    }

    return (
        <div onClick={() => setCloseSearch(true)}>
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <Politica addFilter={addFilter} removeFilter={removeFilter} />

                    <button
                        className="btn btn-sm btn-primary"
                        style={{display: tipoConsulta === 1 ? '' : 'none', marginTop: '5px'}}
                        onClick={() => setTipoConsulta(2)}
                    >
                        Consulta Avançada
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        style={{display: tipoConsulta === 2 ? '' : 'none', marginTop: '5px'}}
                        onClick={() => setTipoConsulta(1)}
                    >
                        Consulta Básica
                    </button>
                    <br/><br/>
                </div>
            </div>
            <div className="row" style={{display: tipoConsulta === 2 ? '' : 'none'}}>
                <div className="col-md-12 col-xs-12">
                    <Ano addFilter={addFilter} removeFilter={removeFilter} />
                    <br/>
                    <br/>
                </div>
                <div className="col-md-4 col-xs-12">
                    <GrandeArea addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Area addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Orgao addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Categoria addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Publico addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Tipo addFilter={addFilter} removeFilter={removeFilter} />
                </div>
            </div>

            <div className="row" style={{display: tipoConsulta === 2 ? '' : 'none'}}>
                <div className="col-12 text-center">
                    <br/>
                    <button className="btn btn-primary btn-lg" onClick={() => setAppliedFilters(filters)}>Aplicar Filtros</button>
                </div>
            </div>

            <div className="row" style={{display: Object.entries(appliedFilters).length > 0 ? '' : 'none'}}>
                <div className="col">
                    <br/>
                    <div style={{padding: '10px', backgroundColor: '#f6f6f6'}}>
                        <strong>Filtros aplicados: </strong><br/><br/>
                        <div className="row">
                            {
                                Object.entries(appliedFilters).map((item, key) => {
                                    return (
                                        <div key={'filter' + key} className="col-md-4 col-sm-6 col-xs-12">
                                            <strong>{labelsFilters[item[0]]}: </strong>&nbsp;
                                            {
                                                item[0] === 'politica' ? (
                                                    <span>{item[1]}</span>
                                                ) : (
                                                    item[0] === 'ano' ? (
                                                        <span>{item[1].inicio} - {item[1].fim}</span>
                                                    ) : (
                                                        item[1].map((value, index) => {
                                                            return (
                                                                <span key={'value' + index}>{value.nome}{ index < item[1].length - 1 ? ',' : ''} </span>
                                                            )
                                                        })
                                                    )
                                                )
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <List />
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Consulta />,
    document.getElementById('consulta')
);
