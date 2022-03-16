
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

    const addTimeline = (area) => {
        let newTimelines = [...timelines];
        newTimelines.push({
            area: area,
            anos: areas[area]
        });
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
                    <ul className="menu-left">
                        {
                            Object.entries(areas).map((item, key) => {
                                return (
                                    <li
                                        key={"area_"+key}
                                        onClick={() => addTimeline(item[0])}
                                        style={{cursor: 'pointer'}}
                                        className="list-group-item-theme">
                                        <a>{item[0]}</a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="col-md-9">
                    {
                        timelines.map((item, key) => {
                            return (
                                <div key={item.area+"_timeline_"+key}>
                                    <h3>{item.area}</h3>
                                    <hr/>
                                    <div className="timeline" id={'timeline'+key}>
                                        <div className="timeline__wrap">
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
                                                                        {
                                                                            politicas.map((politica, key) => {
                                                                                return (
                                                                                    <li key={item.area+"_politica_"+key}>
                                                                                        {politica.nome_politica}
                                                                                        <hr/>
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

    );
};

ReactDOM.render(
    <Timeline />,
    document.getElementById('timeline')
);
