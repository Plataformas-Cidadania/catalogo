const Consulta = () => {
  const {
    useEffect,
    useState
  } = React;
  const [closeSearch, setCloseSearch] = useState(true);
  const [filters, setFilters] = useState({});
  const [filtersJson, setFiltersJson] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const labelsFilters = {
    grande_area: 'Grande Área',
    area: 'Área',
    categoria: 'Categoria',
    orgao: 'Órgão',
    publico_alvo: 'Público Alvo',
    tipo_politica: 'Tipo de Política'
  };
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

  const addFilter = item => {
    let newFilters = { ...filters
    };
    newFilters[item.filter] = item.value;
    setFilters(newFilters);
    console.log(newFilters);
  };

  const removeFilter = item => {
    let newFilters = { ...filters
    };
    delete newFilters[item.filter];
    setFilters(newFilters);
    console.log(newFilters);
  };

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
  }, /*#__PURE__*/React.createElement(Categoria, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Publico, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Tipo, {
    addFilter: addFilter,
    removeFilter: removeFilter
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-12 text-center"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary btn-lg",
    onClick: () => setAppliedFilters(filters)
  }, "Aplicar Filtros"))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: Object.entries(appliedFilters).length > 0 ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px',
      backgroundColor: '#f6f6f6'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Filtros aplicados: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, Object.entries(appliedFilters).map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'filter' + key,
      className: "col-md-4 col-sm-6 col-xs-12"
    }, /*#__PURE__*/React.createElement("strong", null, labelsFilters[item[0]], ": "), "\xA0", item[1].map((value, index) => {
      return /*#__PURE__*/React.createElement("span", {
        key: 'value' + index
      }, value.nome, index < item[1].length ? ',' : '', " ");
    }));
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(List, null))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Consulta, null), document.getElementById('consulta'));