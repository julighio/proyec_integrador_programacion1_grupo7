// capturamos elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let pelicula = qsObj.get("idPersonaje");

let titulo = document.querySelector('.tituloOriginal');
// let imagen = document.querySelector('.portadatom') --> no sabemos como hacer aparecer la imagen
let calificacion = document.querySelector('.calificacion');
let fecha = document.querySelector('.fechaEstreno');
let duracion = document.querySelector('.duracion');
let sinopsis = document.querySelector('.sinopsis')
let genero = document.querySelector('.genero')

let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlDetallePelicula = `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`

fetch(urlDetallePelicula)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data) 
    
    let generosPeliculas  = '';
    for (let i = 0; i < data.genres.length; i++) {
        generosPeliculas += `<ol><a class= "genero" href="./detail_genero.html">${data.genres[i].name}</a> </ol>`
    }
    console.log(generosPeliculas)
    titulo.innerText=data.original_title;
    calificacion.innerText=data.vote_average;
    fecha.innerText=data.release_date;
    duracion.innerText=data.runtime;
    sinopsis.innerText=data.overview;
    genero.innerHTML=generosPeliculas;

    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

