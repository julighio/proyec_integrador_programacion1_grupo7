// PUNTO 1, modificando el buscador y sus especificaciones
let buscador = document.querySelector(".formulario");
let resultadoBusqueda = document.querySelector(".buscador");
let container=document.querySelector(".cards");  // linkearlo a nuestro "container"

buscador.addEventListener("submit", function(e) {
    e.preventDefault();
    if (resultadoBusqueda.value == ''){
        alert("Esta vacío. Ingrese una busueda");
    }
    else if (resultadoBusqueda.value.length<3){
        alert("Tiene que contener al menos 3 caracteres")
    }else {
        this.submit();
    } 
});

let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlSeries= `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`
let urlPelis= ` https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1&include_adult=false`
let resultadoDeBusqueda= ".resultadoDeBusqueda"

fetch(urlPelis)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (data) {
    let peliculas='';
    for (let i=0; i<5; i++){
        console.log(data.results[i]);
        movies += `<article class="portadaCard">
                        <a href="./detail_series.html?idPersonaje=${data.results[i].title}">
                        <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
                        <p > Titulo: ${data.results[i].title}</p>
                        <p>Fecha : ${data.results[i].title}</p>
                        </a>
                    </article>`
    }
    container.innerHTML=movies;
    
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
