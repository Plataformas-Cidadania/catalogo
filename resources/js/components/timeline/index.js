
const Timeline = () => {

    //const HorizontalTimeline = 'react-horizontal-timeline';
    const { Timeline, TimelineEvent } = 'horizontal-timeline'
    //import HorizontalTimeline from 'react-horizontal-timeline';

    const { useEffect, useState } = React;

    const [areas, setAreas] = useState({});
    const [timelines, setTimelines] = useState([]);
    /*const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);*/


    useEffect(() => {
        getPoliticas();
    }, []);

    useEffect(() => {
        timelines.forEach((item, key) => {
            timeline(document.querySelectorAll('#timeline'+key), {
                mode: 'horizontal',
                visibleItems: 4
            });
        });
    }, [timelines]);

    const getPoliticas = async () => {
        const result = await axios.get('csv/politicas.csv');
        //console.log(result.data);
        let politicas = $.csv.toObjects(result.data, {separator: ';'});
        //ordena pelo ano
        politicas = politicas.sort((a, b) => (parseInt(a.ano) > parseInt(b.ano)) ? 1 : -1);
        const newAreas = groupByAreas(politicas);
        //console.log(newAreas);
        setAreas(newAreas);
        //console.log(Object.entries(newAreas));
    }

    const groupByAreas = (data) => {
        let newAreas = {};
        data.forEach((item) => {
            //cria a propriedade area com um objeto vazio
            if(!newAreas.hasOwnProperty(item.area)){
                newAreas[item.area] = {};
            }
            //cria a propriedade ano dentro do objeto de area com um array vazio
            if(!newAreas[item.area].hasOwnProperty(item.ano)){
                newAreas[item.area][item.ano] = [];
            }
            //adiciona um objeto de politica no array do ano
            newAreas[item.area][item.ano].push({
                nome_politica: item.nome_politica
            })
        });

        return newAreas;
    }

    const addRemoveTimeline = (area) => {
        let newTimelines = [...timelines];

        //Testa se já foi inserido a timeline da área e então remove
        if(newTimelines.find((item) => item.area === area)){
            newTimelines = newTimelines.filter((item,) => item.area !== area);
            setTimelines(newTimelines)
            return;
        }

        //adiciona a timeline da área
        newTimelines.push({
            area: area,
            anos: areas[area]
        });
        console.log(newTimelines);
        setTimelines(newTimelines);
    }

    const removeTimeLine = (area) => {
        let newTimelines = [...timelines];
        newTimelines = newTimelines.filter((item,) => item.area !== area);
        console.log(newTimelines);
        setTimelines(newTimelines);
    }

    const getAnosArea = (anos) => {
        let arrayAnos = [];
        for(let i in anos){
            arrayAnos.push(i);
        }
        console.log(arrayAnos);
        return arrayAnos;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h3>Áreas Temáticas</h3>
                    <ul className="menu-left">
                        {
                            Object.entries(areas).map((area, key) => {
                                return (
                                    <li
                                        key={"area_"+key}
                                        onClick={() => addRemoveTimeline(area[0])}
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: (timelines.find((item) => item.area === area[0]) ? "#f6f6f6" : "#fff")
                                        }}
                                        className="list-group-item-theme">
                                        <a>{area[0]}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-12">
                            {
                                timelines.length > 0 ? (
                                    <div style={{padding: '10px', backgroundColor: '#f6f6f6'}}>
                                        <strong>Áreas Selecionadas: </strong><br/>
                                        {
                                            Object.entries(areas).map((area, key) => {
                                                if(timelines.find((item) => item.area === area[0])){
                                                    return (
                                                        <button
                                                            key={"filtro"+key}
                                                            className="btn btn-sm btn-default"
                                                            style={{color: "#575757", border: "0", margin: "3px"}}
                                                            onClick={() => removeTimeLine(area[0])}
                                                        >
                                                            <i className="fa fa-times"/>&nbsp;{area[0]}
                                                        </button>
                                                    );
                                                }
                                            })
                                        }
                                    </div>
                                ) : null
                            }
                            <br/>
                        </div>
                        <div className="col-12">
                            {
                                timelines.map((item, key) => {
                                    return (
                                        <div key={item.area+"_timeline_"+key}>
                                            <h3>
                                                <div className="row">
                                                    <div className="col-md-11">{item.area}</div>
                                                    <div
                                                        className="col-md-1"
                                                        onClick={() => removeTimeLine(item.area)}
                                                        style={{cursor: "pointer", textAlign: "right"}}
                                                    >
                                                        <i className="fa fa-times"/>
                                                    </div>
                                                </div>
                                            </h3>
                                            <hr/>
                                            <div className="timeline" id={'timeline'+key}>
                                                <div className="timeline__wrap" style={{minHeight: '300px'}}>
                                                    <div className="timeline__items">
                                                        {
                                                            Object.entries(item.anos).map((subitem, key) => {
                                                                const ano = subitem[0];
                                                                const politicas = subitem[1];
                                                                return (
                                                                    <div key={item.area+"_ano_"+key} className="timeline__item">
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
                                                                                                <li key={item.area+"_politica_"+key}>
                                                                                                    {politica.nome_politica}
                                                                                                    <hr style={{display: politicas.length-1 === key ? 'none' : ''}}/>
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
                                            <br/><br/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

ReactDOM.render(
    <Timeline />,
    document.getElementById('timeline')
);
