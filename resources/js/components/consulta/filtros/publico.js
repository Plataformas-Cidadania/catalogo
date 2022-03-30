const Publico = () => {

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
                id="publico"
                name="publico"
                label="Público Alvo"
                listSearch={listItems}
                qtdSearch={1}
                items={items}
                column="titulo"
                selectItem={setItem}
            />
        </div>
    );
};
