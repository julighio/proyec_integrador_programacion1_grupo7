// capturamos elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let pelicula = qsObj.get("idPersonaje");

let titulo = document.querySelector('.tituloOriginal');
let calificacion = document.querySelector('.calificacion');
let fecha = document.querySelector('.fechaEstreno');
let duracion = document.querySelector('.duracion');
let sinopsis = document.querySelector('.sinopsis');
let genero = document.querySelector('.genero');
let portadaPelicula = document.querySelector(".portadatom");
let fav=document.querySelector(".botonFav");
let verMas = document.querySelector('.verMas');
let rec = document.querySelector('#reco');
let dondeVer=document.querySelector('.dondeVer');

let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlDetallePelicula = `https://api.themoviedb.org/3/movie/${pelicula}?api_key=${apiKey}&language=en-US`
let urlDondeVerPelicula = `https://api.themoviedb.org/3/movie/${pelicula}/watch/providers?api_key=${apiKey}`
let urlVerMas = `https://api.themoviedb.org/3/movie/${pelicula}/recommendations?api_key=${apiKey}&language=en-US&page=1`

/* Fetch del detalle de cada pregunta*/
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
    let portada = `https://image.tmdb.org/t/p/w500${data.poster_path}`
   
    console.log(generosPeliculas)
    titulo.innerText= data.original_title;
    calificacion.innerText="Calificacion: " + data.vote_average;
    fecha.innerText="Fecha de estreno: " +data.release_date;
    duracion.innerText="Duración: " +data.runtime;
    sinopsis.innerText="Sinopsis: " +data.overview;
    genero.innerHTML="Género: " +generosPeliculas;
    portadaPelicula.src=portada;


    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

/* Muestra dnde se pueden ver las peliculas*/ 
fetch(urlDondeVerPelicula)
.then(function(respuesta) {
    return respuesta.json()
})
.then(function(data) {
    console.log("WATCH",data)
    let dondeVerPeli  = '';
    for (let i = 0; i < data.results.US.rent.length; i++) {
        dondeVerPeli += `<li class= "dondeVer"> ${data.results.US.rent[i].provider_name}</li>`
    }
    dondeVer.innerHTML+=dondeVerPeli
})
.catch() 

/* Boton de favoritos*/
let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(pelicula)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(pelicula)) {
       let indice = favoritos.indexOf(pelicula)
       favoritos.splice(indice, 1);
       fav.innerText = "Agregar a Favoritos";
    }else{
        favoritos.push(pelicula)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})

/* Recomendaciones, fetch + evento*/
fetch(urlVerMas)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data)
    let recomendaciones="";  
    for (let i=0; i<3; i++){
        console.log(data.results[i]);
        recomendaciones += `<article class="portadaCard">
        <a href="./detail_movie.html?idPersonaje=${data.results[i].id}">
        <img class= "portada" src= "https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">
        <p > Titulo: ${data.results[i].titulo}</p>
        <p>Fecha : ${data.results[i].fecha}</p>
        </a>
    </article>`

    }
    rec.innerHTML=recomendaciones;
    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

let mostrarRec = false;

verMas.addEventListener("click", function(e) {
    e.preventDefault();
    if (mostrarRec) {
        rec.style.display="none";
        verMas.innerText="Ver recomendaciones";
        mostrarRec=false;
    } else {
        rec.style.display="flex";
        verMas.innerText="Ocultar recomendaciones";
        mostrarRec=true;

    }
})

