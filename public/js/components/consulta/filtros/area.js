const Area = () => {
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
    const result = await axios.get('api/area/');
    const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
    setItems(newItems);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    id: "area",
    name: "area",
    label: "\xC1rea Tem\xE1tica"
    /*dynamicSearch={listItems}*/

    /*qtdSearch={1}*/
    ,
    items: items,
    column: "nome",
    selectItem: setItem,
    multiple: true
  }));
};