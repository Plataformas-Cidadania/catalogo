'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Paginate = function Paginate(props) {
    var _React = React;
    var useState = _React.useState;
    var useEffect = _React.useEffect;

    var _useState = useState(0);

    var _useState2 = _slicedToArray(_useState, 2);

    var page = _useState2[0];
    var setPage = _useState2[1];

    var _useState3 = useState(0);

    var _useState32 = _slicedToArray(_useState3, 2);

    var total = _useState32[0];
    var setTotal = _useState32[1];

    var _useState4 = useState(null);

    var _useState42 = _slicedToArray(_useState4, 2);

    var pagination = _useState42[0];
    var setPagination = _useState42[1];

    var _useState5 = useState(10);

    var _useState52 = _slicedToArray(_useState5, 2);

    var perPage = _useState52[0];
    var setPerpage = _useState52[1];

    useEffect(function () {
        setPage(props.page);
        setTotal(props.total);
        setPerpage(props.perPage);
    }, [props.page, props.total, props.perPage]);

    useEffect(function () {
        paginate();
    }, [page, total, perPage]);

    var paginate = function paginate() {
        /*///////////////*/
        //MONTANDO A PAGINAÇÃO

        var p = []; //armazena todas as paginas
        var pages = []; //paginas q serão mostradas
        var n_pages = Math.ceil(total / perPage);
        //let n_pages = Math.ceil(page.per_page/10);
        //console.log('PAGINATE', 'page', page);
        //console.log('PAGINATE', 'total', total);
        //console.log('PAGINATE', 'n_pages', n_pages);
        //let qtdPages = 5;

        var _loop = function (i) {
            var active = page === i ? 'active' : '';
            p[i] = React.createElement(
                'li',
                { className: "page-item " + active, key: "pg" + i },
                React.createElement(
                    'a',
                    { className: 'page-link', style: { cursor: 'pointer' }, onClick: function () {
                            return props.setPage(i);
                        } },
                    i + 1
                )
            );
        };

        for (var i = 0; i < n_pages; i++) {
            _loop(i);
        }
        if (n_pages <= 10) {
            //for (let i=0; i < qtdPages; i++){
            for (var i = 0; i < n_pages; i++) {
                var active = page === i ? 'active' : '';
                pages.push(p[i]);
            }
        } else {
            if (page <= 5) {
                pages.push(p[0]);
                pages.push(p[1]);
                pages.push(p[2]);
                pages.push(p[3]);
                pages.push(p[4]);
                pages.push(p[5]);
                pages.push(p[6]);
                pages.push(React.createElement(
                    'li',
                    { className: 'page-item ' },
                    React.createElement(
                        'a',
                        { className: 'page-link' },
                        '...'
                    )
                ));
                pages.push(p[n_pages - 1]);
            } else if (page === n_pages - 1 || page === n_pages - 2) {
                pages.push(p[0]);
                pages.push(React.createElement(
                    'li',
                    { className: 'page-item ' },
                    React.createElement(
                        'a',
                        { className: 'page-link' },
                        '...'
                    )
                ));
                pages.push(p[n_pages - 8]);
                pages.push(p[n_pages - 7]);
                pages.push(p[n_pages - 6]);
                pages.push(p[n_pages - 5]);
                pages.push(p[n_pages - 4]);
                pages.push(p[n_pages - 3]);
                pages.push(p[n_pages - 2]);
                pages.push(p[n_pages - 1]);
            } else {
                pages.push(p[0]);
                pages.push(React.createElement(
                    'li',
                    { className: 'page-item ' },
                    React.createElement(
                        'a',
                        { className: 'page-link' },
                        '...'
                    )
                ));
                if (parseInt(page) + 4 < n_pages - 1) {
                    pages.push(p[parseInt(page) - 3]);
                    pages.push(p[parseInt(page) - 2]);
                    pages.push(p[parseInt(page) - 1]);
                    pages.push(p[page]);
                    pages.push(p[parseInt(page) + 1]);
                    pages.push(p[parseInt(page) + 2]);
                    pages.push(p[parseInt(page) + 3]);
                    pages.push(React.createElement(
                        'li',
                        { className: 'page-item ' },
                        React.createElement(
                            'a',
                            { className: 'page-link' },
                            '...'
                        )
                    ));
                } else {
                    pages.push(p[n_pages - 8]);
                    pages.push(p[n_pages - 7]);
                    pages.push(p[n_pages - 6]);
                    pages.push(p[n_pages - 5]);
                    pages.push(p[n_pages - 4]);
                    pages.push(p[n_pages - 3]);
                    pages.push(p[n_pages - 2]);
                    pages.push(p[n_pages - 1]);
                }
                pages.push(p[n_pages - 1]);
            }
        }

        setPagination(React.createElement(
            'ul',
            { className: 'pagination' },
            pages
        ));
        /*///////////////*/
    };

    return pagination;
};
/*<a className="page-link" style={{cursor: 'pointer'}} >*/ /*<li className="page-item disabled" style={{display: page > 0 ? '' : 'none'}}>
                                                              <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                                                           </li>*/ /*<li className="page-item" style={{display: page < parseInt(total / perPage) ? '' : 'none'}}>
                                                                      <a className="page-link" href="#">Próximo</a>
                                                                   </li>*/ /*<li className="page-item disabled" >
                                                                              <a className="page-link" href="#" tabIndex="-1">Anterior</a>
                                                                           </li>
                                                                           {pages}
                                                                           <li className="page-item" >
                                                                              <a className="page-link" href="#">Próximo</a>
                                                                           </li>*/