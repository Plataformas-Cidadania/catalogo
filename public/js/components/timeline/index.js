const Timeline = () => {
  //const HorizontalTimeline = 'react-horizontal-timeline';
  const {
    Timeline,
    TimelineEvent
  } = 'horizontal-timeline'; //import HorizontalTimeline from 'react-horizontal-timeline';

  const {
    useEffect,
    useState
  } = React;
  const [areas, setAreas] = useState({});
  const [timelines, setTimelines] = useState([]);
  /*const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);*/

  useEffect(() => {
    getPoliticas();
  }, []);
  useEffect(() => {
    timelines.forEach((item, key) => {
      timeline(document.querySelectorAll('#timeline' + key), {
        mode: 'horizontal',
        visibleItems: 4
      });
    });
  }, [timelines]);

  const getPoliticas = async () => {
    const result = await axios.get('csv/politicas.csv'); //console.log(result.data);

    let politicas = $.csv.toObjects(result.data, {
      separator: ';'
    }); //ordena pelo ano

    politicas = politicas.sort((a, b) => parseInt(a.ano) > parseInt(b.ano) ? 1 : -1);
    const newAreas = groupByAreas(politicas); //console.log(newAreas);

    setAreas(newAreas); //console.log(Object.entries(newAreas));
  };

  const groupByAreas = data => {
    let newAreas = {};
    data.forEach(item => {
      //cria a propriedade area com um objeto vazio
      if (!newAreas.hasOwnProperty(item.area)) {
        newAreas[item.area] = {};
      } //cria a propriedade ano dentro do objeto de area com um array vazio


      if (!newAreas[item.area].hasOwnProperty(item.ano)) {
        newAreas[item.area][item.ano] = [];
      } //adiciona um objeto de politica no array do ano


      newAreas[item.area][item.ano].push({
        nome_politica: item.nome_politica
      });
    });
    return newAreas;
  };

  const addTimeline = area => {
    let newTimelines = [...timelines];
    newTimelines.push({
      area: area,
      anos: areas[area]
    });
    console.log(newTimelines);
    setTimelines(newTimelines);
  };

  const getAnosArea = anos => {
    let arrayAnos = [];

    for (let i in anos) {
      arrayAnos.push(i);
    }

    console.log(arrayAnos);
    return arrayAnos;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "menu-left"
  }, Object.entries(areas).map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: "area_" + key,
      onClick: () => addTimeline(item[0]),
      style: {
        cursor: 'pointer'
      },
      className: "list-group-item-theme"
    }, /*#__PURE__*/React.createElement("a", null, item[0]));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, timelines.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: item.area + "_timeline_" + key
    }, /*#__PURE__*/React.createElement("h3", null, item.area), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
      className: "timeline",
      id: 'timeline' + key
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline__wrap",
      style: {
        minHeight: '300px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline__items"
    }, Object.entries(item.anos).map((subitem, key) => {
      const ano = subitem[0];
      const politicas = subitem[1];
      return /*#__PURE__*/React.createElement("div", {
        key: item.area + "_ano_" + key,
        className: "timeline__item"
      }, /*#__PURE__*/React.createElement("div", {
        className: "timeline__content"
      }, /*#__PURE__*/React.createElement("h4", {
        className: key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'
      }, ano), /*#__PURE__*/React.createElement("div", {
        style: {
          maxHeight: '100px',
          overflowY: 'auto'
        }
      }, /*#__PURE__*/React.createElement("ul", {
        className: "timeline-ul"
      }, /*#__PURE__*/React.createElement("span", {
        className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri",
        style: {
          marginTop: '9px'
        }
      }, politicas.length), politicas.map((politica, key) => {
        return /*#__PURE__*/React.createElement("li", {
          key: item.area + "_politica_" + key
        }, politica.nome_politica, /*#__PURE__*/React.createElement("hr", {
          style: {
            display: politicas.length - 1 === key ? 'none' : ''
          }
        }));
      })))));
    })))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null));
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Timeline, null), document.getElementById('timeline'));