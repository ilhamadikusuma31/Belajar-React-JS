const root = document.querySelector('#root');

// jam dan css 
function tick() {
    const elemen = 
    <div> 
        <h1> 
            Jam Big Ben di London 
        </h1>
        <h2 > 
            {new Date().toLocaleTimeString()} 
        </h2>     
        <br/>
        <h2 className="kotak" style={{
            width:'200px',
            heigth:'200px',
            backgroundColor:'blue',
        }}>
            ini ngambil dari warna dari inline css
        </h2>
        <br/>
        <h2 className="box">
            ini ngambil warna dari file css  
        </h2>
    </div> 
    

    ;
ReactDOM.render(elemen, root);
};

setInterval(function () {
    tick();
}, 1000);
//akhir jam dan css



//eventHandler
const eventHandler = document.querySelector('#eventHandler');
function klik(pesan){
    alert(pesan)
};

const tombol = 
// <div>
//     <button onClick={klik}>
//         klik aku!
    //     </button>
    //     <br/>
    // </div>;
    <div>
        <button onClick={function(){
            klik("aku ilhammmm")
        }}>
            klik aku!
        </button>
        <br/>
    </div>;

ReactDOM.render(tombol,eventHandler);
//akhir eventHandler



//React.useState()
const state = document.querySelector('#state');
function Penghitung(){
    //React.useState(value, func bawaan)
    const state    = React.useState(13); 
    const angka     = state[0];
    const setAngka  = state[1];

    return (  
            <>
                <button onClick={function(){setAngka(angka-1)}}>
                    -
                </button>
                <span>
                    {angka}
                </span>
                <button onClick={function(){setAngka(angka+1)}}>
                    +
                </button>
            </>
            );

}
ReactDOM.render(<Penghitung/>,state);

//akhir React.useState()
