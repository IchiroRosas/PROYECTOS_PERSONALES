let arrayAmigos = [];

function agregarAmigo(){
    let amigoAgregar = document.getElementById('amigo');

    if(amigoAgregar.value==''){
        alert('Por favor, inserte un nombre.');        
    }else{
        arrayAmigos.push(amigoAgregar.value);
        amigoAgregar.value='';
        actualizarListaAmigos();  
    }
}

function actualizarListaAmigos(){
    let listadoMostrar = document.getElementById('listaAmigos');
    listadoMostrar.innerHTML = '';
    for(let i=0; i<arrayAmigos.length; i++){
        let li = document.createElement('li');        
        li.textContent = arrayAmigos[i];        
        listadoMostrar.appendChild(li);
    }
}

function sortearAmigo(){
    if(arrayAmigos.length>0){
        let amigoSorteado = document.getElementById('resultado');        
        let numeroSorteado = Math.floor(Math.random()*arrayAmigos.length);
        let li = document.createElement('li');
        li.textContent = `El amigo secreto sorteado(a) es: ${arrayAmigos[numeroSorteado]}`;
        amigoSorteado.appendChild(li);
    }else{
        alert('Por favor inserte un nombre.')
    }
}