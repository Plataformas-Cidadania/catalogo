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

    useEffect(() => {
        if(tipoConsulta === 1){
            setAppliedFilters(filters);
            list(filters);
        }
    }, [filters]);

    const addFilter = (item) => {
        let newFilters = {...filters};

        setFilters(newFilters);
    }

    const list = async (filters) => {
        console.log('list');
        console.log(filters);
        let json = {};
        Object.entries(appliedFilters).map((item) => {
            if(item[0] === 'politica'){
                json[item[0]] = item[1];
            }
            json[item[0]] = item[1].map((value => item.id))
        });
        console.log(json);
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
                    <GrandeArea close={closeSearch} addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Area addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Orgao addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Tipo addFilter={addFilter} removeFilter={removeFilter} />
                </div>
                <div className="col-md-4 col-xs-12">
                    <Publico addFilter={addFilter} removeFilter={removeFilter} />
                </div>
            </div>

            <div className="row">
                <div className="col">
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
