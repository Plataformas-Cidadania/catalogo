const Timeline = props => {

    const { useEffect, useState } = React;

    useEffect(() => {
        if (props.item) {
            timeline(document.querySelectorAll('#' + props.id), {
                mode: 'horizontal',
                visibleItems: 4
            });
        }
    }, [props]);

    return props.item ? React.createElement(
        'div',
        { className: 'timeline', id: props.id },
        React.createElement(
            'div',
            { className: 'timeline__wrap', style: { minHeight: '300px' } },
            React.createElement(
                'div',
                { className: 'timeline__items' },
                Object.entries(props.item.anos).map((subitem, key) => {
                    const ano = subitem[0];
                    const politicas = subitem[1];
                    return React.createElement(
                        'div',
                        { key: props.item.area + "_ano_" + key, className: 'timeline__item' },
                        React.createElement(
                            'div',
                            { className: 'timeline__content' },
                            React.createElement(
                                'h4',
                                { className: key % 2 === 0 ? 'timeline-ano' : 'timeline-ano-2' },
                                ano
                            ),
                            React.createElement(
                                'div',
                                { style: { maxHeight: '100px', overflowY: 'auto' } },
                                React.createElement(
                                    'ul',
                                    { className: 'timeline-ul' },
                                    React.createElement(
                                        'span',
                                        {
                                            className: 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-pri',
                                            style: { marginTop: '9px' } },
                                        politicas.length
                                    ),
                                    politicas.map((politica, key) => {
                                        return React.createElement(
                                            'li',
                                            { key: props.item.area + "_politica_" + key },
                                            politica.nome_politica
                                        );
                                    })
                                )
                            )
                        )
                    );
                })
            )
        )
    ) : React.createElement(
        'div',
        null,
        '\xA0'
    );
};