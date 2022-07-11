const parentObj = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [aktivitas, setAktivitas] = React.useState(''); //menampung calon data.aktivitas (str)

  const [seluruhAktivitas, setSeluruhAktivitas] = React.useState([]); //menampung seluruh data         (array[{},{}..])

  const [edit, setEdit] = React.useState({}); //menampung id, aktivitas        ({})

  function simpanAktivitas(e) {
    e.preventDefault(); // //ini tuh sama aja kayak seluruhAktivitas.append(aktivitas)
    // setSeluruhAktivitas([...seluruhAktivitas, aktivitas]); 

    function generateId() {
      return Date.now();
    } //kalo update data saja


    if (edit.id) {
      const updateData = {
        id: edit.id,
        nama_aktivitas: aktivitas
      };
      const indexAktivitas = seluruhAktivitas.findIndex(function (row) {
        return row.id == edit.id;
      });
      const updatedSeluruhAktivitas = [...seluruhAktivitas]; // console.log(updatedSeluruhAktivitas);

      updatedSeluruhAktivitas[indexAktivitas] = updateData;
      setSeluruhAktivitas(updatedSeluruhAktivitas); //biar code bawah ga jalan

      return batalEdit();
    } //menambah data baru ke list aktivitas


    setSeluruhAktivitas([...seluruhAktivitas, {
      id: generateId(),
      nama_aktivitas: aktivitas
    }]); //kosongkan form

    setAktivitas('');
  }

  function hapusAktivitas(dataId) {
    const seluruhAktivitasFiltered = seluruhAktivitas.filter(function (row) {
      return row.id != dataId;
    });
    setSeluruhAktivitas(seluruhAktivitasFiltered);
  }

  function editAktivitas(data) {
    //data => menampung data yang ingin diedit      
    setAktivitas(data.nama_aktivitas); //nama_aktivitas

    setEdit(data); //{id,nama_aktivitas}
  }

  function batalEdit() {
    console.log('hai');
    setEdit({});
    setAktivitas('');
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "h1 mt-5"
  }, "To Do List"), /*#__PURE__*/React.createElement("ol", null, seluruhAktivitas.map(function (a) {
    return /*#__PURE__*/React.createElement("li", {
      key: a.id
    }, a.nama_aktivitas, /*#__PURE__*/React.createElement("button", {
      onClick: hapusAktivitas.bind(this, a.id),
      className: "badge text-bg-danger"
    }, "hapus"), /*#__PURE__*/React.createElement("button", {
      onClick: editAktivitas.bind(this, a),
      className: "badge text-bg-secondary"
    }, "edit"));
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: simpanAktivitas
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
  }, edit.id ? 'simpan perubahan' : 'simpan '), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: batalEdit,
    className: "btn btn-danger ms-1"
  }, "batal")));
}

parentObj.render( /*#__PURE__*/React.createElement(App, null));