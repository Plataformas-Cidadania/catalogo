const GrandeArea = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const listItems = async (search) => {
        const result = await axios.get('test-consulta/' + search);
        setItems(result.data);
    }

    return (
        <div>
            <SearchField
                id="grande-area"
                name="grande-area"
                label="Grande Área"
                listSearch={listItems}
                qtdSearch={1}
                items={items}
                column="titulo"
                selectItem={setItem}
            />
        </div>
    );
};
