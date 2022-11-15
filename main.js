//Part 1
let img = document.querySelector("#dogImage");
let getDogButton = document.querySelector("#button");

fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        return response.json();
})
    .then(function(data){
        img.src = data.message
})

getDogButton.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            img.src = data.message
        })
})

//Part 2
let weatherForm = document.querySelector("#weatherForm");
let cityInput = document.querySelector("#cityInput");
let submitButton = document.querySelector("#submitButton");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let desc = document.querySelector("#desc");

// https://goweather.herokuapp.com/weather/

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}}`))
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            temp.innerText = data.temperature
            wind.innerText = data.wind
            desc.innerText = data.description
        })
        cityInput.value = ""            
})