const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPass = document.getElementById("pass1");
let secondPass = document.getElementById("pass2");
let delPass = document.getElementById("del-btn")

function getRandomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
};

function getRandomPass1 () {
    for (let i =0; i <16; i++ ) {
        firstPass.textContent += `${getRandomChar()}`
    }
}




function getRandomPass2 () {
    for (let i = 0; i < 16; i++) {
        secondPass.textContent += `${getRandomChar()}`
    }
}

function newPasswords() {
    firstPass.textContent = ``;
    secondPass.textContent = ``;
    getRandomPass1()
    getRandomPass2()
}

