const Consulta = () => {
  const {
    useEffect,
    useState
  } = React;
  const [closeSearch, setCloseSearch] = useState(true);
  const [filters, setFilters] = useState({});
  const [filtersJson, setFiltersJson] = useState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const [backupFilters, setBackupFilters] = useState({});
  const [tipoConsulta, setTipoConsulta] = useState(1); // 1 - Básica | 2 - Avançada
  //Para informar ao usuário que deve clicar em pesquisar filtros no caso de consulta avançada

  const [textoPoliticaAlterado, setTextPoliticaAlterado] = useState(false);
  const [politicas, setPoliticas] = useState([]);
  const [loading, setLoading] = useState(false);
  const labelsFilters = {
    politica: 'Política',
    ano: 'Período',
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
  useEffect(() => {
    //Quando troca para consulta básica
    if (tipoConsulta === 1) {
      let newFilters = { ...filters
      };
      delete newFilters.ano;
      delete newFilters.grande_area;
      delete newFilters.area;
      delete newFilters.categoria;
      delete newFilters.orgao;
      delete newFilters.publico_alvo;
      delete newFilters.tipo_politica;
      setFilters(newFilters); //Faz um backup dos filtros anterires para retornar caso o usuário volte pra consulta avançada

      setBackupFilters(filters);
      return;
    } //Quando o usuário volta pra consulta avançada então pega os filtros do backup com exceção de política


    if (tipoConsulta === 2) {
      let newBackupFilters = { ...backupFilters
      };

      if (filters.politica) {
        newBackupFilters.politica = filters.politica;
      }

      setBackupFilters(newBackupFilters);
      setFilters(newBackupFilters);
    }
  }, [tipoConsulta]);
  useEffect(() => {
    if (tipoConsulta === 1) {
      setAppliedFilters(filters);
    }
  }, [filters]);
  useEffect(() => {
    setTextPoliticaAlterado(false);
    list();
  }, [appliedFilters]);

  const addFilter = item => {
    let newFilters = { ...filters
    };
    newFilters[item.filter] = item.value;
    setFilters(newFilters);
    console.log(newFilters);
  };

  const removeFilter = filter => {
    let newFilters = { ...filters
    }; //console.log(filter);

    delete newFilters[filter]; //console.log('removeFilter', newFilters);

    setFilters(newFilters);
  };

  const list = async () => {
    setLoading(true);
    const result = await axios.get('api/politica');
    setPoliticas(result.data);
    setLoading(false);
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
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-warning",
    style: {
      display: tipoConsulta === 2 && textoPoliticaAlterado ? '' : 'none'
    }
  }, "Clique em aplicar filtros ou pressione enter para pesquisar"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    style: {
      display: tipoConsulta === 1 ? '' : 'none',
      marginTop: '5px'
    },
    onClick: () => setTipoConsulta(2)
  }, "Consulta Avan\xE7ada"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-sm btn-primary",
    style: {
      display: tipoConsulta === 2 ? '' : 'none',
      marginTop: '5px'
    },
    onClick: () => setTipoConsulta(1)
  }, "Consulta B\xE1sica"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: tipoConsulta === 2 ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
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
    className: "row",
    style: {
      display: tipoConsulta === 2 ? '' : 'none'
    }
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
    }, /*#__PURE__*/React.createElement("strong", null, labelsFilters[item[0]], ": "), "\xA0", item[0] === 'politica' ? /*#__PURE__*/React.createElement("span", null, item[1]) : item[0] === 'ano' ? /*#__PURE__*/React.createElement("span", null, item[1].inicio, " - ", item[1].fim) : item[1].map((value, index) => {
      return /*#__PURE__*/React.createElement("span", {
        key: 'value' + index
      }, value.nome, index < item[1].length - 1 ? ',' : '', " ");
    }));
  }))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(List, {
    items: politicas,
    loading: loading
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Consulta, null), document.getElementById('consulta'));