const Timeline = () => {
  const {
    useEffect,
    useState
  } = React;
  const [areas, setAreas] = useState({});
  const [timelines, setTimelines] = useState([]);
  useEffect(() => {
    getPoliticas();
  }, []);

  const getPoliticas = async () => {
    const result = await axios.get('csv/politicas.csv');
    console.log(result.data);
    let politicas = $.csv.toObjects(result.data, {
      separator: ';'
    }); //ordena pelo ano

    politicas = politicas.sort((a, b) => parseInt(a.ano) > parseInt(b.ano) ? 1 : -1);
    const newAreas = groupByAreas(politicas);
    console.log(newAreas);
    setAreas(newAreas);
    console.log(Object.entries(newAreas));
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

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-4"
  }, Object.entries(areas).map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: "area_" + key,
      onClick: () => addTimeline(item[0]),
      style: {
        cursor: 'pointer'
      }
    }, item[0]);
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, timelines.map((item, key) => {
    console.log(item);
    return /*#__PURE__*/React.createElement("div", {
      key: "timeline_" + key
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, item.area)), /*#__PURE__*/React.createElement("div", null, Object.entries(item.anos).map((subitem, key) => {
      const ano = subitem[0];
      const politicas = subitem[1];
      return /*#__PURE__*/React.createElement("div", {
        key: item.area + "_ano_" + key
      }, /*#__PURE__*/React.createElement("div", null, ano), /*#__PURE__*/React.createElement("div", null, politicas.map((politica, key) => {
        return /*#__PURE__*/React.createElement("div", {
          key: item.area + "_politica_" + key
        }, politica.nome_politica);
      })), /*#__PURE__*/React.createElement("hr", null));
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("hr", null));
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Timeline, null), document.getElementById('timeline'));