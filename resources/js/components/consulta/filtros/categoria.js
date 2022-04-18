const Categoria = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/categoria/');
        const newItems = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
        setItems(newItems);
    }

    return (
        <div>
            <SearchField
                id="categoria"
                name="categoria"
                label="Categoria"
                items={items}
                column="nome"
                selectItem={setItem}
                multiple={true}
            />
        </div>
    );
};
