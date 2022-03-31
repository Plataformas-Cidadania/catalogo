const Timeline = (props) => {

    const { useEffect, useState } = React;

    useEffect(() => {
        if(props.item){
            timeline(document.querySelectorAll('#'+props.id), {
                mode: 'horizontal',
                visibleItems: 4
            });
        }
    }, [props]);

    return (
        props.item ? (
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
                                            <h4 className={key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'}>{ano}</h4>
                                            <div style={{maxHeight: '100px', overflowY:'auto'}}>
                                                <ul className="timeline-ul">
                                                <span
                                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri"
                                                    style={{marginTop: '9px'}}>
                                                    {politicas.length}
                                                </span>
                                                    {
                                                        politicas.map((politica, key) => {
                                                            return (
                                                                <li key={props.item.area+"_politica_"+key}>
                                                                    {politica.nome_politica}
                                                                    {/*<hr style={{display: politicas.length-1 === key ? 'none' : ''}}/>*/}
                                                                </li>
                                                            );
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        ) : <div>&nbsp;</div>
    );
};
