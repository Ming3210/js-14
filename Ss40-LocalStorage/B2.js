let add = document.querySelector("#add")
let n = document.querySelector("#name")
let form = document.querySelector("#form")
let i = 0
let playerList = []

function addPlayer(){
    let player = {
        id : Math.random()*100000000000000000,
        name: n.value,
    }
    playerList.push(player)
    localStorage.setItem(`player${player.id}`, JSON.stringify(playerList));
    
}
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(key + ": " + value);
}


for(let i = 0; i < playerList.length; i++){
    console.log(playerList[i])
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    addPlayer()
})