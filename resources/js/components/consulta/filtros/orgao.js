const Orgao = () => {

    const { useEffect, useState } = React;

    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        listItems().then(() => {
            console.log('ok');
        });
    }, []);

    const listItems = async () => {
        const result = await axios.get('api/orgao/');
        const newItems = result.data.sort((a, b) => (a.nome > b.nome) ? 1 : -1);
        setItems(newItems);
    }

    return (
        <div>
            <SearchField
                id="orgao"
                name="orgao"
                label="Órgão"
                items={items}
                column="nome"
                selectItem={setItem}
            />
        </div>
    );
};
