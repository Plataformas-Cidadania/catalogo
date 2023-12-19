const List = props => {

    const { useEffect, useState } = React;
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (props.items) {
            setItems(props.items);
        }
    }, [props.items]);

    return React.createElement(
        "div",
        { className: "table-responsive mb-3" },
        React.createElement(
            "table",
            { className: "table" },
            React.createElement(
                "thead",
                { className: "thead-light" },
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "Pol\xEDtica"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Grande \xC1rea"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "\xC1rea"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Sub\xE1reas"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Ano"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "\xCDnicio Vig\xEAncia"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                props.loading ? React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { colSpan: 6 },
                        React.createElement(
                            "div",
                            { className: "text-center" },
                            React.createElement("i", { className: "fa fa-spinner fa-spin fa-4x" })
                        )
                    )
                ) : items.length > 0 ? items.map(item => {
                    return React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "td",
                            null,
                            React.createElement(
                                "a",
                                { href: "politica/" + item.id + "/" + clean(item.nome) },
                                item.nome
                            )
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.grande_area.nome
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.area.nome
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.politica_categoria.map((categoria, index) => {
                                return categoria.categoria.nome + (index < item.politica_categoria.length - 1 ? " - " : "");
                            })
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.ano.substring(0, 4)
                        ),
                        React.createElement(
                            "td",
                            null,
                            item.vigencia_inicio
                        )
                    );
                }) : React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "td",
                        { colSpan: 6 },
                        React.createElement(
                            "h4",
                            { className: "text-center" },
                            "N\xE3o foram encontradas pol\xEDticas para esta consulta!"
                        )
                    )
                )
            )
        )
    );
};