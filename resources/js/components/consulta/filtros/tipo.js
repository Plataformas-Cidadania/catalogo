const Tipo = () => {

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
                id="tipo"
                name="tipo"
                label="Tipo de Política"
                listSearch={listItems}
                qtdSearch={1}
                items={items}
                column="titulo"
                selectItem={setItem}
            />
        </div>
    );
};
