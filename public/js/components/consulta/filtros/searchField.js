
//objeto para guardar os refs de cada componente searchField criado
'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var wrapperRef = {};

var SearchField = function SearchField(props) {
    var _React = React;
    var useRef = _React.useRef;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState(false);

    var _useState2 = _slicedToArray(_useState, 2);

    var showBoxSearch = _useState2[0];
    var setShowBoxSearch = _useState2[1];

    var _useState3 = useState(1);

    var _useState32 = _slicedToArray(_useState3, 2);

    var qtdSearch = _useState32[0];
    var setQtdSearch = _useState32[1];

    var _useState4 = useState('Digite para buscar');

    var _useState42 = _slicedToArray(_useState4, 2);

    var placeholder = _useState42[0];
    var setPlaceholder = _useState42[1];

    var _useState5 = useState('title');

    var _useState52 = _slicedToArray(_useState5, 2);

    var column = _useState52[0];
    var setColumn = _useState52[1];

    var _useState6 = useState('');

    var _useState62 = _slicedToArray(_useState6, 2);

    var search = _useState62[0];
    var setSearch = _useState62[1];

    var _useState7 = useState([]);

    var _useState72 = _slicedToArray(_useState7, 2);

    var items = _useState72[0];
    var setItems = _useState72[1];

    var _useState8 = useState([]);

    var _useState82 = _slicedToArray(_useState8, 2);

    var showItems = _useState82[0];
    var setShowItems = _useState82[1];

    var _useState9 = useState([]);

    var _useState92 = _slicedToArray(_useState9, 2);

    var itemsSelected = _useState92[0];
    var setItemsSelected = _useState92[1];

    /*const Input = styled.input`
        font-size: 18px;
        padding: 10px;
        margin: 10px;
        background: papayawhip;
        border: none;
        border-radius: 3px;
        ::placeholder {
        color: palevioletred;
        }
    `;*/

    //cria uma propriedade com o ref do component
    wrapperRef[props.id] = useRef(null);
    useOutsideAlerter(wrapperRef[props.id]);
    //função para veririficar se o evento do click está fora do componente searchField
    function useOutsideAlerter(ref) {
        var _React2 = React;
        var useEffect = _React2.useEffect;

        useEffect(function () {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                /*console.log(ref.current);
                console.log(ref.current.contains(event.target));
                console.log(event.target);*/
                if (ref.current && !ref.current.contains(event.target)) {
                    //console.log("Click fora do component " + props.id);
                    setShowBoxSearch(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return function () {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useEffect(function () {
        setColumn(props.column);
    }, [props.column]);

    useEffect(function () {
        setItems(props.items);
        setShowItems(props.items);
        //console.log(props.items);
    }, [props.items]);

    useEffect(function () {
        if (props.qtdSearch) {
            setQtdSearch(props.qtdSearch);
        }
    }, [props.qtdSearch]);

    useEffect(function () {
        if (search.length >= qtdSearch && props.dynamicSearch) {
            props.dynamicSearch(search);
            return;
        }
        listSearch(search);
    }, [search]);

    useEffect(function () {
        if (props.selectItems) {
            props.selectItems(itemsSelected);
        }
    }, [itemsSelected]);

    var handleSearch = function handleSearch(event) {
        setSearch(event.target.value);
        setShowBoxSearch(true);
    };

    var listSearch = function listSearch(search) {
        if (search) {
            var newShowItems = items.filter(function (item) {
                return item[column].toLowerCase().includes(search.toLowerCase());
            });
            setShowItems(newShowItems);
            return;
        }
        setShowItems(items);
    };

    var addItem = function addItem(item) {
        return function (event) {
            event.stopPropagation();
            var newItemsSelected = [].concat(_toConsumableArray(itemsSelected));
            newItemsSelected.push(item);
            setItemsSelected(newItemsSelected);
            setShowBoxSearch(false);
            setSearch('');
        };
    };

    var removeItem = function removeItem(item) {
        return function (event) {
            console.log(item);
            event.stopPropagation();
            var newItemsSelected = [].concat(_toConsumableArray(itemsSelected));
            newItemsSelected = newItemsSelected.filter(function (i) {
                return i.id !== item.id;
            });
            setItemsSelected(newItemsSelected);
        };
    };

    //foco no input
    var clickDiv = function clickDiv(event) {
        //console.log('clickDiv', event.target.type);
        if (itemsSelected.length > 0) {
            if (event.target.children[itemsSelected.length]) {
                event.target.children[itemsSelected.length].focus();
                setShowBoxSearch(true);
            }
            return;
        }
        event.target.children[0].focus();
        setShowBoxSearch(true);
    };

    var clickInput = function clickInput(event) {
        event.stopPropagation();
        setShowBoxSearch(true);
    };

    return React.createElement(
        'div',
        { ref: wrapperRef[props.id], style: { marginTop: '10px' } },
        React.createElement(
            'label',
            { htmlFor: props.id, style: { fontSize: '15px', fontWeight: 'bold' } },
            props.label
        ),
        React.createElement(
            'div',
            {
                style: {
                    border: 'solid 1px #ccc',
                    padding: '5px'
                },
                onClick: clickDiv
            },
            itemsSelected.map(function (item) {
                return React.createElement(
                    'button',
                    {
                        onClick: removeItem(item),
                        style: {
                            margin: '2px',
                            border: 0,
                            borderRadius: "3px",
                            backgroundColor: '#dedede',
                            padding: '4px',
                            fontSize: '14px'
                        },
                        title: item[props.column]
                    },
                    item[props.column].substring(0, 20),
                    '  ',
                    React.createElement('i', {
                        className: 'fa fa-times',
                        style: { cursor: 'pointer' }
                    })
                );
            }),
            React.createElement('input', {
                className: 'input-select-search',
                type: 'text', placeholder: '',
                id: props.id,
                name: props.name,
                style: {
                    display: itemsSelected.length > 0 && !props.multiple ? 'none' : ''
                },
                onClick: clickInput,
                onChange: handleSearch,
                value: search
            }),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    { className: 'box-search-itens', style: { display: showBoxSearch ? '' : 'none' } },
                    showItems.map(function (item, key) {
                        if (!itemsSelected.includes(item)) {
                            return React.createElement(
                                'li',
                                { key: props.name + key, style: { fontSize: '16px' }, onClick: addItem(item) },
                                item[column]
                            );
                        }
                    })
                )
            )
        )
    );
};
/*<Input type="text" placeholder="Name" onClick={() => {setShowBoxSearch(true)}} onChange={() => {console.log(event.target.value)}}/>*/