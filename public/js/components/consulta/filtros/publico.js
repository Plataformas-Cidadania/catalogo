const Publico = () => {
  const {
    useEffect,
    useState
  } = React;
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  useEffect(() => {
    listItems().then(() => {
      console.log('ok');
    });
  }, []);

  const listItems = async () => {
    const result = await axios.get('api/publico_alvo/');
    const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
    setItems(newItems);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "publico",
    name: "publico",
    label: "P\xFAblico Alvo",
    items: items,
    column: "nome",
    selectItem: setItem,
    multiple: true
  }));
};