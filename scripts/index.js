/* Resolver bug de menu em telas maiores */

function novaDimensao(){
    if (innerWidth >= 768){
        itens.style.display = 'block'
    } else {
        itens.style.display = 'none'
    }
}

/* Mostrar menu ao clicar o botão */

function clickMenu() {
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block';
    }
}


/* Ocultar menu após clicar em uma ancora */

const menuItens = itens.getElementsByTagName('a');

for (let item of menuItens) {
    item.addEventListener('click', () => {
        if (innerWidth > 768){
            itens.style.display = 'block';
        } else {
            itens.style.display = 'none';
        }
    });
}
