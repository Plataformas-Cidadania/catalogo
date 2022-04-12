const AreaTematica = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-3"
  }, /*#__PURE__*/React.createElement(Timeline, {
    id: 'timeline',
    item: "Teste",
    area: [{
      "area": "Agropecuária e Agrária",
      "ano": "2020",
      "nome_politica": "Programa de Residência Profissional Agrícola (AgroResidência)"
    }, {
      "area": "Assistência Social",
      "ano": "2019",
      "nome_politica": "Auxílio Brumadinho"
    }, {
      "area": "Assistência Social",
      "ano": "2020",
      "nome_politica": "Auxílio Emergencial de abril a junho de 2020"
    }, {
      "area": "Assistência Social",
      "ano": "2019",
      "nome_politica": "Auxílio pescadores"
    }]
  }))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(AreaTematica, null), document.getElementById('areaTematica'));