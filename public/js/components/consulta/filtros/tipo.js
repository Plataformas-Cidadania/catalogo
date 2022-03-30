const Tipo = () => {
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
    id: "tipo",
    name: "tipo",
    label: "Tipo de Pol\xEDtica",
    listSearch: listItems,
    qtdSearch: 1,
    items: items,
    column: "titulo",
    selectItem: setItem
  }));
};