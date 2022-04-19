const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true)
    const [filters, setFilters] = useState({});
    const [filtersJson, setFiltersJson] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});
    const [tipoConsulta, setTipoConsulta] = useState(1);// 1 - Básica | 2 - Avançada

    const labelsFilters = {
        politica: 'Política',
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

    /*useEffect(() => {
        if(tipoConsulta === 1){
            setFilters({});
            setAppliedFilters({});
        }
    }, [tipoConsulta]);*/

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
                                                    item[1].map((value, index) => {
                                                        return (
                                                            <span key={'value' + index}>{value.nome}{ index < item[1].length - 1 ? ',' : ''} </span>
                                                        )
                                                    })
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
