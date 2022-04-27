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
  const [disabledAplicarFiltros, setDisabledAplicarFiltros] = useState(true);
  const [showMessageFiltroPolitica, setShowMessageFiltroPolitica] = useState(false);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [perPage, setPerpage] = useState(30);
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
      setFilters(newFilters); //Remove política do backup para não trocar o que for digitado na básica ao voltar pra consulta avançada

      let newBackupFilters = { ...backupFilters
      };
      delete newBackupFilters.politica;
      setBackupFilters(newBackupFilters);
      return;
    } //Quando o usuário volta pra consulta avançada então pega os filtros do backup com exceção de política


    if (tipoConsulta === 2) {
      let newFilters = { ...backupFilters
      };

      if (filters.politica) {
        newFilters.politica = filters.politica;
      } //setBackupFilters(newBackupFilters);


      setFilters(newFilters);
    }
  }, [tipoConsulta]);
  useEffect(() => {
    if (tipoConsulta === 1) {
      setAppliedFilters(filters);
      return;
    }

    setDisabledAplicarFiltros(false); //Faz um backup dos filtros anteriores (exceto política) para retornar caso o usuário volte pra consulta avançada

    let newBackupFilters = { ...filters
    };
    setBackupFilters(newBackupFilters); //verifica se existe backupFilters para mostrar a mensagem de que precisa aplicar os filtros para os filtros serem aplicados

    if (Object.keys(backupFilters).length > 0) {
      setShowMessageFiltroPolitica(true);
    }
  }, [filters]);
  useEffect(() => {
    setTextPoliticaAlterado(false);
    setPage(0);
    list();
  }, [appliedFilters]);
  useEffect(() => {
    list();
  }, [page]);

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
    setShowMessageFiltroPolitica(false);
    setDisabledAplicarFiltros(true);
    console.log(appliedFilters);
    let politica = appliedFilters.politica ? appliedFilters.politica : "";
    let ano = appliedFilters.ano ? {
      "inicio": appliedFilters.ano.inicio,
      "fim": appliedFilters.ano.fim
    } : null;
    let grande_area = [];

    if (appliedFilters.grande_area) {
      grande_area = appliedFilters.grande_area.map(item => item.id);
    }

    let area = [];

    if (appliedFilters.area) {
      area = appliedFilters.area.map(item => item.id);
    }

    let orgao = [];

    if (appliedFilters.orgao) {
      orgao = appliedFilters.orgao.map(item => item.id);
    }

    let tipo_politica = [];

    if (appliedFilters.tipo_politica) {
      tipo_politica = appliedFilters.tipo_politica.map(item => item.id);
    }

    let publico_alvo = [];

    if (appliedFilters.tipo_politica) {
      publico_alvo = appliedFilters.tipo_politica.map(item => item.id);
    }

    const result = await axios.post('api/politica/buscaAvancada', {
      "politica": politica,
      "ano": ano,
      "grande_area": grande_area,
      "area": area,
      "orgao": orgao,
      "tipo_politica": tipo_politica,
      "publico_alvo": publico_alvo,
      "page": page + 1
    });
    let newPoliticas = result.data.data;
    newPoliticas = newPoliticas.splice(0, 30);
    setPoliticas(newPoliticas);
    setTotal(result.data.total);
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
  }, "Consulta B\xE1sica"), /*#__PURE__*/React.createElement("div", {
    className: "text-center text-info"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: showMessageFiltroPolitica ? '' : 'none'
    }
  }, "\xA0\xA0Clique em ", /*#__PURE__*/React.createElement("strong", null, "Aplicar filtros"), " para pesquisar")), /*#__PURE__*/React.createElement("br", null))), /*#__PURE__*/React.createElement("div", {
    className: "row",
    style: {
      display: tipoConsulta === 2 ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 col-xs-12"
  }, /*#__PURE__*/React.createElement(Ano, {
    addFilter: addFilter,
    removeFilter: removeFilter
  })), /*#__PURE__*/React.createElement("div", {
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
    onClick: () => setAppliedFilters(filters),
    disabled: disabledAplicarFiltros
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
  }))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(Paginate, {
    setPage: setPage,
    total: total,
    page: page,
    perPage: perPage
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Consulta, null), document.getElementById('consulta'));