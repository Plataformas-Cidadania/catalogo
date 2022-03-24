const Consulta = () => {

    const { useEffect, useState } = React;

    return (
        <div className="container">

            <div className="row">
                <div className="col">

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
