//  fetch('https://www.superheroapi.com/api.php/749814503011060/') 👈👈 Standerd url(API)


// 👉 Superhero API's Base Url 👇👇
const BASE_URL = 'https://www.superheroapi.com/api.php'
const TOKEN = '749814503011060'  // 👈 token for the API



// 👉 Getting HTML elements by their IDs 👇👇
const imgDiv = document.getElementById('imgDiv')
const superheroName = document.getElementById('name')
const durability = document.getElementById('durability')
const intelligence = document.getElementById('intelligence')
const speed = document.getElementById('speed')
const strength = document.getElementById('strength')

// 👉👉  Random superhero Functionallity. 👈👈
const getSuperHero = (id) => {

    fetch(`${BASE_URL}/${TOKEN}/${id}`)  // 👈👈 Requesting Responce to the API
        .then(response => response.json())   //👈👈 JSON Responce
        .then(json => {
            console.log(json)
            imgDiv.innerHTML = `<img src= "${json.image.url}"  >`;
            superheroName.innerHTML = `<h1> ${json.name} </h1>`
            durability.innerHTML = `<p> Durability🤜 : ${json.powerstats.durability}</p>`
            intelligence.innerHTML = `<p> Intelligence🧠 : ${json.powerstats.intelligence}</p>`
            speed.innerHTML = `<p> Speed⏲ : ${json.powerstats.speed}</p>`
            strength.innerHTML = `<p> Strength💪 : ${json.powerstats.strength}</p>`
        }

        )
}


// 👉 Button to get Random Superhero  👇👇
const newSuperHeroBtn = document.getElementById('superHerobtn')

// 👉 Random Fuctionallity to get random superhero among 731 superheros 👇👇
const randomHero = () => {
    let herosCount = 731
    return Math.floor(Math.random() * herosCount) + 1
}


// 👉 adding onclick event to 'newSuperHeroBtn' and getSuperHero() function to it 👇👇
newSuperHeroBtn.onclick = () => getSuperHero(randomHero())




// 👉 Searching super hero with name >>Functionallity.  👇👇

// 👉 getting input as 'searchInput' and button as 'search' 👇👇
const searchInput = document.getElementById('searchInput')
const search = document.getElementById('search')

// 👉 Search function which takes name as an argument 👇👇
const searchSuperHero = (name) => {

    fetch(`${BASE_URL}/${TOKEN}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            const hero = json.results[0]
            console.log(hero)
            imgDiv.innerHTML = `<img src= "${hero.image.url}" >`;
            superheroName.innerHTML = `<h1> ${hero.name} </h1>`
            durability.innerHTML = `<p> Durability🤜 : ${hero.powerstats.durability}</p>`
            intelligence.innerHTML = `<p> Intelligence🧠 : ${hero.powerstats.intelligence}</p>`
            speed.innerHTML = `<p> Speed⏲ : ${hero.powerstats.speed}</p>`
            strength.innerHTML = `<p> Strength💪 : ${hero.powerstats.strength}</p>`

        })

}


// 👉 onclick event listener to the search button and passing searchSuperHero() to it 👇👇
search.onclick = () => searchSuperHero(searchInput.value)