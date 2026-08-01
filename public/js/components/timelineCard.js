"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var Timeline = function Timeline(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState(null);

    var _useState2 = _slicedToArray(_useState, 2);

    var anoModal = _useState2[0];
    var setAnoModal = _useState2[1];

    var _useState3 = useState([]);

    var _useState32 = _slicedToArray(_useState3, 2);

    var politicasModal = _useState32[0];
    var setPoliticasModal = _useState32[1];

    var _useState4 = useState(null);

    var _useState42 = _slicedToArray(_useState4, 2);

    var stack = _useState42[0];
    var setStack = _useState42[1];

    var style = {
        politica: {
            maxWidth: "15ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    };

    useEffect(function () {
        //CARD
        if (props.item) {
            console.log('PROPS TIMELINE CARD', props);
            Object.entries(props.item.anos).forEach(function (item, key) {
                var stack = document.getElementById(props.item.area + "_ano_" + key);
                [].concat(_toConsumableArray(stack.children)).reverse().forEach(function (i) {
                    return stack.append(i);
                });
            });

            //CARD DE TESTE////////////////////
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

        e.persist();

        e.stopPropagation();

        //Bloco adicionado para quando for clicado no div do nome da politica em vez do div do card.
        var parent = e.target.parentNode;
        var target = e.target;
        if (parent.classList[0] === 'card-tl') {
            parent = parent.parentNode;
            target = e.target.parentNode;
        }
        //------------------------------------------------------------------------------------

        var card = parent.querySelector(".card-tl:last-child");
        if (target !== card) return;
        card.style.animation = "swap 700ms forwards";

        setTimeout(function () {
            card.style.animation = "";
            parent.prepend(card);
            //stack1.prepend(card);
        }, 700);
    }

    useEffect(function () {
        if (props.item) {
            timeline(document.querySelectorAll('#' + props.id), {
                mode: 'horizontal',
                visibleItems: 4
            });
        }
    }, [props]);

    var modalPoliticas = function modalPoliticas(ano, politicas) {
        setAnoModal(ano);
        setPoliticasModal(politicas);
        $("#modal" + props.id).modal('show');
    };

    return props.item ? React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { className: "modal fade", id: "modal" + props.id, tabIndex: "-1", "aria-labelledby": "modal" + props.id + "Label", "aria-hidden": "true" },
            React.createElement(
                "div",
                { className: "modal-dialog modal-dialog-centered" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "h5",
                            { className: "modal-title", id: "modal" + props.id + "Label" },
                            props.area,
                            " - ",
                            anoModal
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        politicasModal.map(function (politica, key) {
                            return React.createElement(
                                "p",
                                { key: props.item.area + "_modal_politica_" + key },
                                React.createElement(
                                    "a",
                                    { href: "politica/1/titulo" },
                                    politica.nome_politica
                                )
                            );
                        })
                    )
                )
            )
        ),
        React.createElement(
            "div",
            { className: "timeline", id: props.id },
            React.createElement(
                "div",
                { className: "timeline__wrap", style: { minHeight: '300px' } },
                React.createElement(
                    "div",
                    { className: "timeline__items" },
                    props.item.anos ? Object.entries(props.item.anos).map(function (subitem, key) {
                        var ano = subitem[0];
                        var politicas = subitem[1];
                        politicas = politicas.sort(function (a, b) {
                            return a.nome_politica > b.nome_politica ? 1 : -1;
                        });
                        return React.createElement(
                            "div",
                            { key: props.item.area + "_ano_" + key, className: "timeline__item" },
                            React.createElement(
                                "div",
                                { className: "timeline__content" },
                                React.createElement(
                                    "h3",
                                    { className: key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2' },
                                    ano
                                ),
                                React.createElement(
                                    "div",
                                    { id: props.item.area + "_ano_" + key, className: "stack" },
                                    politicas.map(function (politica, index) {

                                        return React.createElement(
                                            "div",
                                            { key: props.item.area + "_politica_" + key.toString() + index,
                                                /*className="card"*/
                                                /*className={"card-tl cor"+(Math.floor(Math.random() * 4))}*/
                                                className: "card-tl cor" + index,
                                                onClick: swap2
                                            },
                                            React.createElement(
                                                "div",
                                                { className: "text-start", style: { overflow: 'auto', height: '57px', marginBottom: '8px' }, onClick: swap2 },
                                                politica.nome_politica
                                            ),
                                            React.createElement(
                                                "div",
                                                { className: "btn-p" },
                                                React.createElement(
                                                    "a",
                                                    { href: "politica/" + politica.id + "/" + clean(politica.nome_politica) },
                                                    React.createElement(
                                                        "span",
                                                        { style: { fontWeight: 'bold' } },
                                                        "acessar"
                                                    ),
                                                    " ",
                                                    React.createElement("i", { className: "far fa-arrow-alt-circle-right" })
                                                )
                                            )
                                        );
                                    })
                                )
                            )
                        );
                    }) : null
                )
            )
        )
    ) : React.createElement(
        "div",
        null,
        " "
    );
};
/*<div id="stack1" className="stack">
   <div className="card">1
   </div>
   <div className="card">2
   </div>
   <div className="card">3
   </div>
   <div className="card">4
   </div>
   <div className="card">5
   </div>
</div>*/ /*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/ /*<a href={'politica/' + politica.id+'/' + politica.id} style={{textAlign: 'end'}}>*/ /*<div>
                                                                                                                                                                                            <span
                                                                                                                                                                                               className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri"
                                                                                                                                                                                               style={{marginTop: '9px'}}>
                                                                                                                                                                                               {politicas.length}
                                                                                                                                                                                            </span>
                                                                                                                                                                                            {
                                                                                                                                                                                               politicas.map((politica, index) => {
                                                                                                                                                                                                   let id = 1;
                                                                                                                                                                                                   let partePolitica = politica.nome_politica.substr(0, 50);
                                                                                                                                                                                                   partePolitica += politica.nome_politica.length > 30 ? ' ...' : ''
                                                                                                                                                                                                   return (
                                                                                                                                                                                                       <p
                                                                                                                                                                                                           key={props.item.area+"_politica_"+key.toString()+index}
                                                                                                                                                                                                           title={politica.nome_politica.length > 30 ? politica.nome_politica : null}
                                                                                                                                                                                                       >
                                                                                                                                                                                                           {partePolitica}
                                                                                                                                                                                                           </p>
                                                                                                                                                                                                   );
                                                                                                                                                                                               })
                                                                                                                                                                                            }
                                                                                                                                                                                            </div>*/