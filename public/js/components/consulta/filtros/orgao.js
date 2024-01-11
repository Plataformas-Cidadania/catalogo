const Orgao = props => {
  const {
    useEffect,
    useState
  } = React;
  const [itemsSelected, setItemsSelected] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    listItems().then(() => {
      console.log('ok');
    });
  }, []);

  const listItems = async () => {
    const result = await axios.get('api/orgao/');
    const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
    setItems(newItems);
  };

  useEffect(() => {
    if (itemsSelected.length > 0) {
      props.addFilter({
        filter: 'orgao',
        value: itemsSelected
      });
      return;
    }

    props.removeFilter('orgao');
  }, [itemsSelected]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "orgao",
    name: "orgao",
    label: "\xD3rg\xE3o",
    items: items,
    column: "nome",
    selectItems: setItemsSelected,
    multiple: true
  }));
};