
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
    const [itemSelected, setItemSelected] = useState(null);

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
                    console.log("Click fora do component " + props.id);
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
        <div ref={wrapperRef[props.id]}>
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
