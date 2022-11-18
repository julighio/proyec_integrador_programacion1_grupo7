let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let recuperoStorage=localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);
let section = document.querySelector(".variostitulosprincipales");

if (favoritos.length == 0){
    section.innerHTML = "No hay lista de favoritos aún"
    
} else {
    for (let i =0; i< favoritos.length; i++) {

    /* Abro fetch */
    fetch()
    .then (function (respuesta) {
        return respuesta.json()
    })
    .then(function (data){
        console.log(data)

    return data
    })
    .catch(function (error) {
        console.log(error);
        return error
    })
    }
}


