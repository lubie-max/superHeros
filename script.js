


const BASE_URL = 'https://www.superheroapi.com/api.php'
const TOKEN = '749814503011060'  // 👈 token for the API



//  fetch('https://www.superheroapi.com/api.php/749814503011060/') 👈👈 Standerd url(API)
// 👉👉  Random superhero Functionallity.

const imgDiv = document.getElementById('imgDiv')
const superheroName = document.getElementById('name')
const durability = document.getElementById('durability')
const intelligence = document.getElementById('intelligence')
const speed = document.getElementById('speed')
const strength = document.getElementById('strength')

const getSuperHero = (id)=>{

 fetch(`${BASE_URL}/${TOKEN}/${id}`)  // 👈👈 Requesting Responce to the API
 .then(response => response.json())   //👈👈 JSON Responce
 .then(json=> {
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

// getSuperHero(309) //checking

const newSuperHeroBtn = document.getElementById('superHerobtn')
const randomHero  = ()=>{
    let herosCount = 731
   return Math.floor( Math.random()*herosCount) +1
} 
newSuperHeroBtn.onclick =  ()=> getSuperHero(randomHero())



// search Super Hero Functionality

const searchInput = document.getElementById('searchInput')
const search = document.getElementById('search')

const  searchSuperHero= (name)=>{
console.log(search.value)


    fetch(`${BASE_URL}/${TOKEN}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
        // console.log(json)
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


search.onclick = ()=>  searchSuperHero(searchInput.value)