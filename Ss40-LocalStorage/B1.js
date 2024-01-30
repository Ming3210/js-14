let n = document.querySelector("#name")
let age = document.querySelector("#age")
let email = document.querySelector("#email")
let form = document.querySelector("#form")
let list = [] 

function createUser(){
    let info = {
        name: n.value,
        age: age.value,
        email: email.value
    }
    list.push(info)
    localStorage.setItem("info",JSON.stringify(list))
    console.log(list)
}
const a = JSON.parse(localStorage.getItem("info"))
console.log(a)


form.addEventListener("submit", function(event){
    event.preventDefault()
    createUser()
})
localStorage.clear()