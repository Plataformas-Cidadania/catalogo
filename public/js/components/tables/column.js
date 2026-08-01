"use strict";

var Column = function Column() {
    var _React = React;
    var useState = _React.useState;
    var useEffect = _React.useEffect;

    return React.createElement(
        "div",
        { className: "container" },
        React.createElement(
            "div",
            { className: "row" },
            React.createElement("div", { className: "col-md-12" })
        )
    );
};