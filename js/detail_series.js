// capturamos elementos del DOM
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let serie = qsObj.get("idPersonajes");

let titulo = document.querySelector('.titulotomfriends');
// let imagen = document.querySelector('.portadatom') --> no sabemos como hacer aparecer la imagen
let calificacion = document.querySelector('.calificacion');
let fecha = document.querySelector('.fecha');
let sinopsis = document.querySelector('.sinopsis')
let genero = document.querySelector('.generoItem')

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
    console.log(generosSeries)
    titulo.innerText=data.name;
    calificacion.innerText=data.vote_average;
    fecha.innerText=data.first_air_date;
    sinopsis.innerText=data.overview;
    genero.innerHTML=generosSeries;

    return data
})
.catch(function (error) {
    console.log(error);
    return error
})
