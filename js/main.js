let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


//hiermee start je altijd boven aan de pagina als je refresht
window.scrollTo(0,0);



setInterval(function(){
   document.getElementsByTagName("body")[0].style.overflow = "auto";
   document.getElementsByTagName("main")[0].style.opacity = "1";
}, 1500)


//als er op de filter knop gedrukt word... zijn de lijnen code hieronder
for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}


//als er op de filter knop gedrukt word ^ gaat de adventure genre weg
//

//adventure filter
let adventureFilter = document.getElementById("adventure");

adventureFilter.onchange = function(){
    if(adventureFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "adventure"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//sport filter
let sportFilter = document.getElementById("sport");

sportFilter.onchange = function(){
    if(sportFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sport"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//puzzle filter
let puzzleFilter = document.getElementById("puzzle");

puzzleFilter.onchange = function(){
    if(puzzleFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "puzzle"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "puzzle"){
                allGames[i].style.display = "none";
            }
        }
    }
}


//shooter filter
let shooterFilter = document.getElementById("shooter");

shooterFilter.onchange = function(){
    if(shooterFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "shooter"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "shooter"){
                allGames[i].style.display = "none";
            }
        }
    }
}

//action filler
let actionFilter = document.getElementById("action");

actionFilter.onchange = function(){
    if(actionFilter.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "block";
            }
        }
    }
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "action"){
                allGames[i].style.display = "none";
            }
        }
    }
}