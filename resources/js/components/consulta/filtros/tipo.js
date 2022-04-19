const Tipo = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/tipo_politica/');
        const newItems = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
        setItems(newItems);
    }

    return (
        <div>
            <SearchField
                id="tipo"
                name="tipo"
                label="Tipo de Política"
                items={items}
                column="nome"
                selectItem={setItem}
            />
        </div>
    );
};
