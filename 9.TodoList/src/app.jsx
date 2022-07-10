const parentObj = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    const [aktivitas, setAktivitas] = React.useState('');
    const [seluruhAktivitas, setSeluruhAktivitas] = React.useState([]);

    function tambahAktivitas(e) {
        e.preventDefault();

        // //ini tuh sama aja kayak seluruhAktivitas.append(aktivitas)
        // setSeluruhAktivitas([...seluruhAktivitas, aktivitas]); 

        function generateId(){
            return Date.now();
        }

        //menambah data baru ke list aktivitas
        setSeluruhAktivitas([...seluruhAktivitas,{
            id:generateId(),
            aktivitas:aktivitas
        }]);

        //kosongkan form
        setAktivitas('');
    }



    function hapusAktivitas(todoId) {
        const seluruhAktivitasFiltered = seluruhAktivitas.filter(function (row) {
            return row.id != todoId
        })

        setSeluruhAktivitas(seluruhAktivitasFiltered);
    }
    return (

        <>
            <div className='h1 mt-5'>To Do List</div>
            <ol>
                {seluruhAktivitas.map(function(a){
                    return( 
                        <li key={a.id}>{a.aktivitas}
                        <button onClick={hapusAktivitas.bind(this, a.id)} className="badge text-bg-danger">hapus</button>
                        </li>
                       
                );
                })}
            </ol>
            <form onSubmit={tambahAktivitas}>
                <label>Masukkan aktivitas:</label>
                <input type='text' value={aktivitas} onChange={function(e){
                    setAktivitas(e.target.value);
                }} required/>
                <button type='submit' className="btn btn-primary ms-2" >tambah</button>
            </form>
        </>
    );
}
parentObj.render(<App/>);


