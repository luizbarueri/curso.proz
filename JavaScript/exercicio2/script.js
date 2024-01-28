let elementoH1 = document.querySelector('h1');
let elememtoMain = document.querySelector('main');


function conexao() {
    console.log(elementoH1);
    console.log(elementoH1.innerText);
    console.log(elementoH1.innerHTML);

    elementoH1.innerText = "Novo texto com JS"
    console.log(elementoH1.innerText);

    console.log(elememtoMain);
    console.log(elememtoMain.innerText);
    console.log(elememtoMain.innerHTML);

    elememtoMain.innerHTML = `
    <h2>Novo subtitulo de main</h2>
    <ul>
        <li>Elemento JS 01</li>
        <li>Elemento JS 02</li>
        <li>Elemento JS 03</li>
    </ul>
    `
    
    
    for (let i=1; i <= 3; i++) {
        console.log("Conexão feita com sucesso!");
    }
}

conexao();