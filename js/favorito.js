let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
/* Recupero del array de las peliculas */
let recuperoStorage=localStorage.getItem('favoritos'); /*metodo  que me dice que insertes la key como string, recupero la informacion en el local storage*/
let favoritos = JSON.parse(recuperoStorage); /* Quiero transformar el json en string/array para converitrlo en un dato manipulable en java script */
/*Aca ya recuperamos el array*/

/* Recupero del array de las series */
let recuperoStorageSeries=localStorage.getItem('favoritosSeries'); /*metodo  que me dice que insertes la key como string, recupero la informacion en el local storage*/
let favoritosSeries = JSON.parse(recuperoStorageSeries);

let section1 = document.querySelector(".conteiner1");
let section2 = document.querySelector(".conteiner2")

/* Bloque de codigo para el array de las peliculas */
if (favoritos.length == 0 || favoritos==null){
    section1.innerHTML = '<p>No hay lista de series favoritas aún</p>'
    
} else {
    let pelisFavoritas = ''
    for (let i = 0; i < favoritos.length; i++) {
        let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${apiKey}&language=en-US` /*Url donde busco los datos de mi pelicula */
        /* Abro fetch para buscar la información de los personajes */
        fetch(url)
        .then (function (respuesta) {
            return respuesta.json()
        })
        .then(function (data){
            console.log(data)
            let titulo = data.title
            let imagenes = data.poster_path
            let id = data.id
            let fecha = data.release_date
            pelisFavoritas += `<article class="portadaCard">
                                    <a href="./detail_movie.html?idPersonaje=${id}">
                                    <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                                    <p > Titulo: ${titulo}</p>
                                    <p>Fecha : ${fecha}</p>
                                    </a>
                                </article>`
            section1.innerHTML=pelisFavoritas

            return data
        })
        .catch(function (error) {
            console.log(error);
            return error
})
    }
}

/** Bloque de codigo para el array de las series */
if (favoritosSeries.length == 0 || favoritosSeries==null){
    section2.innerHTML = '<p>No hay lista de series favoritas aún</p>'
    
} else {
    let seriesFavoritas = ''
    for (let i = 0; i < favoritosSeries.length; i++) {
        let urlSeries = `https://api.themoviedb.org/3/tv/${favoritosSeries[i]}?api_key=${apiKey}&language=en-US` /*Url donde busco los datos de mi serie */
        /* Abro fetch para buscar la información de los personajes */
        fetch(urlSeries)
        .then (function (respuesta) {
            return respuesta.json()
        })
        .then(function (data){
            console.log(data)
            let titulo = data.name
            let imagenes = data.poster_path
            let id = data.id
            let fecha = data.first_air_date

            seriesFavoritas += `<article class="portadaCard">
                            <a href="./detail_series.html?idPersonajes=${id}">
                            <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                            <p > Titulo: ${titulo}</p>
                            <p>Fecha : ${fecha}</p>
                            </a>
                        </article>`
            section2.innerHTML=seriesFavoritas

            return data
        })
        .catch(function (error) {
            console.log(error);
            return error
})
    }
}
