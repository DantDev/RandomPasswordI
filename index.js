const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passOne = document.getElementById("password-one")
let passTwo = document.getElementById("password-two")

let passLenght = 15

function passGen() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function RandomPass() {
    let randomPassword = ""
    for(let i = 0 ; i < passLenght ; i++){
        randomPassword += passGen()
    }   
    return randomPassword
}

function getRandomPass(){
    passOne.textContent = RandomPass()
    passTwo.textContent = RandomPass()
    
}