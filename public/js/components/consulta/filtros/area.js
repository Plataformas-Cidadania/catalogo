const Area = () => {
  const {
    useEffect,
    useState
  } = React;
  const [area, setArea] = useState(null);
  const [areas, setAreas] = useState([]);

  const listAreas = search => {
    console.log(search);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SearchField, {
    listSearch: listAreas,
    qtdSearch: 3,
    items: areas,
    column: "area",
    selectItem: setArea
  }));
};