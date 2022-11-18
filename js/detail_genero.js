let qs = location.search;
let qsObj = new URLSearchParams(qs);
let genero = qsObj.get("detallegenero");
let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7";
let urlgenero= `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genero}&with_watch_monetization_types=flatrate`

let sectiongenero= document.querySelector(".conteiner")
let variostitulosprincipales= document.querySelector(".variostitulosprincipales");

fetch(urlgenero)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    let pelisdelgenero=""; 
    console.log(data)
    for (let i = 0; i <5; i++) {
        console.log(data.results[i]);

        let imagen= data.results[i].poster_path;
        let titulo= data.results[i].title;
        let id = data.results[i].id

        pelisdelgenero += `<article class="portadaFavoritos"> 
        <a href="./detail_series.html?idPersonaje=${id}">
            <img class= "alvin1" src="${imagen}" alt="">
            <h3 class="texto-info">${titulo}</h3>
        </a>
    </article>`        
    }


    sectiongenero.innerHTML= pelisdelgenero;
    return data



})
.catch(function (error) {
    console.log(error)
    return error
})
