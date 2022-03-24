const SearchField = () => {
  const {
    useEffect,
    useState
  } = React;
  const [showBoxSearch, setShowBoxSearch] = useState(false);
  const [label, setLabel] = useState('Busca');
  const [qtdSearch, setQtdSearch] = useState(3);
  const [placeholder, setPlaceholder] = useState('Digite para buscar');
  const [column, setColumn] = useState('title');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  useEffect(() => {
    if (props.qtdSearch >= qtdSearch) {
      props.listSearch(search);
    }
  }, [props.qtdSearch]);
  useEffect(() => {
    if (search.length >= qtdSearch) {
      props.listSearch(search);
    }
  }, [search]);
  useEffect(() => {
    props.selectItem(itemSelected);
  }, [itemSelected]);

  const handleSearch = event => {
    setSearch(event.target.search);
  };

  const selectItem = item => {
    setItemSelected(item);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "",
    style: {
      display: itemSelected ? 'none' : ''
    },
    onClick: () => setShowBoxSearch(!showBoxSearch),
    onChange: handleSearch
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "tx_nome_regiao2",
    style: {
      display: itemSelected ? '' : 'none'
    },
    readOnly: itemSelected,
    defaultValue: itemSelected ? this.state.filters.regiao.edre_nm_regiao : ''
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: itemSelected ? 'none' : ''
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-search",
    style: {
      top: '-28px'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: itemSelected ? '' : 'none'
    },
    onClick: () => setItemSelected(null)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times",
    style: {
      top: '-28px',
      cursor: 'pointer'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "box-search-itens",
    style: {
      display: (search || items) && !itemSelected ? '' : 'none'
    }
  }, items.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      onClick: () => setItemSelected(item)
    }, "item[column]");
  }))), /*#__PURE__*/React.createElement("br", null)));
};