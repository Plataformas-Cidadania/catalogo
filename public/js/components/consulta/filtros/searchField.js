const SearchField = props => {
  const {
    useEffect,
    useState
  } = React;
  const [showBoxSearch, setShowBoxSearch] = useState(false);
  const [qtdSearch, setQtdSearch] = useState(3);
  const [placeholder, setPlaceholder] = useState('Digite para buscar');
  const [column, setColumn] = useState('title');
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [itemSelected, setItemSelected] = useState(null);
  useEffect(() => {
    setColumn(props.column);
  }, [props.column]);
  useEffect(() => {
    setItems(props.items);
    console.log(props.items);
  }, [props.items]);
  useEffect(() => {
    if (props.qtdSearch) {
      setQtdSearch(props.qtdSearch);
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
    setSearch(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "input-icon"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: props.id
  }, props.label), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: "",
    id: props.id,
    name: props.name,
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
    defaultValue: itemSelected ? itemSelected[column] : ''
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
      display: (search.length >= qtdSearch || items.length > 0) && !itemSelected ? '' : 'none'
    }
  }, items.map((item, key) => {
    return /*#__PURE__*/React.createElement("li", {
      key: props.name + key,
      onClick: () => setItemSelected(item)
    }, item[column]);
  }))), /*#__PURE__*/React.createElement("br", null)));
};