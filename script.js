console.log("js ok");

/*

 - prendiamo la cella (secondsContainer) che contiene il numero dei secondi dal dom e la incapsuliamo dentro una variabile

 - creiamo un array con 5 numeri casuali;
   let numeriGiusti = [];

 - creiamo una funzione che genera un numero random e che inseriche il numero dentro l'array;

 - chiamiamo 5 volte questa funzione

 - per ogni numero dentro l'array numeriGiusti, creiamo una cella, aggiungiamo il numero aggiungiamo la cella in pagina

 - creiamo il timer:
   - creiamo una variabile const secondi = 30;
   - creiamo una funzione ( const timerchanger = setInterval() )che ogni 1000ms esegua una funzione:
     - modifichiamo il testo di secondsContainer e ci mettiamo dentro --secondi;
     if (secondi <= 0){
        clearInterval(timerchanger)
        return;
     }

 - creiamo un array che conterra i numeri che l'utente ci ha dato
   let numUtente = [];

 - una volta che il timer è scaduto, chiediamo all'utente i cinque numeri uno alla volta con dei prompt
   const num1 = prompt("inserisci il numero 1");
   const num2 = prompt("inserisci il numero 2");
   const num3 = prompt("inserisci il numero 3");
   const num4 = prompt("inserisci il numero 4");
   const num5 = prompt("inserisci il numero 5");

 - creiamo un array vuoto dove inseriremo i numeri che l'utente ha indovinato
   let numeriIndovinati = [];

 - verifichiamo se il numero è giusto
   se numeriGiusti.includes(num1){
     aggiungi con il push num1 all'array numeriIndovinati;
     
   }

 - mostriamo all'utente il risultato finale

*/



// - prendiamo la cella (secondsContainer) che contiene il numero dei secondi dal dom e la incapsuliamo dentro una variabile
const secondsContainer = document.getElementById('secondscontainer'); 

// - creiamo un array con 5 numeri casuali;
let numeriGiusti = [];

// - creiamo una funzione che genera un numero random e che inserisce il numero dentro l'array;
const randomNumGenerator = () => {
    const randomNum = Math.floor(Math.random() * 100);
    numeriGiusti.push(randomNum);
    return randomNum;
}

// - chiamiamo 5 volte questa funzione
randomNumGenerator();
randomNumGenerator();
randomNumGenerator();
randomNumGenerator();
randomNumGenerator();

// bonus: aggiungi un selettore di difficolta?


console.log(numeriGiusti);











