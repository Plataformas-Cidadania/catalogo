const GrandeArea = props => {

    const { useEffect, useState } = React;

    const [itemsSelected, setItemsSelected] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/grande_area/');
        const newItems = result.data.sort((a, b) => a.nome > b.nome ? 1 : -1);
        setItems(newItems);
    };

    useEffect(() => {
        if (itemsSelected.length > 0) {
            props.addFilter({ filter: 'grande_area', value: itemsSelected });
            return;
        }
        props.removeFilter('grande_area');
    }, [itemsSelected]);

    return React.createElement(
        'div',
        null,
        React.createElement(SearchField, {
            id: 'grande-area',
            name: 'grande-area',
            label: 'Grande \xC1rea'
            /*dynamicSearch={listItems}*/
            , items: items,
            column: 'nome',
            selectItems: setItemsSelected,
            multiple: true
        })
    );
};