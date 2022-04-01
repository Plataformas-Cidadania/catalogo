const Timeline = (props) => {

    const { useEffect, useState } = React;

    const [anoModal, setAnoModal] = useState(null);
    const [politicasModal, setPoliticasModal] = useState([]);

    const style = {
        politica: {
            maxWidth: "15ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        }
    }

    useEffect(() => {
        if(props.item){
            timeline(document.querySelectorAll('#'+props.id), {
                mode: 'horizontal',
                visibleItems: 4
            });
        }
    }, [props]);

    const modalPoliticas = (ano, politicas) => {
        setAnoModal(ano);
        setPoliticasModal(politicas);
        $("#modal"+props.id).modal('show');
    }

    return (
        props.item ? (
            <div>
                <div className="modal fade" id={"modal"+props.id} tabIndex="-1" aria-labelledby={"modal"+props.id+"Label"} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"modal"+props.id+"Label"}>{props.area} - {anoModal}</h5>
                                {/*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/}
                            </div>
                            <div className="modal-body">
                                {
                                    politicasModal.map((politica, key) => {
                                        return (
                                            <p key={props.item.area+"_modal_politica_"+key}>
                                                <a href="politica/1/titulo">{politica.nome_politica}</a>
                                            </p>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="timeline" id={props.id}>
                    <div className="timeline__wrap" style={{minHeight: '300px'}}>
                        <div className="timeline__items">
                            {
                                Object.entries(props.item.anos).map((subitem, key) => {
                                    const ano = subitem[0];
                                    const politicas = subitem[1];
                                    return (
                                        <div key={props.item.area+"_ano_"+key} className="timeline__item">
                                            <div className="timeline__content">
                                                <h3 className={key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'}>{ano}</h3>
                                                <div onClick={() => modalPoliticas(ano, politicas)} style={{cursor: 'pointer'}}>
                                                    <span
                                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri"
                                                        style={{marginTop: '9px'}}>
                                                        {politicas.length}
                                                    </span>
                                                    {
                                                        politicas.map((politica, key) => {
                                                            let id = 1;
                                                            let partePolitica = politica.nome_politica.substr(0, 50);
                                                            partePolitica += politica.nome_politica.length > 30 ? ' ...' : ''
                                                            return (
                                                                <p
                                                                    key={props.item.area+"_politica_"+key}
                                                                    title={politica.nome_politica.length > 30 ? politica.nome_politica : null}
                                                                >
                                                                    {partePolitica}
                                                                </p>
                                                            );
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        ) : <div>&nbsp;</div>
    );
};
