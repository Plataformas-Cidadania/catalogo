const Politica = (props) => {

    const { useEffect, useState } = React;

    const [search, setSearch] = useState('');

    useEffect(() => {
        if(search.length > 2){
            props.addFilter({filter: 'politica', value: search});
            return;
        }
        if(search.length === 0){
            props.removeFilter('politica');
        }
    }, [search]);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    return (
        <div>
            <label htmlFor="politica">Política</label>
            <input type="text" className="form-control" placeholder=" " onChange={handleSearch}/>
        </div>
    );
};
