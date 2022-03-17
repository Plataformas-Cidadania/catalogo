const Home = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-lgt mt-5 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-5 mb-5"
  }, /*#__PURE__*/React.createElement(MixedChart, {
    id: "mix-chart1",
    series: [{
      name: 'TEAM A',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22]
    }, {
      name: 'TEAM B',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43]
    }, {
      name: 'TEAM C',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35]
    }],
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '05 Jan 2001']
  })))));
};

ReactDOM.render( /*#__PURE__*/React.createElement(Home, null), document.getElementById('home'));