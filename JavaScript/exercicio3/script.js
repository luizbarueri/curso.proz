/*
No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.  
*/

const elementoH1 = document.querySelector('h1');
const elementoUL = document.querySelector('ul');
const elementoA = document.querySelector('a');
const elementoOL = document.querySelector('ol');

elementoA.innerText = "Título";
elementoA.innerText = "Link Site"
elementoUL.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`
elementoOL.innerHTML = `
    <li><a href="#">Home</a></li>
    <li><a href="#">Contato</a></li>
    <li><a href="#">Sobre</a></li>
`