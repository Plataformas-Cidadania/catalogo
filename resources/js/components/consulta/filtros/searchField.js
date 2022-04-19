
//objeto para guardar os refs de cada componente searchField criado
let wrapperRef = {};

const SearchField = (props) => {

    const { useRef, useEffect, useState } = React;

    const [showBoxSearch, setShowBoxSearch] = useState(false);
    const [qtdSearch, setQtdSearch] = useState(1);
    const [placeholder, setPlaceholder] = useState('Digite para buscar');
    const [column, setColumn] = useState('title');
    const [search, setSearch] = useState('');
    const [items, setItems] = useState([]);
    const [showItems, setShowItems] = useState([]);
    const [itemsSelected, setItemsSelected] = useState([]);


    /*const Input = styled.input`
        font-size: 18px;
        padding: 10px;
        margin: 10px;
        background: papayawhip;
        border: none;
        border-radius: 3px;
        ::placeholder {
        color: palevioletred;
        }
    `;*/

    //cria uma propriedade com o ref do component
    wrapperRef[props.id] = useRef(null);
    useOutsideAlerter(wrapperRef[props.id]);
    //função para veririficar se o evento do click está fora do componente searchField
    function useOutsideAlerter(ref) {

        const { useEffect } = React;

        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                /*console.log(ref.current);
                console.log(ref.current.contains(event.target));
                console.log(event.target);*/
                if (ref.current && !ref.current.contains(event.target)) {
                    //console.log("Click fora do component " + props.id);
                    setShowBoxSearch(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


    useEffect(() => {
        setColumn(props.column);
    }, [props.column]);

    useEffect(() => {
        setItems(props.items);
        setShowItems(props.items);
        //console.log(props.items);
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
        if(props.selectItems){
            props.selectItems(itemsSelected);
        }
    }, [itemsSelected]);

    const handleSearch = (event) => {
        setSearch(event.target.value)
        setShowBoxSearch(true);
    }

    const listSearch = (search) => {
        if(search){
            const newShowItems = items.filter((item) => item[column].toLowerCase().includes(search.toLowerCase()));
            setShowItems(newShowItems);
            return;
        }
        setShowItems(items);
    }

    const addItem = (item) => (event) => {
        event.stopPropagation();
        let newItemsSelected = [...itemsSelected];
        newItemsSelected.push(item);
        setItemsSelected(newItemsSelected);
        setShowBoxSearch(false);
        setSearch('');
    }

    const removeItem = (item) => (event) => {
        console.log(item);
        event.stopPropagation();
        let newItemsSelected = [...itemsSelected];
        newItemsSelected = newItemsSelected.filter((i) => i.id !== item.id)
        setItemsSelected(newItemsSelected);
    }

    //foco no input
    const clickDiv = (event) => {
        //console.log('clickDiv', event.target.type);
        if(itemsSelected.length > 0){
            if(event.target.children[itemsSelected.length]){
                event.target.children[itemsSelected.length].focus();
            }
            return;
        }
        event.target.children[0].focus()
        setShowBoxSearch(true);
    }

    const clickInput = (event) => {
        event.stopPropagation();
        setShowBoxSearch(true);
    }

    return (
        <div ref={wrapperRef[props.id]}>
            <label htmlFor={props.id}>{props.label}</label>
            <div
                style={{
                    border: 'solid 1px #ccc',
                    padding: '5px',
                }}
                onClick={clickDiv}
            >


                {
                    itemsSelected.map((item) => {
                        return (
                            <button
                                onClick={removeItem(item)}
                                style={{
                                    margin: '2px',
                                    border: 0,
                                    borderRadius: "3px",
                                    backgroundColor: '#dedede',
                                    padding: '4px',
                                    fontSize: '12px'
                                }}
                            >
                                {item[props.column].substring(0, 20)}
                                &nbsp;&nbsp;
                                <i
                                    className="fa fa-times"
                                    style={{cursor: 'pointer'}}
                                />
                            </button>
                        );
                    })
                }
                {/*<Input type="text" placeholder="Name" onClick={() => {setShowBoxSearch(true)}} onChange={() => {console.log(event.target.value)}}/>*/}
                <input
                    className="input-select-search"
                    type="text" placeholder=""
                    id={props.id}
                    name={props.name}
                    style={{
                        display: (itemsSelected.length > 0 && !props.multiple ? 'none' : ''),
                    }}
                    onClick={clickInput}
                    onChange={handleSearch}
                    value={search}
                />

                <div>
                    <ul className="box-search-itens" style={{display: showBoxSearch ? '' : 'none'}}>
                        {
                            showItems.map((item, key) => {
                                if(!itemsSelected.includes(item)){
                                    return (
                                        <li key={props.name + key} onClick={addItem(item)}>
                                            {item[column]}
                                        </li>
                                    );
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};
