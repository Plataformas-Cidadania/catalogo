const Area = (props) => {

    const { useEffect, useState } = React;

    const [itemsSelected, setItemsSelected] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/area/');
        const newItems = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
        setItems(newItems);
    }

    useEffect(() => {
        if(itemsSelected.length > 0){
            props.addFilter({filter: 'area', value: itemsSelected});
            return;
        }
        props.removeFilter('area');
    }, [itemsSelected]);

    return (
        <div>
            <SearchField
                id="area"
                name="area"
                label="Área Temática"
                /*dynamicSearch={listItems}*/
                /*qtdSearch={1}*/
                items={items}
                column="nome"
                selectItems={setItemsSelected}
                multiple={true}
            />
        </div>
    );
};
