const GrandeArea = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/grande_area/');
        const newItems = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
        setItems(newItems);
    }

    const addItem = () => {

    }

    const removeItem = () => {

    }

    return (
        <div>
            <SearchField
                id="grande-area"
                name="grande-area"
                label="Grande Área"
                /*dynamicSearch={listItems}*/
                items={items}
                column="nome"
                selectItem={setItem}
                removeItem={setItem}
            />
        </div>
    );
};
