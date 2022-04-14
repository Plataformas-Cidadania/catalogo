const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true)
    const [filters, setFilters] = useState({});

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const addFilter = (filter) => {
        let newFilters = {...filters};

        setFilters(newFilters);
    }

    const removeFilter = (filter) => {

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
                            <div className="col">
                                <strong>Área: </strong> Infraestrutura
                            </div>
                            <div className="col">
                                <strong>Ano: </strong> 2020
                            </div>
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
