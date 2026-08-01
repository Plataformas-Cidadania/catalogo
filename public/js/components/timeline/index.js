'use strict';

var _this = this;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var TimelineIndex = function TimelineIndex() {

    //const HorizontalTimeline = 'react-horizontal-timeline';
    //const { Timeline, TimelineEvent } = 'horizontal-timeline'
    //import HorizontalTimeline from 'react-horizontal-timeline';

    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState({});

    var _useState2 = _slicedToArray(_useState, 2);

    var areas = _useState2[0];
    var setAreas = _useState2[1];

    var _useState3 = useState([]);

    var _useState32 = _slicedToArray(_useState3, 2);

    var timelines = _useState32[0];
    var setTimelines = _useState32[1];

    /*const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);*/

    useEffect(function () {
        getPoliticas();
    }, []);

    useEffect(function () {
        timelines.forEach(function (item, key) {
            timeline(document.querySelectorAll('#timeline' + key), {
                mode: 'horizontal',
                visibleItems: 4
            });
        });
    }, [timelines]);

    var getPoliticas = function getPoliticas() {
        var result, politicas, newAreas;
        return regeneratorRuntime.async(function getPoliticas$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return regeneratorRuntime.awrap(axios.get('api/politica/timeline'));

                case 2:
                    result = context$2$0.sent;
                    politicas = result.data;

                    //ordena pelo ano
                    politicas = politicas.sort(function (a, b) {
                        return parseInt(a.ano.substring(0, 4)) > parseInt(b.ano.substring(0, 4)) ? 1 : -1;
                    });
                    //politicas = politicas.sort((a, b) => (parseInt(a.ano) > parseInt(b.ano)) ? 1 : -1);
                    newAreas = groupByAreas(politicas);

                    //ordena o objeto pelo nome da propriedade (neste caso a área).
                    newAreas = Object.keys(newAreas).sort().reduce(function (acc, currValue) {
                        acc[currValue] = newAreas[currValue];
                        return acc;
                    }, {});
                    setAreas(newAreas);
                    //console.log(Object.entries(newAreas));

                case 8:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    var groupByAreas = function groupByAreas(data) {
        var newAreas = {};
        data.forEach(function (item) {
            //cria a propriedade area com um objeto vazio
            if (!newAreas.hasOwnProperty(item.area)) {
                newAreas[item.area] = {};
            }
            //cria a propriedade ano dentro do objeto de area com um array vazio
            //if(!newAreas[item.area].hasOwnProperty(item.ano)){
            if (!newAreas[item.area].hasOwnProperty(item.ano.substring(0, 4))) {
                //newAreas[item.area][item.ano] = [];
                newAreas[item.area][item.ano.substring(0, 4)] = [];
            }
            //adiciona um objeto de politica no array do ano
            //newAreas[item.area][item.ano].push({
            newAreas[item.area][item.ano.substring(0, 4)].push({
                id: item.id,
                nome_politica: item.nome,
                area_id: item.area_id
            });
        });

        return newAreas;
    };

    var addRemoveTimeline = function addRemoveTimeline(area, area_id) {
        var newTimelines = [].concat(_toConsumableArray(timelines));

        //Testa se já foi inserido a timeline da área e então remove
        if (newTimelines.find(function (item) {
            return item.area === area;
        })) {
            newTimelines = newTimelines.filter(function (item) {
                return item.area !== area;
            });
            setTimelines(newTimelines);
            return;
        }

        //adiciona a timeline da área
        //newTimelines.push({
        newTimelines.unshift({
            area: area,
            area_id: area_id,
            anos: areas[area]
        });
        //console.log(newTimelines);
        setTimelines(newTimelines);
    };

    var removeTimeLine = function removeTimeLine(area) {
        var newTimelines = [].concat(_toConsumableArray(timelines));
        newTimelines = newTimelines.filter(function (item) {
            return item.area !== area;
        });
        //console.log(newTimelines);
        setTimelines(newTimelines);
    };

    var getAnosArea = function getAnosArea(anos) {
        var arrayAnos = [];
        for (var i in anos) {
            arrayAnos.push(i);
        }
        //console.log(arrayAnos);
        return arrayAnos;
    };

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-3' },
                React.createElement(
                    'h3',
                    null,
                    'Áreas Temáticas'
                ),
                React.createElement(
                    'ul',
                    { className: 'menu-left' },
                    Object.entries(areas).map(function (area, key) {
                        var area_id = area[1][Object.keys(area[1])[0]][0].area_id;
                        return React.createElement(
                            'li',
                            {
                                key: "area_" + key,
                                onClick: function () {
                                    return addRemoveTimeline(area[0], area_id);
                                },
                                style: {
                                    cursor: 'pointer',
                                    backgroundColor: timelines.find(function (item) {
                                        return item.area === area[0];
                                    }) ? "#f6f6f6" : "#fff"
                                },
                                className: 'list-group-item-theme' },
                            React.createElement(
                                'a',
                                null,
                                area[0]
                            )
                        );
                    })
                )
            ),
            React.createElement(
                'div',
                { className: 'col-md-9' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-12', style: { display: timelines.length > 0 ? 'none' : '' } },
                        React.createElement(
                            'h3',
                            { className: 'text-center', style: { backgroundColor: '#f6f6f6', padding: '30px' } },
                            'Selecione uma Área Temática para adicionar a linha do tempo'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12' },
                        timelines.length > 0 ? React.createElement(
                            'div',
                            { style: { padding: '10px', backgroundColor: '#f6f6f6' } },
                            React.createElement(
                                'strong',
                                null,
                                'Áreas Selecionadas: '
                            ),
                            React.createElement('br', null),
                            timelines.map(function (item, key) {
                                return React.createElement(
                                    'button',
                                    {
                                        key: "filtro" + key,
                                        className: 'btn btn-sm btn-default',
                                        style: { color: "#575757", border: "solid 1px #ccc", margin: "3px" },
                                        onClick: function () {
                                            return removeTimeLine(item.area);
                                        }
                                    },
                                    React.createElement('i', { className: 'fa fa-times' }),
                                    ' ',
                                    item.area
                                );
                            })
                        ) : null,
                        React.createElement('br', null)
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12' },
                        timelines.map(function (item, key) {
                            return React.createElement(
                                'div',
                                { key: item.area + "_timeline_" + key },
                                React.createElement(
                                    'h3',
                                    null,
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-10' },
                                            item.area
                                        ),
                                        React.createElement(
                                            'div',
                                            {
                                                className: 'col-md-1',
                                                onClick: function () {
                                                    return removeTimeLine(item.area);
                                                },
                                                style: { cursor: "pointer", textAlign: "right" }
                                            },
                                            React.createElement('i', { className: 'fa fa-times' })
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-md-1' },
                                            React.createElement(
                                                'a',
                                                { href: "/imprimir-timeline/" + item.area_id, target: '_blank' },
                                                React.createElement('i', { className: 'fas fa-print cursor' })
                                            )
                                        )
                                    )
                                ),
                                React.createElement('hr', null),
                                React.createElement(Timeline, { id: 'timeline' + key, item: item, area: item.area }),
                                React.createElement('br', null),
                                React.createElement('br', null)
                            );
                        })
                    )
                )
            )
        )
    );
};

ReactDOM.render(React.createElement(TimelineIndex, null), document.getElementById('timeline'));

//const result = await axios.get('csv/politicas.csv');
//let politicas = $.csv.toObjects(result.data, {separator: ';'});

//const result = await axios.get('json/politicas-timeline.json');