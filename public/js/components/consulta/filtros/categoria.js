'use strict';

var _this = this;

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Categoria = function Categoria(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState([]);

    var _useState2 = _slicedToArray(_useState, 2);

    var itemsSelected = _useState2[0];
    var setItemsSelected = _useState2[1];

    var _useState3 = useState([]);

    var _useState32 = _slicedToArray(_useState3, 2);

    var items = _useState32[0];
    var setItems = _useState32[1];

    useEffect(function () {
        listItems().then(function () {
            console.log('ok');
        });
    }, []);

    var listItems = function listItems() {
        var result, newItems;
        return regeneratorRuntime.async(function listItems$(context$2$0) {
            while (1) switch (context$2$0.prev = context$2$0.next) {
                case 0:
                    context$2$0.next = 2;
                    return regeneratorRuntime.awrap(axios.get('api/categoria/'));

                case 2:
                    result = context$2$0.sent;
                    newItems = result.data.sort(function (a, b) {
                        return a.nome > b.nome ? 1 : -1;
                    });

                    setItems(newItems);

                case 5:
                case 'end':
                    return context$2$0.stop();
            }
        }, null, _this);
    };

    useEffect(function () {
        if (itemsSelected.length > 0) {
            props.addFilter({ filter: 'categoria', value: itemsSelected });
            return;
        }
        props.removeFilter('categoria');
    }, [itemsSelected]);

    return React.createElement(
        'div',
        null,
        React.createElement(SearchField, {
            id: 'categoria',
            name: 'categoria',
            label: 'Subáreas',
            items: items,
            column: 'nome',
            selectItems: setItemsSelected,
            multiple: true
        })
    );
};