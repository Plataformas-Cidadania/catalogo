const Area = () => {
  const {
    useEffect,
    useState
  } = React;
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const listItems = async search => {
    console.log(search);
    const result = await axios.get('test-consulta/' + search);
    setItems(result.data);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "area",
    name: "area",
    label: "\xC1rea Tem\xE1tica",
    listSearch: listItems,
    qtdSearch: 3,
    items: items,
    column: "titulo",
    selectItem: setItem
  }));
};