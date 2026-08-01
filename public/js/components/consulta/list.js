"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var List = function List(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState([]);

    var _useState2 = _slicedToArray(_useState, 2);

    var items = _useState2[0];
    var setItems = _useState2[1];

    useEffect(function () {
        if (props.items) {
            setItems(props.items);
        }
    }, [props.items]);

    return React.createElement(
        "div",
        { className: "table-responsive mb-3" },
        React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                { className: "thead-light" },
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "Política"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Grande Área"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Área"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Subáreas"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Ano"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Ínicio Vigência"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                props.loading ? React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { colSpan: 6 },
                        React.createElement(
                            "div",
                            { className: "text-center" },
                            React.createElement("i", { className: "fa fa-spinner fa-spin fa-4x" })
                        )
                    )
                ) : items.length > 0 ? items.map(function (item) {

                    var dataOriginal = item.vigencia_inicio;
                    var dataObj = new Date(dataOriginal);

                    var dia = ('0' + dataObj.getDate()).slice(-2);
                    var mes = ('0' + (dataObj.getMonth() + 1)).slice(-2);
                    var ano = dataObj.getFullYear();
                    var dataFormatada = dia + '/' + mes + '/' + ano;
                    return React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { href: "politica/" + item.id + "/" + clean(item && item.nome ? item.nome : "") },
                                item && item.nome ? item.nome : ""
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.grande_area && item.grande_area.nome ? item.grande_area.nome : ""
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.area && item.area.nome ? item.area.nome : ""
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.politica_categoria.map(function (categoria, index) {
                                return (categoria.categoria && categoria.categoria.nome ? categoria.categoria.nome : "") + (index < item.politica_categoria.length - 1 ? " - " : "");
                            })
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.ano ? item.ano.substring(0, 4) : ""
                        ),
                        React.createElement(
                            "td",
                            null,
                            dataFormatada
                        )
                    );
                }) : React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { colSpan: 6 },
                        React.createElement(
                            "h4",
                            { className: "text-center" },
                            "Não foram encontradas políticas para esta consulta!"
                        )
                    )
                )
            )
        )
    );
};