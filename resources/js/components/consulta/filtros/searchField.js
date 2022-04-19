const SearchField = (props) => {

    const { useEffect, useState } = React;

    const [showBoxSearch, setShowBoxSearch] = useState(false);
    const [qtdSearch, setQtdSearch] = useState(1);
    const [placeholder, setPlaceholder] = useState('Digite para buscar');
    const [column, setColumn] = useState('title');
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [showItems, setShowItems] = useState([]);
    const [itemSelected, setItemSelected] = useState(null);

    useEffect(() => {
        setColumn(props.column);
    }, [props.column]);

    useEffect(() => {
        setItems(props.items);
        setShowItems(props.items);
        console.log(props.items);
    }, [props.items]);

    useEffect(() => {
        if(props.qtdSearch){
            setQtdSearch(props.qtdSearch);
        }
    }, [props.qtdSearch]);

    useEffect(() => {
        if(search.length >= qtdSearch && props.dynamicSearch){
            props.dynamicSearch(search);
            return;
        }
        listSearch(search)
    }, [search]);

    useEffect(() => {
        props.selectItem(itemSelected);
    }, [itemSelected]);

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const listSearch = (search) => {
        if(search){
            const newShowItems = items.filter((item) => item[column].toLowerCase().includes(search.toLowerCase()));
            setShowItems(newShowItems);
            return;
        }
        setShowItems(items);
    }

    return (
        <div>
            <div className="input-icon">
                <label htmlFor={props.id}>{props.label}</label>
                <input type="text" className="form-control" placeholder=" "
                       id={props.id}
                       name={props.name}
                       style={{display: (itemSelected ? 'none' : '')}}
                       onClick={() => setShowBoxSearch(!showBoxSearch)} onChange={handleSearch}/>

                <input type="text" className="form-control" name="tx_nome_regiao2"
                       style={{display: (itemSelected ? '' : 'none')}}
                       readOnly={itemSelected}
                       defaultValue={itemSelected ? itemSelected[column] : ''}/>

                <div style={{display: (itemSelected ? 'none' : '')}}>
                    <i className="fas fa-search" style={{top: '-28px'}}/>
                </div>
                <div style={{display: (itemSelected ? '' : 'none')}} onClick={() => setItemSelected(null)}>
                    <i className="fas fa-times" style={{top: '-28px', cursor:'pointer'}}/>
                </div>

                <div>
                    <ul className="box-search-itens" style={{display: ((search.length >= qtdSearch || showBoxSearch) && !itemSelected) ? '' : 'none'}}>
                        {
                            showItems.map((item, key) => {
                                return (
                                    <li key={props.name + key} onClick={() => setItemSelected(item)}>
                                        {item[column]}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <br/>
            </div>
        </div>
    );
};
