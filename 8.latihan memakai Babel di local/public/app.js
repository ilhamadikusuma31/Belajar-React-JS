const root = document.querySelector('#root'); // jam dan css 

function tick() {
  const elemen = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Jam Big Ben di London"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", {
    className: "kotak",
    style: {
      width: '200px',
      heigth: '200px',
      backgroundColor: 'blue'
    }
  }, "ini ngambil dari warna dari inline css"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h2", {
    className: "box"
  }, "ini ngambil warna dari file css"));
  ReactDOM.render(elemen, root);
}

;
setInterval(function () {
  tick();
}, 1000); //akhir jam dan css
//eventHandler

const eventHandler = document.querySelector('#eventHandler');

function klik(pesan) {
  alert(pesan);
}

;
const tombol =
/*#__PURE__*/
// <div>
//     <button onClick={klik}>
//         klik aku!
//     </button>
//     <br/>
// </div>;
React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
  onClick: function () {
    klik("aku ilhammmm");
  }
}, "klik aku!"), /*#__PURE__*/React.createElement("br", null));
ReactDOM.render(tombol, eventHandler); //akhir eventHandler
//React.useState()

const state = document.querySelector('#state');

function Penghitung() {
  //React.useState(value, func bawaan)
  const state = React.useState(13);
  const angka = state[0];
  const setAngka = state[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setAngka(angka - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, angka), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setAngka(angka + 1);
    }
  }, "+"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(Penghitung, null), state); //akhir React.useState()