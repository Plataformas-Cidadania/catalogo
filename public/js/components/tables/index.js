const Tables = props => {
  console.log(props.tipo);
  let teste = "";
  return props.tipo === "pie" ? /*#__PURE__*/React.createElement("div", {
    className: "tableFlex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tableCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tableRow bg-pri",
    style: {
      color: '#FFFFFF'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "T\xEDtulo")), props.labels.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "tableRow",
      key: 'col1' + key
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    className: "tableCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tableRow bg-pri",
    style: {
      color: '#FFFFFF'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "Valor")), props.series.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "tableRow",
      key: 'col2' + key
    }, item);
  }))) : /*#__PURE__*/React.createElement("div", {
    className: "tableFlex"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tableCol"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tableRow bg-pri",
    style: {
      color: '#FFFFFF'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "T\xEDtulo")), props.labels.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: "tableRow",
      key: 'tr' + key
    }, item);
  })), props.series.map((item, key) => {
    teste = item.data.map((item, key) => {
      return /*#__PURE__*/React.createElement("div", {
        className: "tableRow",
        key: key,
        style: {
          textAlign: 'center'
        }
      }, item);
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "tableCol",
      key: 'tableCol' + key,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tableRow  bg-pri",
      style: {
        color: '#FFFFFF'
      }
    }, /*#__PURE__*/React.createElement("strong", null, item.name)), teste);
  }));
};