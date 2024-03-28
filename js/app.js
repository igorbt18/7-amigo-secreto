let pessoas = [];

function adicionar() {

    let amigos = document.getElementById("nome-amigo");
    
    if (amigos.value == "" ){
        alert("Digite um nome valido.");
        return
    } 

    if (pessoas.includes(amigos.value)) {
        alert("Nome já adicionado!");
        return
    }
    

    let lista = document.getElementById("lista-amigos");

    pessoas.push(amigos.value);

    if (lista.textContent == ""){
        lista.textContent = amigos.value;
    } else {
        lista.textContent = lista.textContent + ", " + amigos.value;
    }
    
    amigos.value = "";
}

function sortear() {

    embaralha(pessoas)

    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = ""; // Limpar o conteúdo anterior

    for (let i = 0; i < pessoas.length; i++) {

        if( pessoas.length < 4) {
            alert("Digite pelo menos 4 nomes.");
            return
        } else{
        let amigoRecebe = (i === pessoas.length - 1) ? pessoas[0] : pessoas[i + 1];
        listaSorteio.innerHTML += pessoas[i] + " --> " + amigoRecebe + "<br>";
        }
    }
}


function embaralha(lista) {
 
    for (let indice = lista.length; indice; indice--) {

        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);

        //atribuição via destructuring
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}


function reiniciar() {
    pessoas = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML= "";
}

