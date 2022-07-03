const root = document.querySelector('#root');

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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ullam fuga eaque quae, beatae odit distinctio laboriosam saepe culpa expedita?
        </h2>
    </div> 
    

    
    ;
ReactDOM.render(elemen, root);
};

setInterval(function () {
    tick();
}, 1000);