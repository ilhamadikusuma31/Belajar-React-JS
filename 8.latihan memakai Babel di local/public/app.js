// const root = document.querySelector('#root');
// // jam dan css 
// function tick() {
//     const elemen = 
//     <div> 
//         <h1> 
//             Jam Big Ben di London 
//         </h1>
//         <h2 > 
//             {new Date().toLocaleTimeString()} 
//         </h2>     
//         <br/>
//         <h2 className="kotak" style={{
//             width:'200px',
//             heigth:'200px',
//             backgroundColor:'blue',
//         }}>
//             ini ngambil dari warna dari inline css
//         </h2>
//         <br/>
//         <h2 className="box">
//             ini ngambil warna dari file css  
//         </h2>
//     </div> 
//     ;
// ReactDOM.render(elemen, root);
// };
// setInterval(function () {
//     tick();
// }, 1000);
// //akhir jam dan css
// //eventHandler
// const eventHandler = document.querySelector('#eventHandler');
// function klik(pesan){
//     alert(pesan)
// };
// const tombol = 
// // <div>
// //     <button onClick={klik}>
// //         klik aku!
//     //     </button>
//     //     <br/>
//     // </div>;
//     <div>
//         <button onClick={function(){
//             klik("aku ilhammmm")
//         }}>
//             klik aku!
//         </button>
//         <br/>
//     </div>;
// ReactDOM.render(tombol,eventHandler);
// //akhir eventHandler
// //React.useState()
// //re-render
// const state = document.querySelector('#useState');
// function Penghitung(){
//     //React.useState(value, func bawaan)
//     const state    = React.useState(13); 
//     const angka     = state[0];
//     const setAngka  = state[1];
//     return (  
//             <>
//                 <button onClick={function(){setAngka(angka-1)}}>
//                     -
//                 </button>
//                 <span>
//                     {angka}
//                 </span>
//                 <button onClick={function(){setAngka(angka+1)}}>
//                     +
//                 </button>
//             </>
//             );
// }
// ReactDOM.render(<Penghitung/>,state);
// //akhir React.useState()
// //React.useEffect()  :bisa menjalankan sebelum dirender
// const parentObj = ReactDOM.createRoot(document.getElementById('useEffect'));
// function App() {
//     const [diklik, setDiklik] = React.useState(false);
//     const [count, setCount] = React.useState(0);
//     React.useEffect(()=>{
//         console.log(document.getElementById('judul-terserah'));
//     },[diklik]); //bisa ngeprint sebelum di render khusus (func diklik)
//     return(
//     <> 
//         <h1 id="judul-terserah">Hello ini judul terserah</h1>
//         <button onClick={function(){
//             setDiklik(true)
//         }}>
//         klik aku dong
//         </button>
//         <button onClick={function(){
//             setCount(count+1)
//         }}>
//         +
//         </button>
//     </>
//     );
// }
// parentObj.render(<App/>);
// //akhir React.useEffect()
// // conditional rendering
// const parentObj = ReactDOM.createRoot(document.getElementById('conditionalRendering'));
// function App() {
//     const [login, setLogin]= React.useState(false);
//     // if(login){
//     //     return <h2>Selamat sudah login</h2>
//     // }
//     return(
//         <> 
//         <h1 id="judul-terserah">Hello login banh</h1>
//         <p>{login?'anda sudah login':''}</p>
//         <button className="btn btn-outline-success" onClick={function(){
//             setLogin(true);
//         }}>Login</button>
//     </>
// );
// }
// parentObj.render(<App/>);
// //akhir conditional rendering
// // useRef : gantinya dom untuk id atau class pada objek html
// // jika value berubah ga melakukan re-render 
// const parentObj = ReactDOM.createRoot(document.getElementById('use-Ref'));
// function App() {
//     const [login, setLogin]= React.useState(false);
//     //nama var harus sesuai di ref
//     const judul = React.useRef(null); 
//     React.useEffect(function () {
//         // console.log(judul.current);
//         setTimeout(() => {
//             judul.current.textContent = 'timpa judul banh';
//         }, 5000);
//     },[])
//     return(
//         <> 
//         <h1 ref={judul}>Hello login banh</h1>
//         <p>{login?'anda sudah login':''}</p>
//         <button className="btn btn-outline-success" onClick={function(){
//             setLogin(true);
//         }}>Login</button>
//     </>
// );
// }
// parentObj.render(<App/>);
// //akhir useRef
// list
const parentObj = ReactDOM.createRoot(document.getElementById('list'));

function App() {
  const animals = ['ayam', 'sapi', 'kambing', 'macan', 'singa'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "display-5 mt-3"
  }, "daftar nama (hewan ngambil pake indeks)"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, animals[0]), /*#__PURE__*/React.createElement("li", null, animals[1]), /*#__PURE__*/React.createElement("li", null, animals[2]), /*#__PURE__*/React.createElement("li", null, animals[3]), /*#__PURE__*/React.createElement("li", null, animals[4])), /*#__PURE__*/React.createElement("p", {
    className: "display-5 mt-3"
  }, "daftar nama (hewan ngambil pake map) + att key"), /*#__PURE__*/React.createElement("ol", null, animals.map(function (a) {
    return /*#__PURE__*/React.createElement("li", {
      key: a
    }, a);
  })));
}

parentObj.render( /*#__PURE__*/React.createElement(App, null)); //akhir list