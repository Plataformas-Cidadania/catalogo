"use strict";

var _this = this;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

var AreaTematica = function AreaTematica(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState(null);

    var _useState2 = _slicedToArray(_useState, 2);

    var timeline = _useState2[0];
    var setTimeline = _useState2[1];

    useEffect(function () {
        getPoliticas();
    }, []);

    var getPoliticas = function getPoliticas() {
        var result, politicas, newTimeline;
        return regeneratorRuntime.async(function getPoliticas$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return regeneratorRuntime.awrap(axios.get('api/politica/timeline/' + props.id_area));

                case 2:
                    result = context$2$0.sent;
                    politicas = result.data;

                    //linha temporario enquanto a rota não traz apenas as políticas da área.
                    //politicas = politicas.filter((item) => item.area === props.area);
                    politicas = politicas.sort(function (a, b) {
                        return parseInt(a.ano.substring(0, 4)) > parseInt(b.ano.substring(0, 4)) ? 1 : -1;
                    });
                    console.log(politicas);
                    newTimeline = {
                        area: props.area,
                        anos: groupByAreas(politicas)
                    };

                    setTimeline(newTimeline);

                case 8:
                case "end":
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    var groupByAreas = function groupByAreas(data) {
        var area = {};
        data.forEach(function (item) {
            //cria a propriedade ano dentro do objeto de area com um array vazio
            if (!area.hasOwnProperty(item.ano.substring(0, 4))) {
                area[item.ano.substring(0, 4)] = [];
            }
            //adiciona um objeto de politica no array do ano
            area[item.ano.substring(0, 4)].push({
                nome_politica: item.nome,
                id: item.id
            });
        });

        return area;
    };

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "div",
                { className: "col-md-12" },
                timeline ? React.createElement(Timeline, { id: 'timeline', item: timeline, area: timeline.area }) : null
            )
        )
    );
};

ReactDOM.render(React.createElement(AreaTematica, { area: area, id_area: id_area }), document.getElementById('areaTematica'));

//const result = await axios.get('api/politica/timeline');