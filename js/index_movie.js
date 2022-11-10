let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlSeries= `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`
let urlPelis= `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`

let container = document.querySelector(".container") // linkearlo a nuestro "container"

let url = 'https://rickandmortyapi.com/api/character';

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        //Acá ya tenemmos los datos finales y es donde debemos escribir nuestro código.
        console.log(data);
        let arrayDePersonajes = data.results;

        //1 Donde: Capturo el elemento html en donde quiero hacer una modificación
        let seccion = document.querySelector('.container');
        let allCharacters = [];

        console.log(arrayDePersonajes);
        //2 Qué: recorro la información de la api y la organizo para mostarla en el html
        for(let i=0; i<arrayDePersonajes.length; i++){
            //Dentro del for voy acumulando en la variable una estructura html por cada personaje del array.
            allCharacters += `<a href="./detalle.html?buscador=${arrayDePersonajes[i].id}"><article>
                                <img src=${arrayDePersonajes[i].image} alt='${arrayDePersonajes[i].name}' />
                                <p>Name: ${arrayDePersonajes[i].name} </p>
                                <p>Status: ${arrayDePersonajes[i].status} </p>
                            </article></a>`
        }
        //Con toda la estructura html completa ahora la paso al DOM
        seccion.innerHTML = allCharacters;

    })
    .catch( function(e){
        console.log(e)
    })

fetch(urlPelis)
.then(function (respuesta) {
    return respuesta
})
.then(function (data) {
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

fetch(urlSeries)
.then(function (respuesta) {
    return respuesta
})
.then(function (data) {
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})