// I will show the results on this class: js-search-results
/* I Have to make a get and retreive: 
    i. Name of the Pokémon
    ii. One of the sprites available (You choose which, don’t take too much time choosing) [DONE]
    iii. List of moves [Done]
    iv. List of stats
*/

function show(responseJSON){
    let result = document.querySelector('.js-search-results')
    result.innerHTML = ""; //Clear for the next search always
    console.log(responseJSON);

   //Sprite And name of pokemon
    result.innerHTML = `<img src = "${responseJSON.sprites.back_default}"> Who is that pokemon? </img> <p>  ${responseJSON.name} </p>`
    //Stats
    responseJSON.stats.forEach(element => {
        result.innerHTML +=` <div> <p> base stat:  ${element.base_stat} </p>  <p> effort:  ${element.effort}</p> </div>`
    });

    //moves
    responseJSON.moves.forEach(element => {
            result.innerHTML += `<div> ${element.move.name} </div>`
    });


}

function getpokemon(searchpokemon){

    let settings = {
        method: 'GET'
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${searchpokemon}`

    fetch(url, settings).then(
        response =>{
            if(response.ok){
                return response.json();
            } 
            throw Error(response.statusText);

        }

    ).then(
        responseJSON => {
            show(responseJSON);
        }
    ).catch( err => {
        console.log("Pokémon not found");
    }
    )

    console.log(searchpokemon);
    console.log(url);


}

function watchform(){
    let sendbtn = document.querySelector('#search');
    let searchpokemon = "";
    console.log(searchpokemon);
    sendbtn.addEventListener('click', (event) =>{
        event.preventDefault();
        searchpokemon = document.querySelector('.js-query').value
        console.log("Button was clicked");
    
        getpokemon(searchpokemon); //Llamamos al get

    })
}

function init(){
    watchform();
}

init();