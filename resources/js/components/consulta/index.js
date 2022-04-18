const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true)
    const [filters, setFilters] = useState({});
    const [filtersJson, setFiltersJson] = useState({});
    const [appliedFilters, setAppliedFilters] = useState({});

    const labelsFilters = {
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

    return (
        <div onClick={() => setCloseSearch(true)}>
            <div className="row">
                <div className="col-md-12 col-xs-12">
                    <Politica addFilter={addFilter} removeFilter={removeFilter} />
                    <br/>
                </div>

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

            <div className="row">
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
                                                item[1].map((value, index) => {
                                                    return (
                                                        <span key={'value' + index}>{value.nome}{ index < item[1].length ? ',' : ''} </span>
                                                    )
                                                })
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
