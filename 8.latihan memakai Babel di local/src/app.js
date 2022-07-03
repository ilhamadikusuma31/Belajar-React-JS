const root = document.querySelector('#root');

function tick() {
    const elemen = <
        div > <
        h1 > Jam Big Ben di London donsdaadws1 < /h1> <
    h2 > {
        new Date().toLocaleTimeString()
    } < /h2> < /
    div > ;
    ReactDOM.render(elemen, root);
};

setInterval(function () {
    tick();
}, 1000);