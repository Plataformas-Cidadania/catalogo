const Area = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems('');
    }, []);

    const listItems = async (search) => {
        console.log(search);
        const result = await axios.get('test-consulta/' + search);
        setItems(result.data);
    }

    return (
        <div>
            <SearchField
                id="area"
                name="area"
                label="Área Temática"
                listSearch={listItems}
                qtdSearch={1}
                items={items}
                column="titulo"
                selectItem={setItem}
            />
        </div>
    );
};
