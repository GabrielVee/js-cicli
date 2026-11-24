// Traccia 06 · Il lucchetto
// La consegna è nel README, alla voce "06 · Il lucchetto".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione


// # Fase di raccolta dati

let codice = parseInt(prompt("Inserisci il codice per il lucchetto"));
// # Fase di elaborazione
while (codice !== 482) {

  console.log("Combinazione sbagliata, riprova");
  codice = parseInt(prompt("Inserisci il codice per il lucchetto"));
}



// # Fase di output
alert("Lucchetto aperto!");
