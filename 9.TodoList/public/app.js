const parentObj = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [aktivitas, setAktivitas] = React.useState('');
  const [seluruhAktivitas, setSeluruhAktivitas] = React.useState([]);

  function tambahAktivitas(e) {
    e.preventDefault(); //ini tuh sama aja kayak seluruhAktivitas.append(aktivitas)

    setSeluruhAktivitas([...seluruhAktivitas, aktivitas]); //kosongkan form

    setAktivitas('');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h1 mt-5"
  }, "To Do List"), /*#__PURE__*/React.createElement("ol", null, seluruhAktivitas.map(function (akt) {
    return /*#__PURE__*/React.createElement("li", null, akt);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: tambahAktivitas
  }, /*#__PURE__*/React.createElement("label", null, "Masukkan aktivitas:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: aktivitas,
    onChange: function (e) {
      setAktivitas(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary ms-2"
  }, "tambah")));
}

parentObj.render( /*#__PURE__*/React.createElement(App, null));