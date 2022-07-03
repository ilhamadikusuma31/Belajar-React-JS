const root = document.querySelector('#root');

function tick() {
  const elemen = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Big Ben di London"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", {
    className: "kotak",
    style: {
      width: '200px',
      heigth: '200px',
      backgroundColor: 'blue'
    }
  }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ullam fuga eaque quae, beatae odit distinctio laboriosam saepe culpa expedita?"));
  ReactDOM.render(elemen, root);
}

;
setInterval(function () {
  tick();
}, 1000);