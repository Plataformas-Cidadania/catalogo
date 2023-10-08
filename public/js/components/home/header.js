const Header = () => {

    const { useState, useEffect } = React;
    const context = React.useContext(HomeContext);

    const [varLocalStorage, setlocalStorage] = useState(localStorage.getItem('id_diagnostico'));

    const ClicklocalStorage = key => {
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
                { className: 'col', onClick: () => context.setShowMenuDiagnostico(!context.showMenuDiagnostico) },
                React.createElement(
                    'div',
                    { className: 'dorder-container cursor' },
                    React.createElement(
                        'div',
                        { className: 'dorder-container-mai' },
                        React.createElement(
                            'div',
                            { className: 'btn-icon' },
                            React.createElement('img', { src: 'img/icon-diagnostico.png', alt: 'Diagn\xF3stico', title: 'Diagn\xF3stico', width: '100%' })
                        ),
                        React.createElement(
                            'h2',
                            { className: 'btn-icon-h2' },
                            'Diagn\xF3stico'
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
                    '\xA0'
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
                                'Diagn\xF3stico'
                            ),
                            React.createElement('div', { className: 'dorder-container-box bg-lgt' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'p-3' },
                    '\xA0'
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
                    { className: 'btn-icon btn-icon-hover cursor', style: { top: 0 }, onClick: () => ClicklocalStorage() },
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
                    { className: 'float-start cursor', style: { position: 'absolute', left: '15px' }, onClick: () => context.setShowMenuDiagnostico(!context.showMenuDiagnostico) },
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