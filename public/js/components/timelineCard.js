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
      Object.entries(props.item.anos).forEach((item, key) => {
        let stack = document.getElementById(props.item.area + "_ano_" + key);
        [...stack.children].reverse().forEach(i => stack.append(i));
      }); //CARD DE TESTE////////////////////

      /*let stack1 = document.getElementById('stack1');
      [...stack1.children].reverse().forEach(i => stack1.append(i));
      stack1.addEventListener("click", swap);
       function swap(e){
          console.log('card');
          console.log(e.target.parentNode.id);
          let card = e.target.parentNode.querySelector(".card:last-child");
          if (e.target !== card) return;
          card.style.animation = "swap 700ms forwards";
           setTimeout(() => {
              card.style.animation = "";
              e.target.parentNode.prepend(card);
          }, 700);
      }*/
      ////////////////////////////////////
    }
  }, [props.item]);

  function swap2(e) {
    console.log('card timeline');
    e.persist();
    console.log(e.target.parentNode.id);
    let card = e.target.parentNode.querySelector(".card:last-child");
    if (e.target !== card) return;
    card.style.animation = "swap 700ms forwards";
    setTimeout(() => {
      card.style.animation = "";
      e.target.parentNode.prepend(card); //stack1.prepend(card);
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
      id: props.item.area + "_ano_" + key,
      className: "stack"
    }, politicas.map((politica, index) => {
      let id = 1;
      return /*#__PURE__*/React.createElement("div", {
        key: props.item.area + "_politica_" + key.toString() + index,
        className: "card",
        onClick: swap2
      }, politica.nome_politica);
    }))));
  }))))) : /*#__PURE__*/React.createElement("div", null, "\xA0");
};