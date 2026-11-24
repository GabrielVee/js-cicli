// Traccia 05 · La media dei voti
// La consegna è nel README, alla voce "05 · La media dei voti".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione
let voto = 0;
let sommaVoti = 0;
// # Fase di raccolta dati
let quantitàVoti = parseInt(prompt("Inserisci il numero di voti"));

// # Fase di elaborazione
if (isNaN(quantitàVoti) || quantitàVoti < 1) {
  alert("Nessun voto da calcolare");
} else {
  for (let i = 1; i <= quantitàVoti; i++) {
    voto = parseInt(prompt(`Voto ${i} di ${quantitàVoti}`));
    sommaVoti += voto
  }
  let media = sommaVoti / quantitàVoti;
}

// # Fase di output
alert(`Media: ${media.toFixed(1)}`);
