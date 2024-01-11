const Politica = props => {
  const {
    useEffect,
    useState
  } = React;
  const [search, setSearch] = useState('');
  useEffect(() => {
    if (search.length > 2) {
      props.addFilter({
        filter: 'politica',
        value: search
      });
      return;
    }

    if (search.length === 0) {
      props.removeFilter('politica');
    }
  }, [search]);

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    htmlFor: "politica",
    style: {
      fontSize: '15px',
      fontWeight: 'bold'
    }
  }, "Pol\xEDtica"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    placeholder: " ",
    onChange: handleSearch
  }));
};