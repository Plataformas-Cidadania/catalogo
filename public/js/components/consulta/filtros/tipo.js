const Tipo = props => {
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
    const result = await axios.get('api/tipo_politica/');
    const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
    setItems(newItems);
  };

  useEffect(() => {
    if (itemsSelected.length > 0) {
      props.addFilter({
        filter: 'tipo_politica',
        value: itemsSelected
      });
      return;
    }

    props.removeFilter('tipo_politica');
  }, [itemsSelected]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "tipo",
    name: "tipo",
    label: "Tipo de Pol\xEDtica",
    items: items,
    column: "nome",
    selectItems: setItemsSelected,
    multiple: true
  }));
};