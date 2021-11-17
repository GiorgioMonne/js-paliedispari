// Palidroma: Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// function isPalindr(word) {

//     let parolaStrana="";

//     for(let i = word.length-1; i >= 0; i--){
//         parolaStrana += word[i];
//     }
//     console.log(parolaStrana);

//     if(parolaStrana == word){
//         return 'parola palindroma';
//     }
//     return 'parola non palindroma';
// }


// let parola = prompt("Inserire una parola");
// let palindr = isPalindr(parola);

// document.querySelector(".palindrom").innerHTML = palindr;



// Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


let scelta = prompt("Scegli pari o dispari");



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let random = getRndInteger(1,5);
console.log("Il numero randomico scelto dal pc :" + random);

let parDisp = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log("Il numero inserito dall'utente :" + parDisp);

let sentinella = false;
let pariDispari = somma(parDisp,random);

function somma(num1,num2){
    som = num1 + num2;
    console.log("La somma dei due numeri :" + som);
    if(som %2 == 0){
        sentinella = true;
    }
}

if(sentinella){
    if(scelta == 'pari'){
        console.log("Ha vinto l'utente");
    }else{
        console.log("Ha vinto il pc");
    }
}else{
    if(scelta == 'dispari'){
        console.log("Ha vinto l'utente");
    }else{
        console.log("Ha vinto il pc");
    }
}

console.log(scelta);



