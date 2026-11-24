// Bonus 2 · Troppo alto, troppo basso
// La consegna è nel README, alla voce "Bonus 2 · Troppo alto, troppo basso".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
const numeroComputer = Math.floor(Math.random() * 100) + 1;
// # Fase di raccolta dati
let NumeroGiocatore = parseInt(prompt("inserisci un numero(1 a 100), prova ha indovinare il numero del PC"));

// # Fase di elaborazione

let tentativi = 1;

while (NumeroGiocatore !== numeroComputer) {
  if (isNaN(NumeroGiocatore) || NumeroGiocatore < 1 || NumeroGiocatore > 100) {
    console.log("Scrivi un numero da 1 a 100");
  } else if (NumeroGiocatore > numeroComputer) {
    console.log("Troppo alto");
  } else {
    console.log("Troppo basso");
  }
  NumeroGiocatore = parseInt(prompt("Riprova a indovinare:"));
  tentativi++;
}

// # Fase di output

alert(`Indovinato in ${tentativi} tentativi!`);