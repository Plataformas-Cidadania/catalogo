const List = props => {
  const {
    useEffect,
    useState
  } = React;
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (props.items) {
      setItems(props.items);
    }
  }, [props.items]);
  return /*#__PURE__*/React.createElement("div", {
    className: "table-responsive mb-3"
  }, /*#__PURE__*/React.createElement("table", {
    className: "table"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "thead-light"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Pol\xEDtica"), /*#__PURE__*/React.createElement("th", null, "Grande \xC1rea"), /*#__PURE__*/React.createElement("th", null, "\xC1rea"), /*#__PURE__*/React.createElement("th", null, "Sub\xE1reas"), /*#__PURE__*/React.createElement("th", null, "Ano"), /*#__PURE__*/React.createElement("th", null, "\xCDnicio Vig\xEAncia"))), /*#__PURE__*/React.createElement("tbody", null, props.loading ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa fa-spinner fa-spin fa-4x"
  })))) : items.length > 0 ? items.map(item => {
    var dataOriginal = item.vigencia_inicio;
    var dataObj = new Date(dataOriginal);
    var dia = ('0' + dataObj.getDate()).slice(-2);
    var mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
    var ano = dataObj.getFullYear();
    var dataFormatada = dia + '/' + mes + '/' + ano;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
      href: "politica/" + item.id + "/" + clean(item.nome)
    }, item.nome)), /*#__PURE__*/React.createElement("td", null, item.grande_area.nome), /*#__PURE__*/React.createElement("td", null, item.area.nome), /*#__PURE__*/React.createElement("td", null, item.politica_categoria.map((categoria, index) => {
      return categoria.categoria.nome + (index < item.politica_categoria.length - 1 ? " - " : "");
    })), /*#__PURE__*/React.createElement("td", null, item.ano.substring(0, 4)), /*#__PURE__*/React.createElement("td", null, dataFormatada));
  }) : /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-center"
  }, "N\xE3o foram encontradas pol\xEDticas para esta consulta!"))))));
};