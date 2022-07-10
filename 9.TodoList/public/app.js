const parentObj = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [aktivitas, setAktivitas] = React.useState('');
  const [seluruhAktivitas, setSeluruhAktivitas] = React.useState([]);

  function tambahAktivitas(e) {
    e.preventDefault(); // //ini tuh sama aja kayak seluruhAktivitas.append(aktivitas)
    // setSeluruhAktivitas([...seluruhAktivitas, aktivitas]); 

    function generateId() {
      return Date.now();
    } //menambah data baru ke list aktivitas


    setSeluruhAktivitas([...seluruhAktivitas, {
      id: generateId(),
      aktivitas: aktivitas
    }]); //kosongkan form

    setAktivitas('');
  }

  function hapusAktivitas(todoId) {
    const seluruhAktivitasFiltered = seluruhAktivitas.filter(function (row) {
      return row.id != todoId;
    });
    setSeluruhAktivitas(seluruhAktivitasFiltered);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h1 mt-5"
  }, "To Do List"), /*#__PURE__*/React.createElement("ol", null, seluruhAktivitas.map(function (a) {
    return /*#__PURE__*/React.createElement("li", {
      key: a.id
    }, a.aktivitas, /*#__PURE__*/React.createElement("button", {
      onClick: hapusAktivitas.bind(this, a.id),
      className: "badge text-bg-danger"
    }, "hapus"));
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: tambahAktivitas
  }, /*#__PURE__*/React.createElement("label", null, "Masukkan aktivitas:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: aktivitas,
    onChange: function (e) {
      setAktivitas(e.target.value);
    },
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-primary ms-2"
  }, "tambah")));
}

parentObj.render( /*#__PURE__*/React.createElement(App, null));