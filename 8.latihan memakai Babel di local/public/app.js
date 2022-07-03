const root = document.querySelector('#root');

function tick() {
  const elemen = /*#__PURE__*/React.createElement("div", null, " ", /*#__PURE__*/React.createElement("h1", null, " Jam Big Ben di London donsdaadws1 "), " ", /*#__PURE__*/React.createElement("h2", null, " ", new Date().toLocaleTimeString(), " "), " ");
  ReactDOM.render(elemen, root);
}

;
setInterval(function () {
  tick();
}, 1000);