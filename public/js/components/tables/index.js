"use strict";

var Tables = function Tables(props) {

    console.log(props.tipo);

    var teste = "";

    return props.tipo === "pie" ? React.createElement(
        "div",
        { className: "tableFlex" },
        React.createElement(
            "div",
            { className: "tableCol" },
            React.createElement(
                "div",
                { className: "tableRow bg-pri", style: { color: '#FFFFFF' } },
                React.createElement(
                    "strong",
                    null,
                    "Título"
                )
            ),
            props.labels.map(function (item, key) {
                return React.createElement(
                    "div",
                    { className: "tableRow", key: 'col1' + key },
                    item
                );
            })
        ),
        React.createElement(
            "div",
            { className: "tableCol" },
            React.createElement(
                "div",
                { className: "tableRow bg-pri", style: { color: '#FFFFFF' } },
                React.createElement(
                    "strong",
                    null,
                    "Valor"
                )
            ),
            props.series.map(function (item, key) {
                return React.createElement(
                    "div",
                    { className: "tableRow", key: 'col2' + key },
                    item
                );
            })
        )
    ) : React.createElement(
        "div",
        { className: "tableFlex" },
        React.createElement(
            "div",
            { className: "tableCol" },
            React.createElement(
                "div",
                { className: "tableRow bg-pri", style: { color: '#FFFFFF' } },
                React.createElement(
                    "strong",
                    null,
                    "Título"
                )
            ),
            props.labels.map(function (item, key) {
                return React.createElement(
                    "div",
                    { className: "tableRow", key: 'tr' + key },
                    item
                );
            })
        ),
        props.series.map(function (item, key) {

            teste = item.data.map(function (item, key) {
                return React.createElement(
                    "div",
                    { className: "tableRow", key: key, style: { textAlign: 'center' } },
                    item
                );
            });

            return React.createElement(
                "div",
                { className: "tableCol", key: 'tableCol' + key, style: { textAlign: 'center' } },
                React.createElement(
                    "div",
                    { className: "tableRow  bg-pri", style: { color: '#FFFFFF' } },
                    React.createElement(
                        "strong",
                        null,
                        item.name
                    )
                ),
                teste
            );
        })
    );
};
/*{
   props.series.map((item, key) => {
         teste = item.data.map((item, key) => {
           return <div className="tableRow" key={key} style={{textAlign: 'center'}}>{item}</div>
       })
         return (
           <div className="tableCol"  key={'tableCol'+key}  style={{textAlign: 'center'}}>
               <div className="tableRow"><strong>{item.name}</strong></div>
               {teste}
           </div>
       )
   })
}*/