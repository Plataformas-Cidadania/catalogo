const AreaTematica = props => {
  const {
    useEffect,
    useState
  } = React;
  const [timeline, setTimeline] = useState(null);
  useEffect(() => {
    getPoliticas();
  }, []);

  const getPoliticas = async () => {
    //const result = await axios.get('api/politica/timeline');
    const result = await axios.get('api/politica/timeline/' + props.id_area);
    let politicas = result.data; //linha temporario enquanto a rota não traz apenas as políticas da área.
    //politicas = politicas.filter((item) => item.area === props.area);

    politicas = politicas.sort((a, b) => parseInt(a.ano.substring(0, 4)) > parseInt(b.ano.substring(0, 4)) ? 1 : -1);
    console.log(politicas);
    const newTimeline = {
      area: props.area,
      anos: groupByAreas(politicas)
    };
    setTimeline(newTimeline);
  };

  const groupByAreas = data => {
    let area = {};
    data.forEach(item => {
      //cria a propriedade ano dentro do objeto de area com um array vazio
      if (!area.hasOwnProperty(item.ano.substring(0, 4))) {
        area[item.ano.substring(0, 4)] = [];
      } //adiciona um objeto de politica no array do ano


      area[item.ano.substring(0, 4)].push({
        nome_politica: item.nome
      });
    });
    return area;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12"
  }, timeline ? /*#__PURE__*/React.createElement(Timeline, {
    id: 'timeline',
    item: timeline,
    area: timeline.area
  }) : null)));
};

ReactDOM.render( /*#__PURE__*/React.createElement(AreaTematica, {
  area: area,
  id_area: id_area
}), document.getElementById('areaTematica'));