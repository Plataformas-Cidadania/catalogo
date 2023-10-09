const Publico = props => {

    const { useEffect, useState } = React;

    const [itemsSelected, setItemsSelected] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/publico_alvo/');
        const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
        setItems(newItems);
    };

    useEffect(() => {
        if (itemsSelected.length > 0) {
            props.addFilter({ filter: 'publico_alvo', value: itemsSelected });
            return;
        }
        props.removeFilter('publico_alvo');
    }, [itemsSelected]);

    return React.createElement(
        'div',
        null,
        React.createElement(SearchField, {
            id: 'publico',
            name: 'publico',
            label: 'P\xFAblico Alvo',
            items: items,
            column: 'nome',
            selectItems: setItemsSelected,
            multiple: true
        })
    );
};