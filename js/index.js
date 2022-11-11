
let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlSeries= `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`
let urlPelis        = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
let urlSugerencias  = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`


let section1 = document.querySelector (".cards");
let section2 = document.querySelector (".cards2");
let section3 = document.querySelector (".cards3");

//section1
fetch(urlSugerencias)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {

    let sugerencias=''; 
    for (let i=0; i<5; i++){
        console.log(data.results[i]);

        let titulo = data.results[i].title
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].release_date

        sugerencias += `<article class="portadaCard">
                        <a href="./detail_series.html?idPersonaje=${id}">
                        <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                        <p > Titulo: ${titulo}</p>
                        <p>Fecha : ${fecha}</p>
                        </a>
                    </article>`
    }
    section1.innerHTML=sugerencias;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

//section 2
 fetch(urlPelis)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {
    let movies=''; 
    for (let i=0; i<5; i++){
        console.log(data.results[i]);

        let titulo = data.results[i].title
        let imagenes = data.results[i].poster_path
        let id = data.results[i].id
        let fecha = data.results[i].release_date

        movies += `<article class="portadaCard">
                        <a href="./detail_series.html?idPersonaje=${id}">
                        <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                        <p > Titulo: ${titulo}</p>
                        <p>Fecha : ${fecha}</p>
                        </a>
                    </article>`
    }
    section2.innerHTML=movies;
    
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

//section3
fetch(urlSeries)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
let series=''; 
for (let i=0; i<5; i++){
    console.log(data);

    let titulo = data.results[i].title
    let imagenes = data.results[i].poster_path
    let id = data.results[i].id
    let fecha = data.results[i].release_date

    series += `<article class="portadaCard">
                    <a href="./detail_series.html?idPersonaje=${id}">
                    <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${imagenes}">
                    <p > Titulo: ${titulo}</p>
                    <p>Fecha : ${fecha}</p>
                    </a>
                </article>`
}
section3.innerHTML=series;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})
 