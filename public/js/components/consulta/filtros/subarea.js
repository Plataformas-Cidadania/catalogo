const Subarea = () => {
  const {
    useEffect,
    useState
  } = React;
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    listItems('');
  }, []);

  const listItems = async search => {
    console.log(search);
    const result = await axios.get('test-consulta/' + search);
    setItems(result.data);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "subarea",
    name: "subarea",
    label: "Sub\xE1rea",
    listSearch: listItems,
    qtdSearch: 1,
    items: items,
    column: "titulo",
    selectItem: setItem
  }));
};