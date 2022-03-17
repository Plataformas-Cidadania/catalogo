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

  const addRemoveTimeline = area => {
    let newTimelines = [...timelines]; //Testa se já foi inserido a timeline da área e então remove

    if (newTimelines.find(item => item.area === area)) {
      newTimelines = newTimelines.filter(item => item.area !== area);
      setTimelines(newTimelines);
      return;
    } //adiciona a timeline da área


    newTimelines.push({
      area: area,
      anos: areas[area]
    });
    console.log(newTimelines);
    setTimelines(newTimelines);
  };

  const removeTimeLine = area => {
    let newTimelines = [...timelines];
    newTimelines = newTimelines.filter(item => item.area !== area);
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
  }, /*#__PURE__*/React.createElement("h3", null, "\xC1reas Tem\xE1ticas"), /*#__PURE__*/React.createElement("ul", {
    className: "menu-left"
  }, Object.entries(areas).map((area, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: "area_" + key,
      onClick: () => addRemoveTimeline(area[0]),
      style: {
        cursor: 'pointer',
        backgroundColor: timelines.find(item => item.area === area[0]) ? "#f6f6f6" : "#fff"
      },
      className: "list-group-item-theme"
    }, /*#__PURE__*/React.createElement("a", null, area[0]));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12",
    style: {
      display: timelines.length > 0 ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-center",
    style: {
      backgroundColor: '#f6f6f6',
      padding: '30px'
    }
  }, "Selecione uma \xC1rea Tem\xE1tica para adicionar a linha do tempo")), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, timelines.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px',
      backgroundColor: '#f6f6f6'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\xC1reas Selecionadas: "), /*#__PURE__*/React.createElement("br", null), Object.entries(areas).map((area, key) => {
    if (timelines.find(item => item.area === area[0])) {
      return /*#__PURE__*/React.createElement("button", {
        key: "filtro" + key,
        className: "btn btn-sm btn-default",
        style: {
          color: "#575757",
          border: "0",
          margin: "3px"
        },
        onClick: () => removeTimeLine(area[0])
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa fa-times"
      }), "\xA0", area[0]);
    }
  })) : null, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-12"
  }, timelines.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: item.area + "_timeline_" + key
    }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-11"
    }, item.area), /*#__PURE__*/React.createElement("div", {
      className: "col-md-1",
      onClick: () => removeTimeLine(item.area),
      style: {
        cursor: "pointer",
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-times"
    })))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
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
  }))))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Timeline, null), document.getElementById('timeline'));