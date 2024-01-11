const Timeline = props => {
  const {
    useEffect,
    useState
  } = React;
  useEffect(() => {
    if (props.item) {
      timeline(document.querySelectorAll('#' + props.id), {
        mode: 'horizontal',
        visibleItems: 4
      });
    }
  }, [props]);
  return props.item ? /*#__PURE__*/React.createElement("div", {
    className: "timeline",
    id: props.id
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline__wrap",
    style: {
      minHeight: '300px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline__items"
  }, Object.entries(props.item.anos).map((subitem, key) => {
    const ano = subitem[0];
    const politicas = subitem[1];
    return /*#__PURE__*/React.createElement("div", {
      key: props.item.area + "_ano_" + key,
      className: "timeline__item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "timeline__content"
    }, /*#__PURE__*/React.createElement("h4", {
      className: key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'
    }, ano), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: '100px',
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("ul", {
      className: "timeline-ul"
    }, /*#__PURE__*/React.createElement("span", {
      className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri",
      style: {
        marginTop: '9px'
      }
    }, politicas.length), politicas.map((politica, key) => {
      return /*#__PURE__*/React.createElement("li", {
        key: props.item.area + "_politica_" + key
      }, politica.nome_politica);
    })))));
  })))) : /*#__PURE__*/React.createElement("div", null, "\xA0");
};