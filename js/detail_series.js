// capturamos elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let serie = qsObj.get("idPersonajes");

let titulo = document.querySelector('.titulotomfriends');
let calificacion = document.querySelector('.calificacion');
let fecha = document.querySelector('.fecha');
let sinopsis = document.querySelector('.sinopsis')
let genero = document.querySelector('.generoItem')
let portadaSerie = document.querySelector('.portadatom');
let fav=document.querySelector(".botonFav");

let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlDetalleSerie = `https://api.themoviedb.org/3/tv/${serie}?api_key=${apiKey}&language=en-US`
let urlDondeVerSerie= `https://api.themoviedb.org/3/tv/${serie}/watch/providers?api_key=${apiKey}`

fetch(urlDetalleSerie)
.then(function (respuesta) {
    return respuesta.json()
})
.then(function (data) {
    console.log(data) 
    
    let generosSeries  = '';
    for (let i = 0; i < data.genres.length; i++) {
        generosSeries += `<ol><a class= "generoItem" href="./detail_genero.html">${data.genres[i].name}</a> </ol>`
    }
    let portada = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    console.log(generosSeries)
    titulo.innerText=data.name;
    calificacion.innerText="Calificación: "+ data.vote_average;
    fecha.innerText="Fecha de estreno: "+data.first_air_date;
    sinopsis.innerText="Sinopsis: "+data.overview ;
    genero.innerHTML="Genero: "+ generosSeries ;
    portadaSerie.src=portada;

    return data
})
.catch(function (error) {
    console.log(error);
    return error
})

let favoritos=[]

let recuperoStorage = localStorage.getItem("favoritos")

if (recuperoStorage != null) {
    favoritos =  JSON.parse(recuperoStorage)
}

if (favoritos.includes(serie)) {
    fav.innerText = "Quitar de favoritos";
}

fav.addEventListener("click", function(e) {
    e.preventDefault();

    if (favoritos.includes(serie)) {
       let indice = favoritos.indexOf(serie)
       favoritos.splice(indice, 1);
       fav.innerText = "Agregar a Favoritos";
    }else{
        favoritos.push(serie)
        fav.innerText = "Quitar de favoritos"
    }

    let favsToString = JSON.stringify(favoritos);
    localStorage.setItem("favoritos", favsToString )
})


