let apiKey= "371e304b1b9f8df6a3f0e225dc4511b7"
let urlSeries= `https://api.themoviedb.org/3/tv/{tv_id}?api_key=${apiKey}&language=en-US`
let urlPelis= `https://api.themoviedb.org/3/movie/{movie_id}?api_key=${apiKey}&language=en-US`

let container = document.querySelector(".container") // linkearlo a nuestro "container"

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