// Palidroma: Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

function isPalindr(word) {

    let parolaStrana="";

    for(let i = word.length-1; i >= 0; i--){
        parolaStrana += word[i];
    }
    console.log(parolaStrana);

    if(parolaStrana == word){
        return 'parola palindroma';
    }
    return 'parola non palindroma';
}


let parola = prompt("Inserire una parola");
let palindr = isPalindr(parola);

document.querySelector(".palindrom").innerHTML = palindr;



// Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.