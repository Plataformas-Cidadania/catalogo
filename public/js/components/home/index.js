const Home = () => {
  const {
    useEffect,
    useState
  } = React;
  const [lista, setLista] = useState([]);
  const [json, setJson] = useState(false);
  const [divSelected, setDivSelected] = useState(1);
  const [divSelectedTipo, setDivSelectedTipo] = useState("mix");
  const [icon, setIcon] = useState('chart');
  useEffect(() => {
    listaData();
  }, []);
  useEffect(() => {
    if (json) {
      politicasPorAno();
    }
  }, [lista]);

  const listaData = async () => {
    try {
      const result = await axios.get('json/analise.json');
      setJson(true);
      setLista(result.data); //politicasPorAno()
    } catch (error) {
      console.log(error);
    }
  };

  const politicasPorAno = async () => {
    setJson(false);

    try {
      const result = await axios.get('api/metricas/politicas_por_ano');
      let newLista = lista;
      newLista[1] = result.data;
      setLista(newLista);
    } catch (error) {
      console.log(error);
    }
  }; //console.log('------', lista)


  const clickChart = (id, tipo) => {
    setDivSelected(id);
    setDivSelectedTipo(tipo);
  };

  const clickIcon = (id, tipo) => {
    setIcon(tipo);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt mt-5 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3 mt-5 mb-5"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "menu-left"
  }, lista ? lista.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "list-group-item-theme  cursor " + (divSelected === item.id ? 'menu-left-active' : ''),
      onClick: () => clickChart(item.id, item.tipo),
      key: 'menu' + item.id
    }, /*#__PURE__*/React.createElement("a", {
      href: true
    }, item.id, " - ", item.titulo));
  }) : null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9 mt-5 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "table-responsive mb-3"
  }, lista ? lista.map((item, index) => {
    let selectedChart = "";

    if (divSelectedTipo === "mix") {
      selectedChart = /*#__PURE__*/React.createElement(MixedChart, {
        id: 'mix-chart' + item.id,
        series: item.series,
        labels: item.labels
      });
    }

    if (divSelectedTipo === "stacked") {
      selectedChart = /*#__PURE__*/React.createElement(StackedChart, {
        id: 'stackedChart',
        series: item.series,
        labels: item.labels
      });
    }

    if (divSelectedTipo === "pie") {
      selectedChart = /*#__PURE__*/React.createElement(PieChart, {
        id: 'stackedChart',
        series: item.series,
        labels: item.labels,
        width: 1000
      });
    }

    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: divSelected === item.id ? '' : 'none'
      },
      key: 'abas' + item.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: icon === 'chart' ? '' : 'none'
      }
    }, selectedChart), /*#__PURE__*/React.createElement("div", {
      style: {
        display: icon === 'table' ? '' : 'none',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement(Tables, {
      series: item.series,
      labels: item.labels,
      index: index,
      tipo: item.tipo
    })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      onClick: () => clickIcon(item.id, 'table'),
      style: {
        display: icon === 'chart' ? '' : 'none'
      },
      className: "cursor"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-table fa-2x"
    })), /*#__PURE__*/React.createElement("div", {
      onClick: () => clickIcon(item.id, 'chart'),
      style: {
        display: icon === 'table' ? '' : 'none'
      },
      className: "cursor"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-chart-area fa-2x"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("strong", null, "Fonte: "), item.fonte));
  }) : null)))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Home, null), document.getElementById('home'));