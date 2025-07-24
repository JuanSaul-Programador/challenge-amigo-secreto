// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){

        let nombre  = document.getElementById('amigo').value;

        if(nombre === ''){
            alert('Por favor inserte un nombre');
            return;
        }
        amigos.push(nombre);
       mostrarListaAmigos()
        document.getElementById('amigo').value ='';
}

function mostrarListaAmigos(){
       //Obtenemos lista del elemento
       let lista = document.getElementById('listaAmigos')
       //Limpiamos Lista
       lista.innerHTML = "";
       //Iteramos sobre el arreglo
       for(let i = 0; i < amigos.length; i++){
           //Agregamos elementos
           lista.innerHTML += "<li>" + amigos[i] + "</li>"
       }
}

