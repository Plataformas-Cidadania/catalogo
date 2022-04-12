const Timeline = (props) => {

    const { useEffect, useState } = React;

    const [anoModal, setAnoModal] = useState(null);
    const [politicasModal, setPoliticasModal] = useState([]);
    const [stack, setStack] = useState(null);

    const style = {
        politica: {
            maxWidth: "15ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
        }
    }

    useEffect(() => {
        //CARD
        if(props.item){
            console.log('PROPS TIMELINE CARD', props);
            Object.entries(props.item.anos).forEach((item, key) => {
                let stack = document.getElementById(props.item.area+"_ano_"+key);
                [...stack.children].reverse().forEach(i => stack.append(i));
            });

            //CARD DE TESTE////////////////////
            /*let stack1 = document.getElementById('stack1');
            [...stack1.children].reverse().forEach(i => stack1.append(i));
            stack1.addEventListener("click", swap);

            function swap(e){
                console.log('card');
                console.log(e.target.parentNode.id);
                let card = e.target.parentNode.querySelector(".card:last-child");
                if (e.target !== card) return;
                card.style.animation = "swap 700ms forwards";

                setTimeout(() => {
                    card.style.animation = "";
                    e.target.parentNode.prepend(card);
                }, 700);
            }*/
            ////////////////////////////////////

        }

    }, [props.item]);

    function swap2(e){

        e.persist();

        let card = e.target.parentNode.querySelector(".card-tl:last-child");
        if (e.target !== card) return;
        card.style.animation = "swap 700ms forwards";

        setTimeout(() => {
            card.style.animation = "";
            e.target.parentNode.prepend(card);
            //stack1.prepend(card);
        }, 700);
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
                {/*<div id="stack1" className="stack">
                    <div className="card">1
                    </div>
                    <div className="card">2
                    </div>
                    <div className="card">3
                    </div>
                    <div className="card">4
                    </div>
                    <div className="card">5
                    </div>
                </div>*/}
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
                                props.item.anos ? (
                                    Object.entries(props.item.anos).map((subitem, key) => {
                                        const ano = subitem[0];
                                        let politicas = subitem[1];
                                        politicas = politicas.sort((a, b) => (a.nome_politica > b.nome_politica) ? 1 : -1);
                                        return (
                                            <div key={props.item.area+"_ano_"+key} className="timeline__item">
                                                <div className="timeline__content">
                                                    <h3 className={key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'}>{ano}</h3>
                                                    <div id={props.item.area+"_ano_"+key} className="stack">
                                                        {
                                                            politicas.map((politica, index) => {
                                                                let id = 1;
                                                                return (
                                                                    <div key={props.item.area+"_politica_"+key.toString()+index}
                                                                        /*className="card"*/
                                                                         className={"card-tl cor"+(Math.floor(Math.random() * 4))}
                                                                         onClick={swap2}
                                                                    >
                                                                        {politica.nome_politica}
                                                                    </div>

                                                                );
                                                            })
                                                        }
                                                    </div>
                                                    {/*<div>
                                                    <span
                                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri"
                                                        style={{marginTop: '9px'}}>
                                                        {politicas.length}
                                                    </span>
                                                    {
                                                        politicas.map((politica, index) => {
                                                            let id = 1;
                                                            let partePolitica = politica.nome_politica.substr(0, 50);
                                                            partePolitica += politica.nome_politica.length > 30 ? ' ...' : ''
                                                            return (
                                                                <p
                                                                    key={props.item.area+"_politica_"+key.toString()+index}
                                                                    title={politica.nome_politica.length > 30 ? politica.nome_politica : null}
                                                                >
                                                                    {partePolitica}


                                                                </p>
                                                            );
                                                        })
                                                    }
                                                </div>*/}
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : null

                            }
                        </div>
                    </div>
                </div>
            </div>
        ) : <div>&nbsp;</div>
    );
};
