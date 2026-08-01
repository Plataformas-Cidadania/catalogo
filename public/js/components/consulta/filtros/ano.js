'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Ano = function Ano(props) {
    var _React = React;
    var useEffect = _React.useEffect;
    var useState = _React.useState;

    var date = new Date();
    var anoAtual = date.getFullYear();

    var _useState = useState('1900');

    var _useState2 = _slicedToArray(_useState, 2);

    var from = _useState2[0];
    var setFrom = _useState2[1];

    var _useState3 = useState(anoAtual);

    var _useState32 = _slicedToArray(_useState3, 2);

    var to = _useState32[0];
    var setTo = _useState32[1];

    useEffect(function () {
        var anos = [];
        for (var i = 1940; i <= parseInt(anoAtual); i++) {
            anos.push(i);
        }

        $("#range").ionRangeSlider({
            values: anos,
            hide_min_max: true,
            //keyboard: true,
            //min: 0,
            //max: 5000,
            from: anos[0],
            to: anos[anos.length - 1],
            type: 'integer',
            //step: 1,
            prefix: "",
            //postfix: " million pounds",
            grid: false,
            onStart: function onStart(data) {
                //console.log('start', data);
            },
            onChange: function onChange(data) {
                //console.log('change', data);
            },
            onFinish: function onFinish(data) {
                //console.log(data);
                console.log('finish', data.from_value, data.to_value);
                setFrom(data.from_value);
                setTo(data.to_value);
            },
            onUpdate: function onUpdate(data) {
                console.log('update', data);
            }

        });
        var slider = $("#range").data("ionRangeSlider");
    }, []);

    useEffect(function () {
        if (from && to) {
            props.addFilter({ filter: 'ano', value: { inicio: from, fim: to } });
        }
    }, [from, to]);

    return React.createElement(
        'div',
        null,
        React.createElement(
            'label',
            { htmlFor: '', style: { fontSize: '15px', fontWeight: 'bold' } },
            'Período'
        ),
        React.createElement('input', { type: 'text', id: 'range', name: 'range' })
    );
};