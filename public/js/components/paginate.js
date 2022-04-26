const Paginate = props => {
  const {
    useState,
    useEffect
  } = React;
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [pagination, setPagination] = useState(null);
  const [perPage, setPerpage] = useState(10);
  useEffect(() => {
    setPage(props.page);
    setTotal(props.total);
    setPerpage(props.perPage);
  }, [props.page, props.total, props.perPage]);
  useEffect(() => {
    paginate();
  }, [page, total, perPage]);

  const paginate = () => {
    /*///////////////*/
    //MONTANDO A PAGINAÇÃO
    let p = []; //armazena todas as paginas

    let pages = []; //paginas q serão mostradas

    let n_pages = Math.ceil(total / perPage); //let n_pages = Math.ceil(page.per_page/10);
    //console.log('PAGINATE', 'page', page);
    //console.log('PAGINATE', 'total', total);
    //console.log('PAGINATE', 'n_pages', n_pages);
    //let qtdPages = 5;

    for (let i = 0; i < n_pages; i++) {
      let active = page === i ? 'active' : '';
      p[i] = /*#__PURE__*/React.createElement("li", {
        className: "page-item " + active,
        key: "pg" + i
      }, /*#__PURE__*/React.createElement("a", {
        className: "page-link",
        style: {
          cursor: 'pointer'
        },
        onClick: () => props.setPage(i)
      }, i + 1));
    }

    if (n_pages <= 10) {
      //for (let i=0; i < qtdPages; i++){
      for (let i = 0; i < n_pages; i++) {
        let active = page === i ? 'active' : '';
        pages.push(p[i]);
      }
    } else {
      if (page <= 5) {
        pages.push(p[0]);
        pages.push(p[1]);
        pages.push(p[2]);
        pages.push(p[3]);
        pages.push(p[4]);
        pages.push(p[5]);
        pages.push(p[6]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link"
        }, "...")));
        pages.push(p[n_pages - 1]);
      } else if (page === n_pages - 1 || page === n_pages - 2) {
        pages.push(p[0]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link"
        }, "...")));
        pages.push(p[n_pages - 8]);
        pages.push(p[n_pages - 7]);
        pages.push(p[n_pages - 6]);
        pages.push(p[n_pages - 5]);
        pages.push(p[n_pages - 4]);
        pages.push(p[n_pages - 3]);
        pages.push(p[n_pages - 2]);
        pages.push(p[n_pages - 1]);
      } else {
        pages.push(p[0]);
        pages.push( /*#__PURE__*/React.createElement("li", {
          className: "page-item "
        }, /*#__PURE__*/React.createElement("a", {
          className: "page-link"
        }, "...")));

        if (parseInt(page) + 4 < n_pages - 1) {
          pages.push(p[parseInt(page) - 3]);
          pages.push(p[parseInt(page) - 2]);
          pages.push(p[parseInt(page) - 1]);
          pages.push(p[page]);
          pages.push(p[parseInt(page) + 1]);
          pages.push(p[parseInt(page) + 2]);
          pages.push(p[parseInt(page) + 3]);
          pages.push( /*#__PURE__*/React.createElement("li", {
            className: "page-item "
          }, /*#__PURE__*/React.createElement("a", {
            className: "page-link"
          }, "...")));
        } else {
          pages.push(p[n_pages - 8]);
          pages.push(p[n_pages - 7]);
          pages.push(p[n_pages - 6]);
          pages.push(p[n_pages - 5]);
          pages.push(p[n_pages - 4]);
          pages.push(p[n_pages - 3]);
          pages.push(p[n_pages - 2]);
          pages.push(p[n_pages - 1]);
        }

        pages.push(p[n_pages - 1]);
      }
    }

    setPagination( /*#__PURE__*/React.createElement("ul", {
      className: "pagination"
    }, pages));
    /*///////////////*/
  };

  return pagination;
};