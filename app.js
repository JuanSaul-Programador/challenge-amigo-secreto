// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
        //Capturamos el valor del campo de entrada
        let nombre  = document.getElementById('amigo').value;

        //Validamos que el campo no este vacio
        if(nombre === ''){
            alert('Por favor inserte un nombre');
            return;
        }
        //Actualizamos el array de amigos
        amigos.push(nombre);

        //Mostramos lista de amigos
        mostrarListaAmigos()

       //Limpiamos campo de entrada
        document.getElementById('amigo').value ='';
}

function mostrarListaAmigos(){
       //Obtenemos lista del elemento
       let lista = document.getElementById('listaAmigos')
       //Limpiamos Lista
       lista.innerHTML = "";
       //Iteramos sobre el arreglo
       for(let i = 0; i < amigos.length; i++){
           lista.innerHTML += "<li>" + amigos[i] + "</li>"
       }
}


function sortearAmigo(){
    //Validamos amigos disponibles
    if(amigos.length === 0){
        alert('No hay amigos disponibles para sortear.');
        return;
    }
    //Generamos un indice aleatorio
    let indiceAletorio = Math.floor(Math.random()* amigos.length);
    //Obtenemos el nombre aleatorio
    let amigoSorteado = amigos[indiceAletorio];

    //Limpiamos lista de amigos
    document.getElementById('listaAmigos').innerHTML = '';
 
    //Mostramos el resultado
    document.getElementById('resultado').innerHTML = `El amigo sorteado es : ${amigoSorteado}`;
}