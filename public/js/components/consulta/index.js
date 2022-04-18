const Consulta = () => {
  const {
    useEffect,
    useState
  } = React;
  const [closeSearch, setCloseSearch] = useState(true);
  const [filters, setFilters] = useState({});
  const options = [{
    value: 'chocolate',
    label: 'Chocolate'
  }, {
    value: 'strawberry',
    label: 'Strawberry'
  }, {
    value: 'vanilla',
    label: 'Vanilla'
  }];

  const addFilter = filter => {
    let newFilters = { ...filters
    };
    setFilters(newFilters);
  };

  const removeFilter = filter => {};

  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setCloseSearch(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 col-xs-12"
  }, /*#__PURE__*/React.createElement(Politica, {
    addFilter: addFilter,
    removeFilter: removeFilter
  }), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 col-xs-12"
  }, /*#__PURE__*/React.createElement(Ano, {
    addFilter: addFilter,
    removeFilter: removeFilter
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(GrandeArea, {
    close: closeSearch,
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Area, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Orgao, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Tipo, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Publico, {
    addFilter: addFilter,
    removeFilter: removeFilter
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px',
      backgroundColor: '#f6f6f6'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Filtros aplicados: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "\xC1rea: "), " Infraestrutura"), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "Ano: "), " 2020"))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(List, null))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Consulta, null), document.getElementById('consulta'));