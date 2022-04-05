const Timeline = props => {
  const {
    useEffect,
    useState
  } = React;
  const [anoModal, setAnoModal] = useState(null);
  const [politicasModal, setPoliticasModal] = useState([]);
  const [stack, setStack] = useState(null);
  const style = {
    politica: {
      maxWidth: "15ch",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  };
  useEffect(() => {
    //CARD
    if (props.item) {
      console.log(props.item);
      let stack1 = document.getElementById('stack1');
      let stack2 = document.getElementById('stack2'); //stack1.children.reverse().forEach(i => newStack.append(i));

      let newStack = document.querySelector(".stack");
      console.log(stack1.children);
      console.log(newStack);
      [...newStack.children].reverse().forEach(i => newStack.append(i));
      newStack.addEventListener("click", swap);
      setStack(newStack);
    }
  }, [props.item]);

  function swap(e) {
    console.log('card');
    let card = document.querySelector(".card:last-child");
    if (e.target !== card) return;
    card.style.animation = "swap 700ms forwards";
    setTimeout(() => {
      card.style.animation = "";
      stack.prepend(card);
    }, 700);
  }

  useEffect(() => {
    if (props.item) {
      timeline(document.querySelectorAll('#' + props.id), {
        mode: 'horizontal',
        visibleItems: 4
      });
    }
  }, [props]);

  const modalPoliticas = (ano, politicas) => {
    setAnoModal(ano);
    setPoliticasModal(politicas);
    $("#modal" + props.id).modal('show');
  };

  return props.item ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "stack1",
    className: "stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "1"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "4"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "5")), /*#__PURE__*/React.createElement("div", {
    id: "stack2",
    className: "stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "1111111"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "2222222"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "333333333"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "444444"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, "555555")), /*#__PURE__*/React.createElement("div", {
    className: "modal fade",
    id: "modal" + props.id,
    tabIndex: "-1",
    "aria-labelledby": "modal" + props.id + "Label",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog modal-dialog-centered"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "modal-title",
    id: "modal" + props.id + "Label"
  }, props.area, " - ", anoModal)), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, politicasModal.map((politica, key) => {
    return /*#__PURE__*/React.createElement("p", {
      key: props.item.area + "_modal_politica_" + key
    }, /*#__PURE__*/React.createElement("a", {
      href: "politica/1/titulo"
    }, politica.nome_politica));
  }))))), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement("h3", {
      className: key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2'
    }, ano), /*#__PURE__*/React.createElement("div", {
      className: "stack"
    }, politicas.map((politica, index) => {
      let id = 1;
      return /*#__PURE__*/React.createElement("div", {
        key: props.item.area + "_politica_" + key.toString() + index,
        className: "card",
        onClick: swap
      }, politica.nome_politica);
    }))));
  }))))) : /*#__PURE__*/React.createElement("div", null, "\xA0");
};