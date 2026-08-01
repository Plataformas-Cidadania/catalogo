'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var Header = function Header() {
    var _React = React;
    var useState = _React.useState;
    var useEffect = _React.useEffect;

    var context = React.useContext(HomeContext);

    var _useState = useState(localStorage.getItem('id_diagnostico'));

    var _useState2 = _slicedToArray(_useState, 2);

    var varLocalStorage = _useState2[0];
    var setlocalStorage = _useState2[1];

    var ClicklocalStorage = function ClicklocalStorage(key) {
        setlocalStorage();
        localStorage.removeItem('id_diagnostico');
        localStorage.removeItem('ids_dimensoes');
        localStorage.removeItem('respostas_diagnostico');
    };

    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col', onClick: function () {
                        return context.setShowMenuDiagnostico(!context.showMenuDiagnostico);
                    } },
                React.createElement(
                    'div',
                    { className: 'dorder-container cursor' },
                    React.createElement(
                        'div',
                        { className: 'dorder-container-mai' },
                        React.createElement(
                            'div',
                            { className: 'btn-icon' },
                            React.createElement('img', { src: 'img/icon-diagnostico.png', alt: 'Diagnóstico', title: 'Diagnóstico', width: '100%' })
                        ),
                        React.createElement(
                            'h2',
                            { className: 'btn-icon-h2' },
                            'Diagnóstico'
                        ),
                        React.createElement('div', { className: 'clear-both' })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'col' },
                React.createElement(
                    'a',
                    { href: 'recursos' },
                    React.createElement(
                        'div',
                        { className: 'dorder-container' },
                        React.createElement(
                            'div',
                            { className: 'dorder-container-mai' },
                            React.createElement(
                                'div',
                                { className: 'btn-icon' },
                                React.createElement('img', { src: 'img/icon-biblioteca.png', alt: 'Biblioteca', title: 'Biblioteca', width: '100%' })
                            ),
                            React.createElement(
                                'h2',
                                { className: 'btn-icon-h2' },
                                'Biblioteca'
                            ),
                            React.createElement('div', { className: 'clear-both' })
                        )
                    )
                )
            )
        ),
        React.createElement(
            'div',
            { className: 'row', style: { display: context.showMenuDiagnostico ? '' : 'none' } },
            React.createElement(
                'div',
                { className: 'container-fluid' },
                React.createElement(
                    'div',
                    { className: 'p-3' },
                    ' '
                ),
                React.createElement(
                    'div',
                    { className: 'dorder-container' },
                    React.createElement(
                        'div',
                        { className: 'bg-lgt dorder-container-mai' },
                        React.createElement(
                            'div',
                            { className: 'dorder-container-line' },
                            React.createElement(
                                'h2',
                                null,
                                'Diagnóstico'
                            ),
                            React.createElement('div', { className: 'dorder-container-box bg-lgt' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'p-3' },
                    ' '
                )
            ),
            React.createElement(
                'div',
                { className: 'col-md-12' },
                React.createElement('br', null),
                React.createElement('br', null)
            ),
            React.createElement(
                'div',
                { className: 'col text-center cursor' },
                React.createElement(
                    'a',
                    { href: 'diagnostico/completo' },
                    React.createElement(
                        'div',
                        { className: 'btn-icon btn-icon-hover', style: { top: 0 } },
                        React.createElement('img', { src: 'img/icon-completo.png', alt: 'Completo', title: 'Completo', width: '75%' })
                    ),
                    React.createElement(
                        'p',
                        { className: 'mt-2' },
                        'Completo'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'col text-center cursor' },
                React.createElement(
                    'a',
                    { href: 'diagnostico/parcial' },
                    React.createElement(
                        'div',
                        { className: 'btn-icon btn-icon-hover', style: { top: 0 } },
                        React.createElement('img', { src: 'img/icon-parcial.png', alt: 'Parcial', title: 'Parcial', width: '75%' })
                    ),
                    React.createElement(
                        'p',
                        { className: 'mt-2' },
                        'Parcial'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: "col text-center " + (varLocalStorage ? '' : 'opacity-5') },
                React.createElement(
                    'a',
                    {
                        href: varLocalStorage ? 'resultado' : '#',
                        style: { cursor: varLocalStorage ? 'pointer' : 'auto' }
                    },
                    React.createElement(
                        'div',
                        { className: 'btn-icon btn-icon-hover', style: { top: 0 } },
                        React.createElement('img', { src: 'img/icon-analise.png', alt: 'Resultado', title: 'Resultado', width: '75%' })
                    ),
                    React.createElement(
                        'p',
                        { className: 'mt-2' },
                        'Resultado'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: "col text-center " + (varLocalStorage ? '' : 'opacity-5') },
                React.createElement(
                    'div',
                    { className: 'btn-icon btn-icon-hover cursor', style: { top: 0 }, onClick: function () {
                            return ClicklocalStorage();
                        } },
                    React.createElement('img', { src: 'img/icon-limpar.png', alt: 'Parcial', title: 'Parcial', width: '75%' })
                ),
                React.createElement(
                    'p',
                    { className: 'mt-2' },
                    'Limpar'
                )
            ),
            React.createElement(
                'div',
                null,
                React.createElement(
                    'div',
                    { className: 'float-start cursor', style: { position: 'absolute', left: '15px' }, onClick: function () {
                            return context.setShowMenuDiagnostico(!context.showMenuDiagnostico);
                        } },
                    ' ',
                    React.createElement('i', { className: 'fas fa-angle-left' }),
                    ' Voltar'
                ),
                React.createElement(
                    'a',
                    { href: 'recursos', className: 'float-end', style: { position: 'absolute', right: '15px' } },
                    'Biblioteca ',
                    React.createElement('i', { className: 'fas fa-angle-right' })
                )
            )
        )
    );
};
/*////////////*/ /*////////////*/ /*<div className="col text-center  opacity-5" >
                                     <div className="btn-icon btn-icon-hover">
                                         <img src="img/icon-recurso.png" alt="Recursos" title="Recursos" width="100%"/>
                                     </div>
                                     <p className="mt-2">Análise</p>
                                  </div>*/ /*<div className={"col text-center " + (varLocalStorage ? '' : 'opacity-5')}>
                                              <a
                                                  href={(varLocalStorage ? 'resultado' : '#')}
                                                  style={{cursor: (varLocalStorage ? 'pointer' : 'auto')}}
                                              >
                                                  <div className="btn-icon btn-icon-hover" style={{top: 0}}>
                                                      <img src="img/icon-recurso.png" alt="Recursos" title="Recursos" width="75%"/>
                                                  </div>
                                                  <p className="mt-2">Recursos</p>
                                              </a>
                                           </div>*/