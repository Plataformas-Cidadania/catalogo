const Consulta = () => {
  const {
    useEffect,
    useState
  } = React;
  const [closeSearch, setCloseSearch] = useState(true);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => setCloseSearch(true)
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 col-xs-12"
  }, /*#__PURE__*/React.createElement(Politica, null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 col-xs-12"
  }, /*#__PURE__*/React.createElement(Ano, null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(GrandeArea, {
    close: closeSearch
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Area, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Orgao, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Tipo, null)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 col-xs-12"
  }, /*#__PURE__*/React.createElement(Publico, null))), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px',
      backgroundColor: '#f6f6f6'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Filtros aplicados: "), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "\xC1rea: "), " Infraestrutura"), /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement("strong", null, "Ano: "), " 2020"))))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(List, null))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Consulta, null), document.getElementById('consulta'));