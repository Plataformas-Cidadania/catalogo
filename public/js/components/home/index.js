const Home = () => {
  const {
    useEffect,
    useState
  } = React;
  useEffect(() => {
    listData();
  }, []);
  const [list, setList] = useState([]);
  const [divSelected, setDivSelected] = useState(0);

  const listData = async () => {
    try {
      const result = await axios.get('json/analise.json');
      setList(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const clickChart = id => {
    setDivSelected(id);
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
  }, list ? list.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      className: "list-group-item-theme  cursor " + (divSelected === key ? 'menu-left-active' : ''),
      onClick: () => clickChart(key)
    }, /*#__PURE__*/React.createElement("a", {
      href: true
    }, item.titulo));
  }) : null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-9 mt-5 mb-5"
  }, list ? list.map((item, index) => {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: divSelected === index ? 'none' : ''
      }
    }, /*#__PURE__*/React.createElement(MixedChart, {
      id: 'mix-chart' + index,
      series: item.series,
      labels: item.labels
    }));
  }) : null))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Home, null), document.getElementById('home'));