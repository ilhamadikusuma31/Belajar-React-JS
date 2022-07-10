const parentObj = ReactDOM.createRoot(document.getElementById('root'));
function App() {
    const [aktivitas, setAktivitas] = React.useState('');
    const [seluruhAktivitas, setSeluruhAktivitas] = React.useState([]);

    function tambahAktivitas(e) {
        e.preventDefault();

        //ini tuh sama aja kayak seluruhAktivitas.append(aktivitas)
        setSeluruhAktivitas([...seluruhAktivitas, aktivitas]); 

        //kosongkan form
        setAktivitas('');
    }
    return (

        <>
            <div className='h1 mt-5'>To Do List</div>
            <ol>
                {seluruhAktivitas.map(function(akt){
                    return <li>{akt}</li>
                })}
            </ol>
            <form onSubmit={tambahAktivitas}>
                <label>Masukkan aktivitas:</label>
                <input type='text' value={aktivitas} onChange={function(e){
                    setAktivitas(e.target.value);
                }}/>
                <button type='submit' className="btn btn-primary ms-2">tambah</button>
            </form>
        </>
    );
}
parentObj.render(<App/>);


