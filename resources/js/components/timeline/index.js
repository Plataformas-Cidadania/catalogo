const Timeline = () => {

    const { useEffect, useState } = React;

    const [areas, setAreas] = useState({});
    const [timelines, setTimelines] = useState([]);

    useEffect(() => {
        getPoliticas();
    }, []);

    const getPoliticas = async () => {
        const result = await axios.get('csv/politicas.csv');
        console.log(result.data);
        let politicas = $.csv.toObjects(result.data, {separator: ';'});
        //ordena pelo ano
        politicas = politicas.sort((a, b) => (parseInt(a.ano) > parseInt(b.ano)) ? 1 : -1);
        const newAreas = groupByAreas(politicas);
        console.log(newAreas);
        setAreas(newAreas);
        console.log(Object.entries(newAreas));
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

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    {
                        Object.entries(areas).map((item, key) => {
                            return (<div key={"area_"+key} onClick={() => addTimeline(item[0])} style={{cursor: 'pointer'}}>{item[0]}</div>);
                        })
                    }
                </div>
                <div className="col-md-8">
                    {
                        timelines.map((item, key) => {
                            console.log(item);
                            return (
                                <div key={"timeline_"+key}>
                                    <div><strong>{item.area}</strong></div>
                                    <div>
                                        {
                                            Object.entries(item.anos).map((subitem, key) => {
                                                const ano = subitem[0];
                                                const politicas = subitem[1];
                                                return (
                                                    <div key={item.area+"_ano_"+key}>
                                                        <div>{ano}</div>
                                                        <div>
                                                            {
                                                                politicas.map((politica, key) => {
                                                                    return (
                                                                        <div key={item.area+"_politica_"+key}>{politica.nome_politica}</div>
                                                                    );
                                                                })
                                                            }
                                                        </div>
                                                        <hr/>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <br/><hr/><hr/>
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
