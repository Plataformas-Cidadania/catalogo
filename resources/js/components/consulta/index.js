const Consulta = () => {

    const { useEffect, useState } = React;

    const [closeSearch, setCloseSearch] = useState(true)

    return (
        <div onClick={() => setCloseSearch(true)}>
            <div className="row">
                <div className="col-md-6 col-xs-12">
                    <Politica />
                </div>
                <div className="col-md-6 col-xs-12">
                    <Ano />
                </div>
                <div className="col-md-3 col-xs-12">
                    <GrandeArea close={closeSearch} />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Area />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Orgao />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Tipo />
                </div>
                <div className="col-md-3 col-xs-12">
                    <Publico />
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
