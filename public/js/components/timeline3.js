"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

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

    var style = {
        politica: {
            maxWidth: "15ch",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
        }
    };

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
                    Object.entries(props.item.anos).map(function (subitem, key) {
                        var ano = subitem[0];
                        var politicas = subitem[1];
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
                                    { onClick: function () {
                                            return modalPoliticas(ano, politicas);
                                        }, style: { cursor: 'pointer' } },
                                    React.createElement(
                                        "span",
                                        {
                                            className: "position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri",
                                            style: { marginTop: '9px' } },
                                        politicas.length
                                    ),
                                    politicas.map(function (politica, key) {
                                        var id = 1;
                                        var partePolitica = politica.nome_politica.substr(0, 50);
                                        partePolitica += politica.nome_politica.length > 30 ? ' ...' : '';
                                        return React.createElement(
                                            "p",
                                            {
                                                key: props.item.area + "_politica_" + key,
                                                title: politica.nome_politica.length > 30 ? politica.nome_politica : null
                                            },
                                            partePolitica
                                        );
                                    })
                                )
                            )
                        );
                    })
                )
            )
        )
    ) : React.createElement(
        "div",
        null,
        " "
    );
};
/*<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>*/