
const AreaTematica = () => {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Timeline id={'timeline'} item={"Teste"} area={[{
                        "area": "Agropecuária e Agrária",
                        "ano": "2020",
                        "nome_politica": "Programa de Residência Profissional Agrícola (AgroResidência)"
                    },
                        {
                            "area": "Assistência Social",
                            "ano": "2019",
                            "nome_politica": "Auxílio Brumadinho"
                        },
                        {
                            "area": "Assistência Social",
                            "ano": "2020",
                            "nome_politica": "Auxílio Emergencial de abril a junho de 2020"
                        },
                        {
                            "area": "Assistência Social",
                            "ano": "2019",
                            "nome_politica": "Auxílio pescadores"
                        },]}/>
                </div>
            </div>
        </div>

    );
};

ReactDOM.render(
    <AreaTematica />,
    document.getElementById('areaTematica')
);
