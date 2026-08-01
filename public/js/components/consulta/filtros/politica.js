'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Politica = function Politica(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var _useState = useState('');

    var _useState2 = _slicedToArray(_useState, 2);

    var search = _useState2[0];
    var setSearch = _useState2[1];

    useEffect(function () {
        if (search.length > 2) {
            props.addFilter({ filter: 'politica', value: search });
            return;
        }
        if (search.length === 0) {
            props.removeFilter('politica');
        }
    }, [search]);

    var handleSearch = function handleSearch(event) {
        setSearch(event.target.value);
    };

    return React.createElement(
        'div',
        null,
        React.createElement(
            'label',
            { htmlFor: 'politica', style: { fontSize: '15px', fontWeight: 'bold' } },
            'Política'
        ),
        React.createElement('input', { type: 'text', className: 'form-control', placeholder: ' ', onChange: handleSearch })
    );
};