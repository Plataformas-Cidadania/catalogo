const Publico = () => {
  const {
    useEffect,
    useState
  } = React;
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const listItems = async search => {
    const result = await axios.get('test-consulta/' + search);
    setItems(result.data);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "publico",
    name: "publico",
    label: "P\xFAblico Alvo",
    listSearch: listItems,
    qtdSearch: 1,
    items: items,
    column: "titulo",
    selectItem: setItem
  }));
};